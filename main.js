/*
Factory Function adalah fungsi biasa yang mengembalikan (return) sebuah objek. 
Dia "membuat" objek seperti pabrik (factory), 
tanpa menggunakan kata kunci new atau class.

*/

function createColor(r, g, b) {
    return {
        r, g, b,
        hex() {
            return '#' + ((1 << 24) + (r << 8).toString(16).slice(1));
        },
        rgb() {
            return `rgb(${r}, ${g}, ${b})`
        }
    };
}

const red = createColor(255, 0, 0);
const green = createColor(0, 255, 0);

console.log(red.hex()); // #ff0000
console.log(green.rgb()); // rgb(0, 255, 0)