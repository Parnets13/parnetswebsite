const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('index-10.html', 'utf-8');
const assetRegex = /(?:src)="([^"]+\.(png|jpg|jpeg|svg|webp))"/g;
const cssUrlRegex = /url\(['"]?([^'"\)]+\.(png|jpg|jpeg|svg|webp))['"]?\)/g;

const assets = new Set();
let match;
while ((match = assetRegex.exec(html)) !== null) {
  assets.add(match[1]);
}
while ((match = cssUrlRegex.exec(html)) !== null) {
  assets.add(match[1]);
}

assets.forEach(asset => {
  // if starts with ./, remove it
  if (asset.startsWith('./')) asset = asset.substring(2);
  
  if (asset.startsWith('assets/images')) {
    const url = 'https://themejunction.net/html/bexon/demo/' + asset;
    const dest = path.join(__dirname, 'public', asset);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (!fs.existsSync(dest)) {
        https.get(url, (res) => {
        if (res.statusCode === 200) {
            const file = fs.createWriteStream(dest);
            res.pipe(file);
        }
        }).on('error', (err) => console.log(err));
    }
  }
});
console.log('Detected ' + assets.size + ' assets. Downloading them...');
