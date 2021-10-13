// const info = {
//   name: "lhd",
//   age: 18
// }

// info.name = "curry"

type Method = "GET" | "POST"
function request(url: string, method: Method){

}

type Request = {
  url: string,
  method: Method
}

const options: Request = {
  url: "https://www.coderlhd.org/abc",
  method: "POST"
} as const

request(options.url, options.method)
// request(options.url, options.method as Method)

export {}