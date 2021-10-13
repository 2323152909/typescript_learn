// 通过interface来定义索引类型
interface IIndexLanguage {
  [index: number]: string
}

const frontLanguage: IIndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue",
  // "abc": "cba"
}

interface ILanguageYear {
  [index: string]: number
}

const languageYear: ILanguageYear = {
  "C": 1982,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}
