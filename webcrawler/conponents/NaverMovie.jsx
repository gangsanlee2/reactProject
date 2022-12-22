import crawlerService from "webcrawler/api"
import { useState } from "react"

const NaverMovie = () => {
    
    const [movies, setMovies] = useState()

    const onClick = e => {
        e.preventDefault()
        crawlerService.crawler().then(res => {
            const json = JSON.parse(res)
            setMovies(json['result'])
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }

    return (<>
    <h2>네이버 영화 크롤러</h2>
    <button onClick={onClick}>네이버 영화 크롤링</button>
    <p>버튼을 클릭하시면, 네이버 영화 목록이 출력됩니다.</p>
    <table>
        <thead>
            <tr>
                <th>순위</th><th>영화 목록</th>
            </tr>
        </thead>
        <tbody>
        {movies && movies.map(({rank, title})=>(
            <tr key={rank}><td>{rank}</td><td>{title}</td></tr>
        ))}
        </tbody>
    </table>
    </>)
}
export default NaverMovie