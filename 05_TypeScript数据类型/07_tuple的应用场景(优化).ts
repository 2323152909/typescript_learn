// hook:useState
// const [counter, setCounter] = useState(10)

function useState<T>(state: T){
  let currentState = state

  const changeState = (newState: T) => {
    currentState = newState
  }

  const tuple: [T, (newState: T) => void] = [currentState, changeState]

  return tuple
}

const [counter, setCounter] = useState(10)
setCounter(20)
const [name, setName] = useState("abc")
const [flag, setFlag] = useState(true)

// 函数类型的注解
type MyFunction = () => void
// const foo: () => void = () => {}
const foo: MyFunction = () => {}

export {}