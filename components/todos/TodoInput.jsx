import { useState } from "react"
import todoReducer from "../../store/todo.reducer"
import { useDispatch } from "react-redux"

const TodoInput = () => {
    const [toto, setTodo] = useState('')
    const dispatch = useDispatch()
    const submitForm = e => {
        e.preventDefault()                  // 바닐라스크립트 방지
        const newTodo = {
            id : uuidv4(),
            name : todoReducer,
            complete : false
        }
        addTodo(new newTodo)
        setTodo('')
    }
    const addTodo = todo => dispatch(addTodoAction(todo))

    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }
    return(<>
    <h2>스케줄러</h2>
    <form onSubmit={submitForm} method='POST'>
        <label htmlfor="todo">할 일:</label><br/>
        <input 
            type="text" 
            id="todo" 
            name="todo"
            placeholder="할일 입력"
            value={todo}
            onChange={handleChange}/><br/><br/>
    </form>
    <p>할 일을 등록하시면, 스케줄 목록에 출력됩니다.</p>
    </>)
}

export default TodoInput