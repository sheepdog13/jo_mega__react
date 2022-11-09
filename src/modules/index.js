// 작성한 리덕스 모듈을 하나로 묶어서 사용
import { combineReducers } from "redux";


// 작성한 리덕스 모듈을 가져옴
import movieConents from "./movieConents"
import movieConent1 from "./movieConent1";
import movieConent2 from "./movieConent2";
import movieConent3 from "./movieConent3";
import movieConent4 from "./movieConent4";

// 작성한리덕스를 객체로 묶어서 내보냄
const rootReducer = combineReducers({movieConents, movieConent1, movieConent2, movieConent3, movieConent4});

export default rootReducer;