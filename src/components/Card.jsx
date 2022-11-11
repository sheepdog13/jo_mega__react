import '../css/card.css'

const Card = () => {
    const cards = [
        {id:1, img:'/img/card01.jpg', title:"T맴버십 일반", desc:"영화 2,000원 현장 즉시 할인(1인 5매)"},
        {id:2, img:'/img/card02.jpg', title:"T맴버십 일반", desc:"영화 2,000원 현장 즉시 할인(1인 5매)"},
        {id:3, img:'/img/card03.jpg', title:"T맴버십 일반", desc:"영화 2,000원 현장 즉시 할인(1인 5매)"},
    ]
    const cardList = cards.map((card)=>(
        <li key={card.id}>
            <a href="#">
                <span><img src={process.env.PUBLIC_URL + card.img}  alt={card.title}/></span>
                <strong>{card.title}</strong>
                <em>{card.desc}</em>
            </a>
        </li>
    ))
    return (  
        <div className="card">
            <ul>
                {cardList}
            </ul>
        </div>
    );
}
 
export default Card;