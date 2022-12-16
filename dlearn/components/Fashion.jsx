import { useState } from "react";
import { getFashion, postFashion } from "dlearn/api";

const Fashion = () => {
    const [inputs, setInputs] = useState({})
    const {id} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})   //리스트로 감쌌다는 것은 변수라는 의미이다. ex) a = {'b':5,'c':10}   =>  a[b] = 5
    }
    const onGetClick = e => {
        e.preventDefault()
        alert(`선택한 번호 : ${JSON.stringify(id)}`)
        getFashion(id)
        .then((res)=>{
            alert(`찾는 옷의 종류 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('번호를 다시 입력해주세요')
        })
    }
    const onPostClick = e => {
        e.preventDefault()
        const request = {id}
        alert(`선택한 번호 : ${JSON.stringify(request)}`)
        postFashion(request)
        .then((res)=>{
            console.log(`Response is ${res.data.result}`)
            localStorage.setItem('token', JSON.stringify(res.data.result))
            alert(`찾는 옷의 종류 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('번호를 다시 입력해주세요')
        })
    }
    
    return(<>
        번호 선택: <input type="text" name="id" onChange={onChange} /><br/>
        <button onClick={onGetClick}> GET 입력 </button><br/>
        <button onClick={onPostClick}> POST 입력 </button>
    </>)
}
export default Fashion