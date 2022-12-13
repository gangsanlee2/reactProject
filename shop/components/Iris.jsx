import { iris } from "shop/api"

const Iris = () => {
    const onClick = e => {
        e.preventDefault()
        iris()
    }
    return(<>
    <button onClick={onClick}>iris</button>
    </>)
}
export default Iris