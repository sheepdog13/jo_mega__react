// 작성한 리덕스 모듈을 하나로 묶어서 사용
import { combineReducers } from "redux";


// 작성한 리덕스 모듈을 가져옴
import movieConent1 from "./movieConent1";
import movieConent2 from "./movieConent2";
import movieConent3 from "./movieConent3";
import movieConent4 from "./movieConent4";
import notice1 from "./helpNotice1";
import notice2 from "./helpNotice2";

// 작성한리덕스를 객체로 묶어서 내보냄
const rootReducer = combineReducers({ movieConent1, movieConent2, movieConent3, movieConent4, notice1, notice2});

export default rootReducer;