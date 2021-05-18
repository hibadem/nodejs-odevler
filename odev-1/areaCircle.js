const radius = Number(process.argv.slice(2));
function area(radius){
    return Math.PI * radius * radius;
}
const areaResult=  area(radius).toFixed(2);
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${areaResult}`)