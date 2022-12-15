
import { useState } from "react";
import { fashion } from "dlearn/api";

const Iris = () => {
    const [inputs, setInputs] = useState({})
    const {testNum} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const request = {testNum}
        alert(`선택한 번호 : ${JSON.stringify(request)}`)
        fashion(request)
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
    
    return(
    <>
        번호 선택: <input type="number" name="testNum" onChange={onChange} /><br/>
        <button onClick={onClick}> 입력 </button>
    </>)
}
export default Iris