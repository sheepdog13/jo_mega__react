import '../css/header.css'
import megalogo from '../img/logo.png'
import sublogo from '../img/logo-sub.png'

const Header = () => {
    const lists = ["영화", "큐레이션", "영화관", "특별관", "스토어", "이벤트", "로그인"]
    const listItems = lists.map((list) => (
        <li><a href="#">{list}</a></li>
    ));
    return (
        <header className="header">
        <div className="container">
            <div className="row">
                <div className="clearfix">
                    <h1>
                        <a href="#">
                            <em><img src={megalogo} alt="MEGABOX" /></em>
                            <strong><img src={sublogo} alt="LIFE THEATER" /></strong>
                        </a>
                    </h1>
                    <nav className="mNav">
                        <h1 className="ir_so">메가박스 전체메뉴</h1>
                        <a href="#" className="ham"><span></span></a>
                    </nav>
                    <nav className="nav">
                        <ul className="clearfix">{listItems}</ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
}
 
export default Header;