const initialState  = { 
    movies : [
        {
            id:1, rank:1, title:'침묵', img: '/img/poster01.jpg', age:"all"
        },
        {
            id:2, rank:2, title:'신세계', img: '/img/poster02.jpg', age:"a12"
        },
        {
            id:3, rank:3, title:'마스터', img: '/img/poster03.jpg', age:"a15" 
        },
        {
            id:4, rank:4, title:'마약왕', img: '/img/poster04.jpg', age:"a19" 
        },
    ]
}


function movieConent1(state = initialState, action){
    switch(action.type) {
        default:
            return{
                ...state
            }
    }
}

export default movieConent1;
