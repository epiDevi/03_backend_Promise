//*** Level_1-1 ***/
// function malZwei(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * 2);
//     }, 2000);
//   });
// }

// malZwei(4).then((result) => console.log(`4 * 2 ist =>  ${result}`));

//*** Level_2-1 ***/
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     const rndInt = Math.floor(Math.random() * 10) + 1;
//     if (rndInt >= 6) {
//       resolve(rndInt);
//       return;
//     } else {
//       reject(rndInt);
//     }
//   });
// }

// myPromise()
//   .then((rnd) => console.log(`random nummer ist größer als 6: =>  ${rnd}`))
//   .catch((rnd) => console.log(`random nummer ist kleiner als 6: => ${rnd}`));

//*** Level_3-1 ***/
// function multipl(input) {
//   return new Promise((resolve, reject) => {
//     let output = input * input;
//     resolve(output);
//   });
// }
// function myPromise() {
//   return multipl(2)
//     .then((result) => {
//       return multipl(result);
//     })
//     .then((res) => {
//       return multipl(res);
//     });
// }

// myPromise().then((result) => console.log("mein Result ist => ", result));

//*** Level_3-2 ***/

function random(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rndInt = Math.floor(Math.random() * 1000) + 1;
      resolve(rndInt);
    }, input);
  });
}

Promise.all([random(1000), random(2000), random(4000)]).then((result) =>
  console.log("result ist : ", result)
);
