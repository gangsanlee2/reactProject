import { Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"

const App = () => {
  return (<><Routes>
  <Route exact path="/" element={<Counter/>}></Route>
  </Routes></>)
}

export default App