import '../css/service.css'

const Service = () => {
    const services = [
        {id:1, name:"img1", desc:"1:1 문의"},
        {id:2, name:"img2", desc:"단체관람"},
        {id:3, name:"img3", desc:"자주묻는 질문"},
        {id:4, name:"img4", desc:"분실물 문의"},
    ]
    const List = services.map((el)=>(
        <li key={el.id}>
            <a href="#">
                <span className={el.name+" icon"}></span>
            </a>
            <strong>{el.desc}</strong>
        </li>
    ))
    return (  
        <div className="service">
            <ul>
                {List}
            </ul>
        </div>
    );
}
 
export default Service;