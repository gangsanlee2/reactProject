import { Route, Routes } from "react-router-dom"
import TodoInput from "./components/todos/TodoInput"
import Counter from "./components/Counter"

const App = () => {
  return (<><Routes>
  <Route exact path="/" element={<Counter/>}></Route>
  <Route exact path="/todos" element={<TodoInput/>}></Route>
  </Routes></>)
}

export default App