import { add, sub } from "./utils/math"
import { time, price } from "./utils/format"

import axios from "axios"
import _ from "lodash"

import curry from './img/stephen_curry.jpg'

console.log(add(20, 30))
console.log(sub(30, 20))

console.log(time.format("123"))
console.log(price.format(123))

console.log(_.join(["abc", "cba"], ""))

// axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
//   console.log(res);
// })

// document.getElementById
// coderlhd.getElementById

console.log(lhdName)
console.log(lhdAge)
console.log(lhdHeight)

lhdFoo()

const p = new Person("lhd", 18)
console.log(p);

// const img = document.createElement("img")
// img.setAttribute("url", curry)

$.ajax({

})