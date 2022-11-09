
const initialState  = { 
    movies : [
        {
            id:1, rank:1, title:'침묵', img: '/img/poster01.jpg', age:"all"
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