import fs from 'fs';
const html = fs.readFileSync('index-10.html', 'utf-8');
const assetRegex = /(?:src|href)="(assets\/[^"]+)"/g;
const assets = new Set();
let match;
while ((match = assetRegex.exec(html)) !== null) { assets.add(match[1]); }
const cssUrlRegex = /url\(['"]?(assets\/[^'"\)]+)['"]?\)/g;
while ((match = cssUrlRegex.exec(html)) !== null) { assets.add(match[1]); }
console.log(Array.from(assets).join('\n'));
