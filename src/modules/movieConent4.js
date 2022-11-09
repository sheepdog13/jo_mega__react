const initialState  = { 
    movies : [
        {
            id:13, rank:1, title:'her', img: '/img/poster05.jpg', age:"all" 
        },
        {
            id:14, rank:2, title:'문라이트', img: '/img/poster09.jpg', age:"a12" 
        },
        {
            id:15, rank:3, title:'마스터', img: '/img/poster03.jpg', age:"a15" 
        },
        {
            id:16, rank:4, title:'괴물', img: '/img/poster06.jpg', age:"a19" 
        },
    ]
}


function movieConent4(state = initialState, action){
    switch(action.type) {
        default:
            return{
                ...state
            }
    }
}

export default movieConent4;
