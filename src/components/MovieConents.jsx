import { useDispatch, useSelector } from "react-redux";
import '../css/movieChart.css'

const MovieConents = () => {
    const movies = useSelector((state)=>(state.movieConents.movies))
    const movie_charts = movies.map((movie)=>(
        <div className="movie_chart ">
            <div>
            <div className="poster">
                <figure>
                    <img src={process.env.PUBLIC_URL + movie.img} alt={movie.title}/>
                </figure>
                <div className="rank"><strong>{movie.rank}</strong></div>
                <div className="mx">
                <span className="icon m ir_pm">MX</span>
                <span className="icon b ir_pm">Boutique</span>
            </div>
            </div>
            <div className="infor">
                <h3><span  className="icon all ir_pm"> 전체관람가</span><strong>{movie.title}</strong></h3>
                <div className="infor_btn">
                    <a href="#">상세보기</a>
                    <a href="#">예매하기</a>
                </div>
            </div>
            </div>
        </div>
    ))
    return (  
        <div>
            {movie_charts}
        </div>
    );
}
 
export default MovieConents;