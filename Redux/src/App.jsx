import './App.css'
import {useSelector, useDispatch} from "react-redux"
import { selectCounter,setCounter } from './redux/slices/counterSlice'
function App() {
  const counter = useSelector(selectCounter)
  const dispatch= useDispatch()
  const update = () => {
dispatch (
  setCounter({counter:10})
)
  }
  return (
    <>
      <h1>Vite + React + Redux</h1>
      <div>
       {counter}
      </div>
      <div>
        <a onClick={update}> Aumentar </a>
      </div>
      <p className="read-the-docs">
      Javier Lopéz @2023
      </p>
    </>
  )
}

export default App
