// hook:useState
// const [counter, setCounter] = useState(10)

function useState(state: any){
  let currentState = state

  const changeState = (newState: any) => {
    currentState = newState
  }

  const tuple: [any, (newState: any) => void] = [currentState, changeState]

  return tuple
}

const [counter, setCounter] = useState(10)
const [name, setName] = useState("abc")

console.log(name);
console.log(counter);
setCounter(20)
console.log(counter)

export {}