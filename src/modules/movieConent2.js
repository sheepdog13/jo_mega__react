const initialState  = { 
    movies : [
        {
            id:5, rank:1, title:'her', img: '/img/poster05.jpg', age:"all" 
        },
        {
            id:6, rank:2, title:'괴물', img: '/img/poster06.jpg', age:"a12" 
        },
        {
            id:7, rank:3, title:'꼭두각시', img: '/img/poster07.jpg', age:"a15" 
        },
        {
            id:8, rank:4, title:'getout', img: '/img/poster08.jpg', age:"a19" 
        },
    ]
}


function movieConent2(state = initialState, action){
    switch(action.type) {
        default:
            return{
                ...state
            }
    }
}

export default movieConent2;
