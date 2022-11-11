import '../css/notice.css'

const Notice = () => {
    const notices = [
        {id:1, title:"전체", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:2, title:"전체", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:3, title:"전체", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:4, title:"전체", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
    ]
    const notices2 = [
        {id:1, title:"안양", date:"2019.05.24", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:2, title:"인덕원", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:3, title:"서울", date:"2019.05.24", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
        {id:4, title:"전체", date:"2019.05.28", desc:"[무대인사] 터미네이터6 시즌 발표 및 영상 제작 10주년 기념 라이브 쇼" },
    ]
    const noticeList = notices.map((notice)=>(
        <li key={notice.id}>
            <dt><strong className="bar">{notice.title}</strong><em>{notice.date}</em></dt>
            <dd>{notice.desc}</dd>
        </li>
    ))
    const noticeList2 = notices2.map((notice)=>(
        <li key={notice.id}>
            <dt><strong className="bar">{notice.title}</strong><em>{notice.date}</em></dt>
            <dd>{notice.desc}</dd>
        </li>
    ))

    const none = {
            display: "none"
    }
    return (  
        <div className="notice">
            <ul>
                <li className="active"><a href="#">전체 공지</a>
                    <ul>
                        {noticeList}
                    </ul>
                </li>
                <li><a href="#">영화관 공지</a>
                    <ul style={none}>
                        {noticeList2}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
 
export default Notice;