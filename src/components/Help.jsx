import '../css/help.css'
import Card from './Card';
import Notice from './Notice';
import Service from './Service';

const Help = () => {
    return (  
        <section className="help">
            <div className="container">
                <div className="row">
                    <div className='help clearfix'>
                        <article className="help_box1">
                            <h3>공지사항</h3>
                            <Notice />
                        </article>
                        <article className="help_box2">
                            <h3>메가박스 할인카드</h3>
                            <Card />
                        </article>
                        <article className="help_box3">
                            <h3>고객센터</h3>
                            <Service />
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Help;