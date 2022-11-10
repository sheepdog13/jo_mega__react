import { useSelector } from "react-redux";
import '../css/movieChart.css'

const MovieConent2 = () => {
    const movies = useSelector((state)=>(state.movieConent2.movies))
    const movie_charts = movies.map((movie)=>(
        <div className={movie.id}>  
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
                <h3><span className={movie.age+" icon ir_pm"}>전체관람가</span><strong>{movie.title}</strong></h3>
                <div className="infor_btn">
                    <a href="#">상세보기</a>
                    <a href="#">예매하기</a>
                </div>
            </div>
        </div>
        ))
    return (  
        <div className="chart_cont">
            {movie_charts}
        </div>
    );
}
 
export default MovieConent2;