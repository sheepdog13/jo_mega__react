const initialState  = { 
    movies : [
        {
            id:9, rank:1, title:'문라이트', img: '/img/poster09.jpg', age:"all" 
        },
        {
            id:10, rank:2, title:'보헤미안 랩소디', img: '/img/poster10.jpg', age:"a12" 
        },
        {
            id:11, rank:3, title:'꼭두각시', img: '/img/poster07.jpg', age:"a15" 
        },
        {
            id:12, rank:4, title:'침묵', img: '/img/poster01.jpg', age:"a19" 
        },
    ]
}


function movieConent3(state = initialState, action){
    switch(action.type) {
        default:
            return{
                ...state
            }
    }
}

export default movieConent3;
