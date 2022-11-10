import '../css/new.css'

const New = () => {
    const stars = [
        {id:1, name:"star1"},{id:2, name:"star1"},{id:3, name:"star1"},{id:4, name:"star2"},{id:5, name:"star0"},
    ]
    const starlist = stars.map((star)=>(
        <span key={star.id} className={star.name+" icon"}></span>
    ))
    const times = [
        {id:1, desc:"오전 0:00"},{id:2, desc:"오전 1:00"},{id:3, desc:"오전 2:00"},{id:4, desc:"오전 3:00"},{id:5, desc:"오전 4:00"},{id:6, desc:"오전 5:00"},{id:7, desc:"오전 6:00"},{id:8, desc:"오전 7:00"},{id:9, desc:"오전 8:00"},{id:10, desc:"오전 9:00"},{id:11, desc:"오전 10:00"},{id:12, desc:"오전 11:00"},{id:13, desc:"오전 12:00"},{id:14, desc:"오후 1:00"},{id:15, desc:"오후 2:00"},{id:16, desc:"오후 3:00"},{id:17, desc:"오후 4:00"},{id:18, desc:"오후 5:00"},{id:19, desc:"오후 6:00"},{id:20, desc:"오후 7:00"},{id:21, desc:"오후 8:00"},{id:22, desc:"오후 9:00"},{id:23, desc:"오후 10:00"},{id:24, desc:"오후 11:00"},{id:25, desc:"오후 12:00"},
    ]
    const timelist = times.map((time)=>(
        <option key={time.id} value={time.desc}>{time.desc}</option>
    ))
    return (  
        <>
        <section className="new">
        <div className="container">
            <div className="row">
                <div className="new">
                    <h2>새로운 영화</h2>
                    <div className="new_left">
                        <div className="play">
                            <svg>
                                <circle className="st0" cx="60" cy="60.4" r="56"/>
                                <path className="st1" d="M81,65.4c4.8-2.8,4.8-7.2,0-10L53.5,39.6c-4.8-2.8-8.7-0.5-8.7,5v31.7c0,5.5,3.9,7.8,8.7,5L81,65.4z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="new_right">
                        <h3 className="title">로그 원: 스타워즈 스토리</h3>
                        <span className="release">2016년 10월 28일 개봉</span>
                        <div className="star">
                            {starlist}
                            <strong>7.5/10</strong>
                        </div>
                        <ul className="summary">
                            <li className="genre"><span className="bar">액션</span><span>미국, 오스트레일리아</span></li>
                            <li className="age"><span className="bar">142분</span><span>12세 이상 관람가</span></li>
                            <li className="desc">단숨에 행성 하나를 파괴할 위력을 지닌 데스 스타가 완성되기 전에 설계도를 훔쳐내야 하는 이번 작전의 성공 확률은 고작 2.4%. 생사도 모르는 아버지에 얽힌 비밀을 밝히려는 진을 ...비롯해 유능한 정보 요원 ‘카시안’(디에고 루나), 두 눈이 멀었지만 탁월한 무술 실력을 지닌 ‘치루트’(견자단), 전투 베테랑 ‘베이즈’, 파일럿 ‘보디’, 시니컬한 드로이드 ‘K-2SO’까지 합류, 거대한 전쟁을 끝낼 ‘로그 원’이 이끄는 가장 비밀스런 작전이 시작되는데…</li>
                        </ul>
                        <div className="select">
                            <div className="s1">
                                <label for="udate" className="ir_so">날짜</label>
                                <input type="text" id="udate" name="udate" defaultValue="2019년 1월 25일" className="ui_select2" />
                            </div>
                            <div className="s2">
                                <label for="utime" className="ir_so">시간</label>
                                <select id="utime" name="utime" className="ui_select2">
                                    {timelist}
                                </select>
                            </div>
                            <div className="s3">
                                <label for="utext" className="ir_so">주소 또는 도로명을 입력해주세요.</label>
                                <input type="text" id="utext" name="utext" className="ui_input3" placeholder="주소 또는 도로명을 입력해주세요." />
                            </div>
                        </div>
                        <div className="btn">
                            <a href="#" className="white">좌석확인</a>
                            <a href="#" className="purple">예매하기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
 
export default New;