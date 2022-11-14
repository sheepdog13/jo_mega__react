const initialState  = { 
    notice : [
        {id:1, title:"안양", date:"2019.05.24", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:2, title:"인덕원", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:3, title:"서울", date:"2019.05.24", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:4, title:"전체", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
    ]
}


function notice2(state = initialState, action){
    switch(action.type) {
        default:
            return{
                ...state
            }
    }
}

export default notice2;
