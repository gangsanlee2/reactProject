import { Route, Routes } from "react-router-dom"
import {Main,Counter,
        Navigation,TodoInput} from "./components"

const App = () => {
  return (<>
  <Navigation/>
  <Routes>
  <Route path="/*" element={<Main/>}></Route>
  <Route path="/home" element={<Main/>}></Route>
  <Route path="/counter" element={<Counter/>}></Route>
  <Route path="/todos/*" element={<TodoInput/>}></Route>
  </Routes></>)
}

export default App