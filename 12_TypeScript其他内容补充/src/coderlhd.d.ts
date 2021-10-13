// 声明模块
declare module 'lodash' {
  export function join(...arr:any[]): void
}

// 声明变量/函数/类
declare let lhdName: string
declare let lhdAge: number
declare let lhdHeight: number

declare function lhdFoo(): void

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

declare module '*.jpg'
declare module '*.png'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.gif'

// 声明命名空间
declare namespace $ {
  export function ajax(setting: any): any
}