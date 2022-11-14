const NoticeList = (props) => {
    const notices = props.desc;
    const noticeList = notices.map((notice)=>(
        <li key={notice.id}>
            <dt><strong className="bar"
            >{notice.title}</strong><em>{notice.date}</em></dt>
            <dd>{notice.desc}</dd>
        </li>
    ))
    return (  
        <>
        {noticeList}
        </>
    );
}
 
export default NoticeList;