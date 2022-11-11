import '../css/opening.css'

const Opening = () => {
    const boxs = [
        {id:1, place:"안양" },
        {id:2, place:"인덕원 사거리" },
        {id:3, place:"용인테크노밸리" },
    ]
    const boxlist = boxs.map((box)=>(
        <div key={box.id}>
            <h3>리뉴얼 오픈</h3>
            <p><em>경기도</em><strong key={box.id}>{box.place}</strong>12월 8일</p>
        </div>
    ))
    return (  
        <>
        <section className="opening_wrap">
        <div className="container">
            <div className="row">
                <div className="opening">
                    <h2><span className="grand icon ir_pm">Grand Opening</span></h2>
                    <strong className="date icon ir_pm">2019.01 ~ 2019.03</strong>
                    <p className="desc">LIFE THEATER로 새롭게 시작하는 메가박스를 만나보세요!</p>
                    <div className="open_box">
                        {boxlist}
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
 
export default Opening;