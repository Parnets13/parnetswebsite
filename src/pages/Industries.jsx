import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Stethoscope, ShoppingCart, BookOpen, Landmark, UtensilsCrossed, Plane, Users, Gamepad2, Home, Zap, Leaf, Car, Music } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';

// Industry Card Component
const IndustryCard = ({ industry }) => {
  return (
    <FadeInUp>
      <div className="group h-full">
        <div className="relative bg-white rounded-[40px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-primary h-full flex flex-col p-6">
          
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 rounded-[35px] mb-6">
            <img 
              src={industry.image} 
              alt={industry.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-[35px]"
            />
            
            {/* Dark Overlay - Appears on Hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>

            {/* Top Right Corner Cut Design */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-white/20"></div>
            
            {/* Decorative Corner Badge */}
            <div className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-br ${industry.color} text-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
              {industry.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3 group-hover:text-gray-700 transition-colors">
              {industry.description}
            </p>

            {/* Divider */}
            <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-transparent mb-6 group-hover:w-full transition-all duration-500"></div>

            {/* CTA Button */}
            <Link 
              to="/industries-details" 
              state={{ industry }}
              className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-secondary transition-all duration-300 group/link"
            >
              <span className="relative">
                View Details
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover/link:w-full transition-all duration-300"></span>
              </span>
              <ArrowUpRight className="w-5 h-5 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
};

const Industries = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const industries = [
    {
      id: 1,
      name: 'Healthcare',
      icon: <Stethoscope className="w-12 h-12" />,
      description: 'Patient management systems, telemedicine platforms, and health tracking applications',
      image: 'https://kanopi.com/wp-content/uploads/2023/04/healthcare-website-design_ucsf-1024x655.png',
      color: 'from-red-500 to-pink-500',
      projects: 3
    },
    {
      id: 2,
      name: 'E-Commerce',
      icon: <ShoppingCart className="w-12 h-12" />,
      description: 'Multi-vendor marketplaces, shopping platforms, and inventory management systems',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBcWGBgXGBkdGhoZGBcXFxcdFxUaHSggGxolGxgYIjEhJSorLi4uGiAzODMtNygtLisBCgoKDg0OGxAQGy0mICUuLS0tLS0tLi0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABGEAABAwIDBAYGBwYGAQUBAAABAgMRACEEEjEFQVFxBhMiYYGRMlKhscHRM0JTcpKy8AcUFiMk0hU0YqLh8YJDg5PC06P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMBEAAgECBAMFCAMBAAAAAAAAAAECAxEEEiExFDJRE0FScZEiM2GBobHR8AUjQuH/2gAMAwEAAhEDEQA/AN4jQcq6aYnQcqcK5z6I5Ncp1NNA0crs0jXKBnCaXdSmud9AxGuGluqbBYNTq8qYsJJOgG7xo3E5KKuyGaR76tT0eWJPWIA5GhhsqRIfbMpC9/okwDymnlZjxdHxAQ9tcqyb2GpRIDqCUxmsd4keypR0bc9dPkaMrHxdHxFPNNNXX8NufaJ8jXD0ac+0T5GjIw4uj4imroPyq2c6PrGrqBOljUY2ETo837aMjHxlHxFXxrgPdVt/gSvtm/bvj/il/D6vtW/I0ZGPjKPiKk/r/ummrpPRtw36xBB7jS/hdz7RPkaWRjWMoeL7lKJ7vCl4Vd/ww5ucR5Gufwu59onyNGRhxlDxfcpKVW/8OLnL1qJ4XmuK6OKGrzY8+RoySHxlDxFOTHOuKq8R0aWdHUHfYGo8X0ccQhSsyVZQSRcGBwNGRjWMoN2zFP8Ar9eNIGuJNhS86g6hGKaDvrubdTVmx7gTQUgR5Uk/rl7vbTP0P17aaDXNBWNzpUbaEqCe741IieFDgj/mpWlZjVJkyRMOG7Son9fD9b6mIqB8CdN3GtDFmiBt4VeYfZ7IaStwgSASVKyi4mNQKpALeFavBJBabBE9hP5RW0NTw8ZOUYrK7AJw2E9ZH/yeHrU9rAYZRhOVR1gLJPlNWIbHAeQpJbAMgAHSYFaWR5/bVPE/UD/wdn1T+JXzrh2Mz6p/Er50fSosg7ep4n6gH+Cs+qfxK+dI7FZ9T/cr50fSosg7er4n6lediMeofxK+dPwWCQ2tWQRIvcnf30bUKPTPKiyB1aklZyfqT0CramHBUkutApVkUFKSIUAlRF+AWnzo6hlYBo6tNmbmUp1knhxJPiaZkSYd1CxmQpKkn6ySCDFtRrcRUilAXNNbbCRCQAOAEDyFR/vaM2TOnNplm9hJtyoAd+8I9ZPmKX7yj10+Yrj2JQkwpQB1vXGMWhZhKwo62NAEqFg3BBHdTqgOKRmyZhm4Te+lvEedJ/FIR6agnfc7qAJ6VRsPJWJSQRxHn8aiRjmyYC0kzEA76ACaVQv4lCIzKAnSTrXWcQlQzJUCBvBtQA9SgASdBXQaiYxKF+ioKiNDx0phxzYntpsY130ASuOgFIOqjA8ppi8QAoJAJJMGBYWmST3e+uoyOAKASrgbHeDY8wPKpMomYE6TvjnQCIWcWFqKUgmNTumYj3+VSYlMoUDoUkeyuobAmABOsDXn50zGEhtZGuVUc4MUDW5V4fYuGUIyXGvaX86n/wAAw/2f+9f91ZrBKdYK3krWsmC6HEgJMerA77QTE331t6yg090byr1VtN+rKl7YeFSCpSIAuTnX/dTMPsjCOJlCcwuPTX5a1Qftl2k7h9mqcZWUL6xsSI0JuLjfVD+w7br2JVi0uPLcShLBAXl7KlF4GMqU2KUINxwG6Ttlhl21Mniq+Ze07eb/ACbPauycBh2lOuoyoTH13CSTZKUpCpUokwANSaE6M4PB4xkPJwjzSCTl65UFY0zJyOqlB3HfqJEGrrpLsFrGslh4EpkKj/Um6Z4gGDG+L2msz0f2q9h3G8M/AQGkqQU3KkqkIGSLERBhRuPRvIxkoR3RvHEYiW05erNCejGEEfy77v5jl9Tbtc6c30Zwqbhr/ev+6qHCrxS8YgqcSporypCk5XGwA46B2TlVmDeUmAQBv1rbU4KMtUgniK8dHOXq/wAnnu1sKGnltpNhETrcA3Piaq8Sb79PnV30lH9U5yR+UVR4sCdQLfE1k9z6ChJypRb3sjSRatXgPom/uJ/KKyp08K1eA+ib+4n8orSmeNjeVE9KlXm/S7pji8O+8hstw2RAUiTCkpIvPFQ8jVyko7nLQw8q0ssTU9JulCcGtlCm1L61WWUkDL2kpkzr6VX9fP8AtzbL+JbD7qiVJXIIkBCbEQPq3y34xXr/AECxzj2CaW6oqX2gVHUwogT3xUwndnTisIqVKMk1fZ+fcaGq51bgUYQ1E6l1YO+JTkIGo31Y0IXUyZVxt2t19ZjdVuxwJN7EZfdsAlqI+0V/+eldwTiys5wgWtlUVb98pHdTy82PrG44q0ruGUkqJSZEd/HvpgEqNqHLh40QvQ0NSYI71pp3WHjQrjkE9tAved0JzHfrF+VRnFAAnrGrAH0hor0bzadxpXKsg7rDTVOnjQyH50W2eRm+h0PGacUr4p8jRcEkS9crjS65XGoUhU3iORmpAKCmkh6XTxqPE4spsNakFVa1SSeNZVZuK0KpQUpakoxznrewfKgtr9J0YYJLq7qMJSEypR7kgSalNedbR24GtoOuLbU6UlLKInsAiTEA3UZgb4rCLqSeWO50VOypxcp2SPQNmdMGXl9WCpKzolxCkFQ4oCwJ99O270rawqQXVQT6KQJWrkkbu82rBdL9tKW43h0MSHEJcaUR2yo5YLZzDKRm0IMgK0ANU2HwTuMcWVODOG0HOskBKbCAoXBsq/dxq3KorJvciMaUnLKnp3dfI9O2V0uS8Ugh1pS/QDreXNYnsqukmATAMxVw9ilgSFaX09/zryfam0cfhcIxmSnElDgLipKiIdBbHW2kx9Y8L8T6mkyOYobkv9XHaN+W3W6CNm4tSlFKjeJ3bom8DjRmJTKFA70keyq/ZLZClWjx5aTutVjiD2Vcj7q2pNuOphWSU9CjwWwJILjvWIsQnKE6aZiDfyFX5ofCTAvI5j5UQauMUtjOTbZXbe2Y1imVsOhCgqLLSFAKBkHKd4NDdFujTOCQtLaWwVmVKQ2lEwISCBrF/M1aKcEmVgeKefDhTwk+sfZ8qtT0ykOCvmH1n9s9GMPiGmm862yzk6pxtSesTkiBmUFBQ0kEHzrQGhkuTooH/wAk+H1f1FS7d5SBNi7CRh0wXHHlZs+d4pKgcpTbIlKRYqFhvNWtcSO+a7TSsJu5hOkv+aXyT+UVSYqJ1i3d31c9Jz/UuckfkFUGLWQbcPnXNLmZ9Th1/RDyRrCLVqcB9E39xP5RWZOlabAfRN/cT+UVVLc8bGP2UT14r+1xakYp0BMhbbRnfM5fcNa9qryH9sSXRiUdWw44FtIBUhtSgClxU3CTeCK1le2hzYfJmtNtL4GG2h1gwyUkBYzW9GAcuUzIMiva/wBlqCNmsgkE9vQQPTO6vHNsutB1pIGoBUrNuzKtOk6V7b0BwS2cE2hwQqVKiQbKUVJMgncRWdOTb1OvGUqUIOUb3b7/AIb26+ZoqpMSl3OqHkgSSBmIgcIynSrugHFnOR2e7+csH8ITa01q1c4adTI/+XI9lhzMrM4FDKLAzBJN5gcCKNR6Z5UJmXOWEzw69yY5ZKmwqu1BjNlEgKKo8SATzihIJyzO4UvQ0NRK9DQ1DMzCdIGsOMU8tbTxWFJUClYgrOEUEEIyEAnIltOaSpRiCmxDSWMw/lYpKi4DJyDtlTKpRlaObPlbVl9EJC7IKSBv3XlgkDJG6VGdN451xD6yY7Go+tPOBSHZmFY/c2lhxtt5Rb6pwLz9lRUEdYnMEEuZQWeyJvkSAMgi8d6XwF/ybomQXANHEoMHLCoCsyssxBAk2q8SX5k5IjS9jCZvGk5/ZRSCYE6740nuoASFSAeIB867SpUAI1U1bVX4lEKPnWFdaJnRh3q0ZXpB0tbw6+rCCtYuRMAczxrG4l9hG0nP3lCC24W1ozgFIcCZ32mFGJ4UnMI5jMS8tKSUhSpI0AEhIk74AtrRnSbZYfQ0oIzLBYJHG6QRbumuNS11PQcNDTs41DTS1Z0KEFYS3BIAE6Du41huju0IcuhSkrSttaEHtZCsqBQq10z3VvtmbNjDlGSBkUNItBEnvoLo70dw60pciVpSpKVAkAXykgCNY9tCu9CnJJtmY6QvoQ3+5Yc4hanClZDpUVpbQc4bTnuSpQIi5Enur0DofjS7hklQIglIneBp5Ax4Vh07MWvarTfaHVKSc0qClDJmU6SoXGYQItfur1IMZISPRAgd2trbgIA32vNaxg2s3Q56k0nl6heB1PKicQOwq8WN+Fu+hsBqeVP2q8UMOrTEpbWoTpISSJ7q7KXKcNXmFhmTlHbVoPUvEa9nf8aJqg6IdJmcYyhSVBLkdpsm4IscvrJtMjcRMVfmtDNgxwys09auJnLDca6ehMbtZ76lQ2R9YnuOX4AUzH4oNNrcNwkEwNTwA7ybV5h0h/aHjE7RZYw7OdtOXrW0DMp3PE5VfVyg2OmaZsKAtc9WULax30Jh2pmH1L/+K15+qgcvCq/pfs/EYjD9Th1htS1oC1K0DUy4IBBMpkQCJmJAk1n2tipwP9OyS21ZY6s5CskDOp3KBKyoHSwASE5QIqZyUVdlU4ObsjdITAuSe8x8AKdQWxi4WUl0gqNwR6p9GTxiJ+OpNpp3Jas7GC6Tn+pc/wDD8oqhxUg6jSr/AKTf5pzkj8oqixKrjl38TXNLmZ9Th/cQ8ka46VpMD9Gj7qfcKzyhV6ytQZRlTmOVNpjdxqqD1Z4eKfsoLpUIX3fsgf8AzE9+6pmFqI7ScpnSQbcxXQcJ3qUzOUTxgT51JSpUAKhVYJJc6y2b7on8UT7aKpUADHBjPn38hpMxMTFNZZAdUreUxoOM667zRdQo9M8qBolXoaGoo1H1QpMRUP7JSpal5rqieyk6CLSKa3sdIUlWY9kgjspGnEgVc9UKXVCpym/E1LWuQ0ql6gd9LqB307GOhFUbb4UYE0V1QqJrBpSSZPjFvZRYatZ3GqUBUbyAod+6iThh30hhx30ON1ZgnZ3RkNkbPLDQZykqAJMcdVX7zvoEMFt5rvLc9wSpVbpzBpJJuCRBIiSL2nxoUbEazBRzEjibe79TXHPDSex2xxUe8btD6NYGpsfIeVorMdGsMWVuJJ7KySkcCICvAyn28a2isGkiNB3UMNjN29K2l+6OG/4CqlRm5qSM6daMYOLIThELcQ6UglKSnS+oOvcaleb3kmxtEgR3jfRIwKO83B13i4p5wyb631vwrpUfZsYOSzXB8AbnlU20Gc7TiJjMhSZ4SkiaeywE6U5/0Vcj7qIRaVmKclKV0eVH9kay4lSMbDYg9tkFdtYKVJHs869H2BshOEYSwha1hOY5nDKiVEqMwABc6AAURh3rAQZ5p+dEA+FWSzMdJ8JjX3A2yhsNJyqzuOHKVC4KmkDMvKYITmSJEmbQZ0Z6OJwvWLKy6+6QXXVACY9FKUiyUCTAvrqatVOwTc23Sj/unJfG8gcyPgaAJazvSfZa3FJWkZgExA1BknMRvibDcb3tGhJqBD3M8yj4GplHMrFU5uDzID6OBfUDPNiUpChBCUnKJ8ieRFWlcSZrtNKysTJ3bZguk5/qnOSPyiqDGE5tN3HnV90oH9U5yT+QVQYuxGunzrmlzM+qw3uIeSNuoWq9w5IZSUiSECBMScthO6qU6Ve4P6NH3U+4UYfdnz+J5UZDbvT4YdZZ6nM+CAUFwBIBSFXWEntX9EA2vNXfRjpMxjUFTRIUmM6FapmY5gwYPdXiPS1Dn7wtbgUFuLdchQIOTrHEIsd0JMd0Vrf2Rsq/ec6QoILCwswcucOoCROmYIgx3njXSjkSsrGy6Y7YxSHGMLgkAvvhxXWKEobS2UAlY3CVi/AEAFRFUG0f2q4bCYhOFdK3+rBTiMQhIAS6JCkhoC8EQYJjTtEGvR4r5f27gAvbKmXEKheOWXEkGerXilmY1CS0UqneCDoauKT3EfTeExKXEIcQrMhaUrSRvSoApPiDXcU+G0KcV6KEqUeSQSfYKpOgAUNmYIKBBGHZBB1EISII8KK6VpUcFiEoSpSlNLQAkSSVApsPGok7IpK7M1sT9ogexHVKYKG1qShpWYFUqt/MToLxoTrW1R6Z5V4R0SbJdZyhSj1jakgXMJWknnCZPt3V7un0zyrGjOUr3N60FHYmoBCnesUCCEQIV/q7U24Rljxo+uVucwIhhcEda5zKW7f7Y9lEMoIF1FXeQB4WA/Rp9KgZxIjfPOPhVekvdeQR/JyiDvzSZ8I7qsqCTtVgyQ6i2vaFudACTh3PtnNN6Wu7/R4UU0ggQVFR4mJ9gAqFnHNLOVK0k6wDfyomgBqRG8nnHwoOXet0HV8ZVm8oiPGjqC/xVjTrUTMRN5tu8R5igDqWFz9K5p6rcaa+jU7LZEysqniEiOUAe3hTmnEqAUkggiQRoR3U+gBqRG8nnHwqtcOI/eRH0GW/HNJ9kRVmpQAJOgvQatqsDV1G/eN2WfzJ86adhNHW2Vz9K5yKW438EzUzLKgSS4pXcQkAcoAPnXcO+lacyFBSbiRcWMG/MVLSGNSO8ny+FNxPoKj1TpHDvtUlMe9E8j7qARBhFqgApVzJT8DNEmo8ORlFSTQN7ganHMxGRwCYmWoiDeDeKJaWTqkjmR8DT5pUrBc4swCTp+t9As4xtWi0G250neR7xFWFKgBrawRYyKdSpUxGB6UH+qc5I8eyKoMZrwt8T31oOk/+aXyT+UVQYsmd2m/ma5ZczPq8N7iHkjcqq9wf0aPup9wqhVV7hPo0fdT7qMPuz5/E7IE2hsfDYghT7DThTYFaUqMcJO7uorA4FplORptDaZJhCQkSdTA3njUCHkHenST2kcjMd9qMajcqR4fCulM5WdUYqBnBtJWt1LaEuORnWAApWUBIzKFzAAHhUmIUAmSYFtSB7Tah23UHemNPSQbjlwt50XC2gbTVKj9CkjTWagxTyUxmIGsSUjhOvnbhTYIDwHR/CMqC2mGkKGhSAIkR2eFrWo9HpnlUaFIMSRugSkzOmnG3nUiPTPKkklsO7e5NQLjSCVHI4SFRYqE2BlNxbtajh3UdQZcHa7TllRZJtabQm4770ySXCIAEBKk3PpEk+ZJtU9QYa95WfvCPYQKnoA4DXaanx361DiWiSkjdfxtHsnzoAnmuZxxoTG4NK1SWwq0SUtniYlV6TeDbkDqE6AZsqOA4X3RQOwYDXaY22EiEgAcAIHkKHfaczhaVSNCgmBvuDGvcfOgQSIFrADdwpFQ40HjMIlSpLYVbels8bSq9OGCaPZLCY1ulETAGmugA8KB2CwaVNbbCRCQAOAEDyFAY3DuqebUk9gRvgC5zyN8pgDWI3a0m7AixzCuBQ40Fi8GlSpLYUeJS2faq9OTgm5ILCb2JKUQecXvyphYMBqPE+gr7p91ObbCRCQABuAgeVR41wJbWo6BKieQBJoEgHZ57NFVR9HulGGxDnUNZs/VqchSY7KVISTIJ3rT+hWgcEA8qmxW7IVuAa1IhCVogi0+7lVXiVWMzff8AOrLZi5RPeamMtbG06WWFxHZrXq8N5+rpvqdloISEpEAc+e+mqSozeL2iJjxEVEG1+sv/APn/AG1oYMLpVEwggXUTzy28gKloEYHpQf6pzkn8gqhxSr7tO/vq96UD+qc5I/KKz2LEq1i1csuZn1mGX9EPJG9UKvMH9Gj7qfcKzOLfiw13/wDFaTAfQtxrkT+UUYfdngYlWimPabbvlCbWMAWOsGKlAr5/xCcZgNoF7EJcZW6o5nG1qDbutwQrKuJnKuSN4r2Xo70gS+lKVEB2N3orjUoP/wBdRfWJrVVVfK9GYSotRzLVD+k/SDD4NvM/Kp9FtKQpassEkJ4C1zvIGpAJuCeStCFFtTecZsi0gKE+sASAdLT3a1BjdhMu4hnEuJzLYSsNz6KSsoJVG9QyCDu5wRm3nnsQtD2dSCkktIQlJT9b0lHUxGuUXtxqpzy7Izirm2imrbSdQDzANC7IxanGgpQAVKkmNJSopkeVEvqhKiNQCfZVJ3VxNWIWsS0VFCVIKhuESIt7KkR6Z5V8+/s96YYx3H4ZDmJUordhQKW8q0kHMDCAQd8zu3Wn6CR6Z5VcrdxFNtp3JqEU4O1/MIhUWGlha4POe+i6COJEqAeblKsp07JgHKrtelBB3a1JdiXDuDTOVHvEe4CiKjZmLqCpuCBAjzNSUCGp+dBbQ2q2yQFTJE2A0mOPPyo1J7wdagxWBbcKStIUUmRrY+FA1a+o3E4opIACIImVLy+yDbvpJecMHq0wf9fu7N6nW3O8jdY0ktwZk+JMeVACZUojtJynhM+2qt7pLhkYn91W4EO5AvtWSQTAAWbFW+Nat6AxuxMM8rM7h2XFW7S20KPZum5E2m1AiTE4spUAkIMgG7gSbzoIvTg879kN/wBcd3dz9nhMpqd5G6xikGrzKuUmPKgZ1oki4g7xM+2ulQrtKKBAmIxhSoiERxLgB3/ViupfdIB6tN+Dnl9W9TraneocjSS1BmVcpMeVAzrZMXEHhM+2m4pMoUOKT7uFS1FifQV90+6gFuZ3ZOzin0HUpJAunDoSYN9YuNLVdIbWlBC15ze+UJ3cB+r0JgloSmAuZ9ZZJ8JNWAUCnWZFQnc0ksruVrgtrFGbIH8vdqdP+aDxBygz3+6rHZ57FuJqY8xtVf8AWJ5KcpJlQJ9Uq0PqgHzocNtz6JP/ALJ/tol5VjCRMjUkA+IBqLNxSiDY9pX9l61OVk+GWmISCB91SfeBU1cTXaBGA6Uf5pzkj8gqixKb6bvnV90o/wA05yR+VNUGLF/D591csuZn1eH9xDyRoVK1nfrWz2d9C39xH5RWJUbVttnfQt/cT+UUYfdnj47lQzaezWcS2Wnm0OIN8qr3GhG8EcReqDZf7PsHh3UutdcnKQoI65ZRIuJBMmDxNaEOf6h5p50SnS9dFkzzryjsImqFzYKs38l4Ib1KckkTc5VhQjxndwq8dNvLh8aiSo7iPAppSipbgm0dwWES0gIQLCfMmST4mpVEaGL8adUTx0uB5cRxqtEhbsyuxegOFw+J/eENsCCothLSQU5tIXO4EjStSj0zyrqb6KnlFNbHbN5t8aqUnLVkxgo3SJiaYCm8Zb66XpziQQQQCCCCDoR3iq4OtdaGurQTBOiYBtIjiQPZUtopJvYskqB0M12gm3UokJQhNzYKSJPIb9KnLivU9oovcViasR+0TEbTS5hf8PZW4lKy47lWhIVlKcra8yh2FArnw4Vt6rNsbew+FUyl9wIL6w22IJlR5CwkgSbXFMCTFM5lBUKByi0rtqYORWUnz91cTg27CHJt9Z2NCbHNbU+yiXXikxkUbTIiOVzTP3s/ZOf7f7qBk7bYSABPiST5m9VG1DigshrtIWMoMJlpXZ7RlQzIIzW1B5irZpciYI7jrQ+0dpssBBedS2FrS2jMYzLUYSkcT8AToDSauCdiLE4eTJzTlAJHWbp9RQGs9+ndXWsInQ55uJzOgX4kq50Q9iMpjItWhkRF+ZppxR+zc1j6vn6WlMCdpoJECY7yT7SSarscnEde2UEdWJzDjIjt2kxqIi+s1ZIVImCO461E7ikJUEqWlJOgJAmZiJ5Gpkrrew477XB8UyCom+kWDnCPqqg611vBNzELBH+pwC1rGdPfUy8QQrLkWe8ZY980397P2Tn+3iB63f7KoRO02EgATA4kk+ZM0zGfRr+6r3GpEGRNx3HWuPDsq5H3UAtzI4L+Z2PrfDiOEeyr9xWRI1OUeJtHxqDC7UwqRYgHfCD8E0m+kOEXmhYOVRQZQr0hqLpv4cKxhFR7zqrdpN6RdvIa+6FozaAyL3o7ZP0fif150MjbOF9EKTbcEm090c6Lbx7XVlYPYBiYOtt0TvFWo3loZzclTtJW+JM4lRBuRfdEjzBFQ9Wv1l7/ALP+2ojtln1v9qvlUC+kuFC0tl2FqBIGVV4nu7jbflVwNbdnPozl7WD70WjQMXknvj4ACn0ANsM+v/tV8qOBmk4yjuhxnGWzuYDpV/mnOSPyprP4oAka6fOtD0o/zTnJP5U1nsZ6Xhvjia45czPr8N7iHki/cbgkHdatHsvbrXVpQpRSpKQk9lR0ESCARFAY3CZxI1Htp2FwwQI3nWsoVHDY8qtkqwWbcPax7Q1xC1W3tDjrZsbrcqJb2wyNXFHmhXwTVaUimkVpxD6HNw8Pj+/IscRtdlSYDqkm1w2omxnRSCPZUbe02h/66z/7fdG5v9TVeU01QFNVn0KWFh8f35FwjbbAF3Ce8oX8E1DidrMqIh9SY1AbJnTXMgxpujWqlQFMIFV2rLWDp9X+/It0bYZAA/eF2Fz1eveYbozAbRbdWrq1TAvZQ394FZdQpYfHLZVnQAZEEHePhVKo+8JYGOV5b3/fgbc1TYHGYVbym0AdY2SZyxf0VQrfGhqrPSt37FP4j8qzuy3XGX+u9IkrOU6dskm47zW8HTaeZ69xxvCYlNZV56noqshzXc77ucZt/wAbu6nsuJEgZ95uFn2n3VkP4mev/KRvIubXqRHS14atJPiRbdurPOi+BrdPsbFtYIkT4gj2GqnbvRtjFrYW8FEsKUpEKgSoZTPHSqb+MHfsU/iPypfxe79in8R+VPOg4Gv0+qNU9h8xm2keiD7TSbw4BkeQSke0Cdb1lT0wd+wT+I/KkemDv2KfxH5UZ0Pgq/T7Gxqsx+w2n3UOu5l9X6CCf5aVXleQaqgxJmALRJmgHTF37FP4j8qQ6Yu/Yo/EflRnQuBr9PqjVu4eTNtI9FJ9pp4QZnMY4QPlNZH+MHfsUfiPyrn8ZO/Yp/EflRnQ+Br9PsbOqnFdHcO46HloUVghXprAkCBKQqDbcaoh0xd+xR+I/Kl/GTv2KPxH5UnKL3GsFiFsvqa1TNyoGCREwJ86clBmcxI4QKyH8ZO/Yp/EflSPTJ37BP4j8qedBwNd/wCfsbOo8SsBCidAkk+ArHnpm79ij8R+VRYvpU64hSA2lGYEEySYi8aQYpZ0OP8AH121dfUrEY1v1j+FXyrKOY3FLK1FlTSuuzDKpGVSCIJVCpzwANLVpUpt/wBV3IKxz6WPb4VNp32AujrykZ+uUo9lkJJkzlbAXpN808++tO3tpgYZSM5zFYMZF6SnfljcapLfruillFOFRwaaIr4CFaLjJvXoG/4m1vUR/wCKvlQGJx6OsQUoSdQpZT2kgA5QJEmSo6U4p5VweH6766HjZvdL9+Zwx/gKEdpS+n4CnNotiIXmteErEHhcVq2uleECQC6Zgf8ApucPu1ifAb65A0qJ4qc9y6f8FQpt5XL6fgK2vjUvvLcQDlMASLkJAE92nuqrxguL7t57zRSRp+vZQ2KTfw38z31z3u7nrqChBRXcbqaRNKlWB4Q0mmk0qVMpHCajUaVKqRokRk000qVWjREU0wiuUqpGyGRUav1/3SpUGqQyKQFKlQUcKa4RSpUFI6BTSK5SoBCNLKN9KlSGcjhXI5UqVAxRXFDgKVKgdjhpD9eylSoG0cKf1+vGuGlSoBHR+priqVKkUkNJ511I40qVADZ4UvEbv1FKlQMQNcP6NKlQMbP6+FCYxVxy+JpUqAkj/9k=',
      color: 'from-blue-500 to-cyan-500',
      projects: 5
    },
    {
      id: 3,
      name: 'Education',
      icon: <BookOpen className="w-12 h-12" />,
      description: 'Learning management systems, online courses, and student portals',
      image: 'https://img.freepik.com/free-psd/e-learning-landing-page-template-design_23-2149118530.jpg?semt=ais_hybrid&w=740&q=80',
      color: 'from-purple-500 to-indigo-500',
      projects: 4
    },
    {
      id: 4,
      name: 'Banking & Finance',
      icon: <Landmark className="w-12 h-12" />,
      description: 'Digital banking solutions, payment gateways, and financial management tools',
      image: 'data:image/jpeg;base64,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',
      color: 'from-green-500 to-emerald-500',
      projects: 6
    },
    {
      id: 5,
      name: 'Restaurant & Food',
      icon: <UtensilsCrossed className="w-12 h-12" />,
      description: 'Food delivery apps, restaurant management, and online ordering systems',
      image: 'https://i.pinimg.com/236x/12/2a/40/122a4076e7867463e1def0d68bdc3bac.jpg',
      color: 'from-orange-500 to-red-500',
      projects: 4
    },
    {
      id: 6,
      name: 'Travel & Tourism',
      icon: <Plane className="w-12 h-12" />,
      description: 'Booking platforms, travel itineraries, and tour management systems',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20240205/pngtree-young-tourist-woman-holding-suitcase-image_15615859.jpg',
      color: 'from-sky-500 to-blue-500',
      projects: 3
    },
    {
      id: 7,
      name: 'Social Media',
      icon: <Users className="w-12 h-12" />,
      description: 'Social networking platforms, community apps, and engagement tools',
      image: 'https://gothrivemarketing.com/wp-content/uploads/2021/07/social_media_marketing.jpg',
      color: 'from-pink-500 to-rose-500',
      projects: 5
    },
    {
      id: 8,
      name: 'Entertainment',
      icon: <Music className="w-12 h-12" />,
      description: 'Streaming platforms, content management, and media applications',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
      color: 'from-violet-500 to-purple-500',
      projects: 4
    },
    {
      id: 9,
      name: 'Gaming',
      icon: <Gamepad2 className="w-12 h-12" />,
      description: 'Game development, multiplayer platforms, and gaming communities',
      image: 'https://img.freepik.com/free-photo/young-gamer-having-fun-with-action-video-games-competition-playing-online-game-championship-caucasian-woman-enjoying-rpg-play-tournament-live-stream-gaming-modern-computer_482257-47444.jpg',
      color: 'from-yellow-500 to-orange-500',
      projects: 3
    },
    {
      id: 10,
      name: 'Real Estate',
      icon: <Home className="w-12 h-12" />,
      description: 'Property portals, virtual tours, and real estate management systems',
      image: 'https://media.designrush.com/tinymce_images/182536/conversions/Avantgarde-Properties-real-estate-website-design-content.jpg',
      color: 'from-amber-500 to-yellow-500',
      projects: 4
    },
    {
      id: 11,
      name: 'Energy',
      icon: <Zap className="w-12 h-12" />,
      description: 'Smart grid solutions, energy management, and utility platforms',
      image: 'https://cdn.dribbble.com/userupload/17181891/file/original-4923a13c9282891cc3d73e02cd730192.png?resize=400x0',
      color: 'from-lime-500 to-green-500',
      projects: 2
    },
    {
      id: 12,
      name: 'Agritech',
      icon: <Leaf className="w-12 h-12" />,
      description: 'Farm management systems, crop monitoring, and agricultural solutions',
      image: 'https://templately.com/_next/image?url=https%3A%2F%2Fitems.templately.com%2Fpack-8b6046af7d633cf016767190338c510a%2Fagritech-gutenberg-agricultural-template-banner-sShypCs.jpg&w=3840&q=75',
      color: 'from-green-600 to-emerald-600',
      projects: 3
    },
    {
      id: 13,
      name: 'Automobile',
      icon: <Car className="w-12 h-12" />,
      description: 'Fleet management, vehicle tracking, and automotive solutions',
      image: 'https://market-resized.envatousercontent.com/previews/files/345774297/screenshots/01-home.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=2bd26652e14143086fed13b01cb48e2d8f9c7ff91caa1edbcad6bfb175f9a634',
      color: 'from-slate-500 to-gray-600',
      projects: 3
    },
    {
      id: 14,
      name: 'Transportation',
      icon: <Plane className="w-12 h-12" />,
      description: 'Logistics platforms, ride-sharing apps, and delivery management',
      image: 'https://uwindi.com/wp-content/uploads/10-hacks-for-transportation-website-design-with-examples5.webp',
      color: 'from-cyan-500 to-blue-500',
      projects: 4
    },
    {
      id: 15,
      name: 'NGOs',
      icon: <Users className="w-12 h-12" />,
      description: 'Donation platforms, volunteer management, and social impact tools',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      color: 'from-teal-500 to-cyan-500',
      projects: 2
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://www.acldigital.com/wp-content/uploads/2025/01/Banner_2500X560_Development-of-Wi-Fi-Mesh-Based-Solution-for-a-Leading-UK-based-Industrial-Labeling-System-Provider.jpg" 
            alt="Industries Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 via-gray-900/85 to-brand-secondary/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-6">
                <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                Our Industries
              </span>
            </FadeInUp>
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Industries We Serve
              </h1>
            </FadeInUp>
            <FadeInUp>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore the diverse industries where we've delivered innovative solutions and helped businesses achieve their digital transformation goals.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Filter & Industries */}
      <FadeInUp>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <FadeInUp>
                <span className="inline-flex items-center gap-2 text-brand-primary font-semibold uppercase tracking-widest text-sm mb-4">
                  <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                  Expertise Across Sectors
                </span>
              </FadeInUp>
              <FadeInUp>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Diverse Industry Solutions
                </h2>
              </FadeInUp>
              <FadeInUp>
                <p className="text-xl text-gray-600">
                  We have successfully delivered solutions across 15+ industries, helping businesses transform and grow.
                </p>
              </FadeInUp>
            </div>

            {/* Industries Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* CTA Section */}
      <FadeInUp>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Looking for Industry-Specific Solutions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team has deep expertise across multiple industries. Let's discuss how we can help your business succeed.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full hover:bg-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Get Industry Consultation
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInUp>
    </div>
  );
};

export default Industries;
