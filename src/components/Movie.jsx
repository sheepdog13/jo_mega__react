import { useState } from 'react';
import '../css/movie.css'
import MovieConents from './MovieConents';

const Movie = () => {
    const[isactive,setActive]=useState(false)
    const lists = [
        { id:1, title:"박스오피스", active:"active"},{id:2, title:"최신개봉작"},{id:3, title:"상영예정작",},{ id:4, title:"큐레이션",}
    ]
    const list = lists.map((el)=>(
        <li key={el.id} onClick={
            (e)=>{
                e.preventDefault();
                e.target.classList.remove("active")
                e.target.classList.add("active")
            }
        }><a href="#" className={el.active}>{el.title}</a></li>
    ))
    return (
        <div className="movie" onClick={()=>{setAbc(!isactive)}} style={{display: isactive? "black":"none"}}>
            <div className="container">
                <div className="row">
                    <div>
                        <h2 className="ir_so">최신 영화 정보</h2>
                        <div className="movie_title">
                            <ul>
                                {list}
                            </ul>
                        </div>
                    </div>
                    <MovieConents/>
                </div>
            </div>    
        </div>
    );
}
 
export default Movie;