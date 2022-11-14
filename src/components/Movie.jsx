import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/movie.css'
import MovieConent from './MovieConent';

const Movie = () => {
    const movies1 = useSelector((state)=>(state.movieConent1.movies))
    const movies2 = useSelector((state)=>(state.movieConent2.movies))
    const movies3 = useSelector((state)=>(state.movieConent3.movies))
    const movies4 = useSelector((state)=>(state.movieConent4.movies))
    
    const lists = [
        { id:1, title:"박스오피스",name: 'first', text: '1번' },{id:2, title:"최신개봉작",name: 'second', text: '2번'},{id:3, title:"상영예정작",name: 'third', text: '3번'},{ id:4, title:"큐레이션",name: 'fourth', text: '4번'}
    ]
    const [content, setContent] = useState("first");

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };
    
    

    const selectComponent = {
        first: <MovieConent movies={movies1}/>,
        second: <MovieConent movies={movies2}/>,
        third: <MovieConent movies={movies3}/>,
        fourth: <MovieConent movies={movies4}/>,
      };
     
    const list = lists.map((el)=>(
        <button key={el.id} onClick={handleClickButton} className={content === el.name ? "active" : null} name={el.name}>{el.title}</button>
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
                        {content ? <>{selectComponent[content]}</> : <MovieConent movies={movies1}/>}
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Movie;
