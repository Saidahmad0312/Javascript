// let logic = {
//     and: function (arg1, arg2) {

//         let a = Boolean(arg1)
//         let b = Boolean(arg2)

//         if (a == 1) {
//             if (b == 1) {
//                 return true
//             } else {
//                 return false
//             }
//         } else {
//             return false
//         }
//     },

//     or: function (arg1, arg2) {

//         let a = Boolean(arg1)
//         let b = Boolean(arg2)

//         if (a == 0) {
//             if (b == 0) {
//                 return false
//             } else {
//                 return true
//             }
//         } else {
//             return true
//         }
//     },

//     not: function (boolen) {

//         let bool = Boolean(boolen)

//         if (bool == true) {
//             return false
//         } else {
//             return true
//         }

//     }
// }


// console.log(logic.and(1, 1))
// console.log(logic.or(0, 0))
// console.log(logic.not(0))


// const math = {
//     add(a, b) {
//         return a + b;
//     },
//     sub(a, b) {
//         return a - b;
//     },

//     div(a, b) {
//         return a / b;
//     },
//     nul(a, b) {
//         return a * b;
//     },
//     pow(a, b) {
//         return a ** b;
//     },

// }
// console.log(math.add(5, 2));
// console.log(math.sub(5, 2));
// console.log(math.div(5, 2));
// console.log(math.nul(5, 2));
// console.log(math.pow(5, 2));


// const nt = {
//     students: [{
//         name: "Amirbek",
//         id: "1",
//         tolov: false,
//         kelganlarSoni: 20,
//         vazifaQilingan: 65,
//     },
//     {
//         name: "Asilbek",
//         id: "2",
//         tolov: false,
//         kelganlarSoni: 19,
//         vazifaQilingan: 60,

//     },
//     {
//     faceIdList: [],
//         name: "Amirbek",
//         id: "1",
//     },
//     {
//         faceIdList: [],
//             name: "Asilbek",
//             id: "2",

//     }],
//     face(obj) {
//         for (let i = 0; i <students.length; i++) {
//             for (let j = 0; j < students.length; j++) {
//                 if (faceIDList[0].name == students[i].name && this.faceIDList[j].id == students[i].id) {
//                     return `${students[i].name} Ro'yxatda bor!`
//                 }else{
//                     return `${students[i].name} Ro'yxatda yo'q`
//                 }
                
//             }
            
//         }
//     },

// }


const Family = {
    oila: {
        ota: {
            ism : "Husan",
            yosh : "46",
            jins : "Erkak"
        },
        ona :{
            ism : "Muqaddam",
            yosh : "45",
            jins : "Ayol"
        },
        opa :{
            ism : "Robiya",
            yosh : "26",
            jins : "Ayol"
        },
        opa :{
            ism : "Nozima",
            yosh : "23",
            jins : "Ayol"
        },
        opa :{
            ism : "Maxbuba",
            yosh : "20",
            jins : "Ayol"
        },

    },
    xsusiyat : (a) => {
        let obj = {};
        let oila = this.oila
        for (let i = 0; i < oila.lenght; i++){
            if (Key.yosh >= a) {
                console.log(Key.yosh);
            }
        }
    }
}
console.log(Family(oila));