// let DT = Number(prompt("davhar shirhegee bich"));
// let AT = Number(prompt("ailiin shirhegee bich"));
let HT = Number(prompt("haalgani toogoo bich"));
let DT = 5;
let AT = 4;
let OT = 3;
// let HT = 32;
if (HT % (DT * AT) > 0) {
  c = Math.floor(HT / (DT * AT)) + 1;
}
if (HT % (DT * AT) == 0) {
  c = HT / (DT * AT);
}
if (HT % AT > 0) {
  if (HT / AT > 5) {
    a = Math.floor(HT / AT) + 1 - 5;
  }
}
if (HT % AT > 0 && HT / AT < 5) {
  a = Math.floor(HT / AT) + 1;
}
if (HT % AT == 0) {
  if (HT / AT > 5) {
    a = HT / AT - 5;
  }
}
if (HT % AT == 0 && HT / AT < 5) {
  a = HT / AT;
}
if (HT % AT == 0) {
  b = AT - (HT % AT);
}
if (HT % AT > 0) {
  b = 0 + (HT % AT);
}
console.log(c + " " + a + " " + b);

// let a = document.getElementById("a");
// let b = document.getElementById("b");
// let c = document.getElementById("c");
// let d = document.getElementById("d");
// let e = document.getElementById("e");
// let f = document.getElementById("f");
// let g = document.getElementById("g");
// let h = document.getElementById("h");
// let i = document.getElementById("i");
// let j = document.getElementById("j");
// let k = document.getElementById("k");
// let l = document.getElementById("l");
// let m = document.getElementById("m");
// let n = document.getElementById("n");
// let o = document.getElementById("o");
// let p = document.getElementById("p");
// let q = document.getElementById("q");
// let r = document.getElementById("r");
// let s = document.getElementById("s");
// let t = document.getElementById("t");
// let u = document.getElementById("u");
// let v = document.getElementById("v");
// let w = document.getElementById("w");
// let x = document.getElementById("x");
// let y = document.getElementById("y");
// let z = document.getElementById("z");
