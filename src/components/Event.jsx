import '../css/event.css'

const Event = () => {
    const events = [
        {id:1, img:"/img/event01.jpg", name:"event_box", desc:"시티 패키지"},{id:2, img:"/img/event02.jpg", name:"event_box1", desc:"남포항점 2019 시즌 할인"},{id:3, img:"/img/event03.jpg", name:"event_box2", desc:"설 선물 이수점 전용 관람권 런칭"},
    ]
    const eventlist = events.map((event)=>(
        <div className={event.name} key={event.id}>
            <img src={process.env.PUBLIC_URL + event.img} alt={event.desc} />
        </div>
    ))
    return (  
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="event">
                        <h2>새로운 이벤트</h2>
                        <div className="event_left">
                            {eventlist}
                        </div>
                        <div className="event_right">
                            <img src="/img/event04.jpg" srcset="assets/img/event04@2.jpg 2x" alt="사표 대신 영화표"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
 
export default Event;