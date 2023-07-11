
let aze = +prompt('Deyismek istediginiz meblegi yazin');
let euro = aze / 1.85 ;
let usd = aze / 1.7 ;
let tl = aze / 0.06523 ;
let rub = aze / 0.01861 ;
document.getElementById('ramo').innerHTML = aze + ' ₼ = ' + euro.toFixed() + ' € ' ;
document.getElementById('ss').innerHTML = aze + ' ₼ = ' + usd.toFixed() + ' $  ' ;
document.getElementById('aa').innerHTML =  aze + ' ₼ = ' + tl.toFixed() +  ' ₺' ;
document.getElementById('z').innerHTML = aze + ' ₼ = ' + rub.toFixed() + ' ₽ ' ;