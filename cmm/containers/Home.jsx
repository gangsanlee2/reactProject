import { Navigation2, Footer, Counter} from "cmm"
import {Schedule} from "cop"
import { Route, Routes } from "react-router-dom"
import { LoginForm, SignUp } from "uat"
import image from 'images/fashion.png'
import { Stroke } from "blog"
import { IrisForm } from "shop"
import { FashionForm, Number } from "dlearn"
import { NaverMovie } from "webcrawler"

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
                    <Route path="/login" element={<LoginForm/>}></Route>
                    <Route path="/stroke" element={<Stroke/>}></Route>
                    <Route path="/iris" element={<IrisForm/>}></Route>
                    <Route path="/fashion" element={<FashionForm/>}></Route>
                    <Route path="/number" element={<Number/>}></Route>
                    <Route path="/naver-movie" element={<NaverMovie/>}></Route>
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