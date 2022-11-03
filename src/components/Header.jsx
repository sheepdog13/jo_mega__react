import '../css/header.css'
import megalogo from '../img/logo.png'
import sublogo from '../img/logo-sub.png'

const Header = () => {
    const lists = [
        {id:1, name:"영화"},{id:2, name:"큐레이션"},{id:3, name:"영화관"},{id:4, name:"특별관"},
        {id:5, name:"스토어"},{id:6, name:"이벤트"},{id:7, name:"로그인"},
    ]
    const listItems = lists.map((list) => (
        <li key={list.id}><a href="#">{list.name}</a></li>
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