import 'uat/styles/SignUp.css'
import { useState } from 'react'

const SignUp = () => {
    const [inputs, setInputs] = useState({})
    const {email, nickname, password} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const request = {email, nickname, password}
        alert(`사용자 이름: ${JSON.stringify(request)}`)
    }
    
    return(
    <>
        EMAIL: <input type="text" name="email" onChange={onChange} /><br/>
        NICKNAME: <input type="text" name="nickname" onChange={onChange} /><br/>
        PASSWORD: <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 회원가입 </button>
    </>
)}
export default SignUp