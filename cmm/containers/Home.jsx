import { Navigation2, Footer, Counter} from "cmm"
import {Schedule} from "cop"
import { Route, Routes } from "react-router-dom"
import { Login, SignUp } from "uat"
import image from 'images/fashion.png'
import { Stroke } from "blog"
import { Iris } from "shop"

const Home = () => {
    const imageSize = {Width: 700, Height: 500}
  return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}><Navigation2/></td>
            </tr>
        </thead>
        <tbody>
            <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
                <td style={{ width: "100%", border: "1px solid black"}}>
                <Routes>
                    <Route path="/counter" element={<Counter/>}></Route>
                    <Route path="/todos/" element={<Schedule/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/stroke" element={<Stroke/>}></Route>
                    <Route path="/iris" element={<Iris/>}></Route>
                </Routes>
                </td>
            </tr>
            <tr>
                <td>
                    <img src={image} style={imageSize}/>
                </td>
            </tr>
            <tr style={{ width: "100%", height: "20%", border: "1px solid black"}}>
                <td style={{ width: "100%", border: "1px solid black"}}><Footer/></td>
            </tr>
        </tbody>
    </table>
  </>)
}

export default Home