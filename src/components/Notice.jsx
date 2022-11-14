import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/notice.css'
import NoticeList from './NoticeList'


const Notice = () => {
    const notice1 = useSelector((state)=>(state.notice1.notice))
    const notice2 = useSelector((state)=>(state.notice2.notice))

    const none = {
            display: "none"
    }
    const [check, setCheck] = useState(true);

    
    return (  
        <div className="notice">
            <ul>
                <li onClick={(e)=>{
                    e.preventDefault();
                    setCheck(!check)
                }} className={check ? "active" : null}><a href="#">전체 공지</a>
                    <ul>
                        {check && <NoticeList desc={notice1} />}
                    </ul>
                </li>
                <li onClick={(e)=>{
                    e.preventDefault();
                    setCheck(!check)
                }} className= {check ? null : "active"} ><a href="#">영화관 공지</a>
                    <ul>
                    {!check && <NoticeList desc={notice2} />}

                    </ul>
                </li>
            </ul>
        </div>
    );
}
 
export default Notice;