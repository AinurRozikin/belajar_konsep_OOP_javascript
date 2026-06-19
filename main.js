/*
Factory Function adalah fungsi biasa yang mengembalikan (return) sebuah objek. 
Dia "membuat" objek seperti pabrik (factory), 
tanpa menggunakan kata kunci new atau class.

*/

// function createColor(r, g, b) {
//     return {
//         r, g, b,
//         hex() {
//             return '#' + ((1 << 24) + (r << 8).toString(16).slice(1));
//         },
//         rgb() {
//             return `rgb(${r}, ${g}, ${b})`
//         }
//     };
// }

// const red = createColor(255, 0, 0);
// const green = createColor(0, 255, 0);

// console.log(red.hex()); // #ff0000
// console.log(green.rgb()); // rgb(0, 255, 0)


// // mendefinisikan object dengan class
// class color {
//     constructor(r,g,b){
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }



//     rgb(){
//         const {r, g, b} = this;
//         return `rgb(${r},${g},${b})`;
//     }

// }
// let kuning = new color(255, 196, 0);
// document.body.style.backgroundColor = kuning.rgb();



// class Game {
//     constructor(nama, peran, darah){
//         this.nama = nama;
//         this.peran = peran;
//         this.darah = darah;
//     }

//     aksi(){
//         let {nama, peran, darah} = this;
//         return `${nama} sedang melakukan penyerangan`;
//     }
// }

// const hero1 = new Game('furina','support',15000);
// console.log(hero1.aksi());


// konsep inheritence atau pewarisan sifat dalam javascript


// ini parent class
class Kendaraan { 
    constructor(merek){
        this.merek = merek;
    }

    jalan() {
        return 'Berputar Rodanya.';
    }
}

// ini child class
class Mobil extends Kendaraan { 
    constructor(merek, model) {
        // 1. Oper merek ke parent, lalu buat properti model untuk child
        super(merek); 
        this.model = model; 
    }

    aksi() {
        // 2. Panggil method parent dengan super.jalan(), lalu gabung string-nya
        return `kendaraan mobil dengan merek ${this.merek} sedang ${super.jalan()}`;
    }
}

const mobilSaya = new Mobil('Toyota', 'Avanza');
console.log(mobilSaya.aksi());

