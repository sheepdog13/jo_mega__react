import { useState } from 'react';
import '../css/movie.css'
import MovieConent1 from './MovieConent1';
import MovieConent2 from './MovieConent2';
import MovieConent3 from './MovieConent3';
import MovieConent4 from './MovieConent4';
import MovieConents from './MovieConents';

const Movie = () => {
    const lists = [
        { id:1, title:"박스오피스", active:"active"},{id:2, title:"최신개봉작"},{id:3, title:"상영예정작",},{ id:4, title:"큐레이션",}
    ]
    const [content, setContent] = useState();

    const handleClickElement = e => {
        const { name } = e.target;
        setContent(name);
    };

    const list = lists.map((el)=>(
        <li key={el.id} onClick={handleClickElement}><a href="#" className={el.active}>{el.title}</a></li>
    ))
    
    return (
        <div className="movie">
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
                    <div className="movie_chart">
                        <MovieConent1 />
                        <MovieConent2 />
                        <MovieConent3 />
                        <MovieConent4 />
                    </div>
                </div>
            </div>    
        </div>
    );
}
 
export default Movie;