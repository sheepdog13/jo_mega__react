
const initialState  = { 
    movies : [
        {
            id:1, rank:1, title:'침묵', img: '/img/poster01.jpg',
        },
        {
            id:2, rank:2, title:'신세계', img: '/img/poster02.jpg' 
        },
        {
            id:3, rank:3, title:'마스터', img: '/img/poster03.jpg' 
        },
        {
            id:4, rank:4, title:'마약왕', img: '/img/poster04.jpg' 
        },
        {
            id:5, rank:1, title:'her', img: '/img/poster05.jpg' 
        },
        {
            id:6, rank:2, title:'괴물', img: '/img/poster06.jpg' 
        },
        {
            id:7, rank:3, title:'꼭두각시', img: '/img/poster07.jpg' 
        },
        {
            id:8, rank:4, title:'getout', img: '/img/poster08.jpg' 
        },
        {
            id:9, rank:1, title:'문라이트', img: '/img/poster09.jpg' 
        },
        {
            id:10, rank:2, title:'보헤미안 랩소디', img: '/img/poster10.jpg' 
        },
        {
            id:11, rank:3, title:'꼭두각시', img: '/img/poster07.jpg' 
        },
        {
            id:12, rank:4, title:'침묵', img: '/img/poster01.jpg' 
        },
        {
            id:13, rank:1, title:'her', img: '/img/poster05.jpg' 
        },
        {
            id:14, rank:2, title:'문라이트', img: '/img/poster09.jpg' 
        },
        {
            id:15, rank:3, title:'마스터', img: '/img/poster03.jpg' 
        },
        {
            id:16, rank:4, title:'괴물', img: '/img/poster06.jpg' 
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