
//function googoodan(number) {
//  for(let i = 1; i <= 10; i++) {
//    console.log(number * i);
//  }
//}
//
//googoodan(1)

function googoo(number) {
  const add = []
  for (let i = 1; i < 10; i++) {
    add.push(number * i)
    //add.push(console.log(number * i))
  }
  return add
}

let addition = googoo(1)
console.log(addition)

//console.log(googoo(1))