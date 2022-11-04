import '../css/movie.css'
import MovieConents from './MovieConents';

const Movie = () => {
    const lists = [
        { id:1, title:"박스오피스"},{id:2, title:"최신개봉작"},{id:3, title:"상영예정작"},{ id:4, title:"큐레이션"}
    ]
    const list = lists.map((el)=>(
        <li key={el.id}><a href="#">{el.title}</a></li>
    ))
    return (
        <div className="movie">
            <div class="container">
                <div class="row">
                    <div class="movie">
                        <h2 class="ir_so">최신 영화 정보</h2>
                        <div class="movie_title">
                            <ul>
                                {list}
                            </ul>
                        </div>
                        <MovieConents/>
                    </div>
                </div>
            </div>    
        </div>
    );
}
 
export default Movie;