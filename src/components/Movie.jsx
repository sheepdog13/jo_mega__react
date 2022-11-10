import { useState } from 'react';
import '../css/movie.css'
import MovieConent1 from './MovieConent1';
import MovieConent2 from './MovieConent2';
import MovieConent3 from './MovieConent3';
import MovieConent4 from './MovieConent4';
import MovieConents from './MovieConents';

const Movie = () => {
    const lists = [
        { id:1, title:"박스오피스",name: 'first', text: '1번' },{id:2, title:"최신개봉작",name: 'second', text: '2번'},{id:3, title:"상영예정작",name: 'third', text: '3번'},{ id:4, title:"큐레이션",name: 'fourth', text: '4번'}
    ]
    const [content, setContent] = useState();

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };
    
    useState('first');

    const selectComponent = {
        first: <MovieConent1 />,
        second: <MovieConent2 />,
        third: <MovieConent3 />,
        fourth: <MovieConent4 />,
      };
     
    const list = lists.map((el)=>(
        <button key={el.id} onClick={handleClickButton} name={el.name}>{el.title}</button>
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
                        {content && <>{selectComponent[content]}</>}
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Movie;
