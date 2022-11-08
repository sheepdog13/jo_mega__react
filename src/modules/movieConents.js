
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
    ]}

    function movieConents(state = initialState, action){
        switch(action.type) {
            default:
                return{
                    ...state
                }
        }
    }
export default movieConents;