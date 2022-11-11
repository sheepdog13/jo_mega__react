import { useSelector } from "react-redux";
import MovieConent from "./MovieConent";

const MovieData = () => {
    const movies1 = useSelector((state)=>(state.movieConent1.movies))
    const movies2 = useSelector((state)=>(state.movieConent2.movies))
    const movies3 = useSelector((state)=>(state.movieConent3.movies))
    const movies4 = useSelector((state)=>(state.movieConent4.movies))

    return (  
        <>
        <MovieConent movies={movies1}/>
        <MovieConent movies={movies2}/>
        <MovieConent movies={movies3}/>
        <MovieConent movies={movies4}/>
        </>
    );
}
 
export default MovieData