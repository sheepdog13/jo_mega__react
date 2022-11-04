import '../css/banner.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/customSwiper.css'

const Banner = () => {
    const contentItems = [
        {
            id:1,
            title:'캡틴 마블',
            subTitle:'Captain Marvel',
            content:'새로운 히어로,어벤져스의 희망',
            imgId: "img1"
        },
        {
            id:2,
            title:'캡틴 마블',
            subTitle:'Captain Marvel',
            content:'새로운 히어로,어벤져스의 희망',
            imgId: "img2"
        },
        {   
            id:3,
            title:'캡틴 마블',
            subTitle:'Captain Marvel',
            content:'새로운 히어로,어벤져스의 희망',
            imgId: "img3"
        },
    ]
    const content = contentItems.map((el)=>(
            <SwiperSlide className={el.imgId} key={el.id}>
                    <div className="container">
                        <div className="row">
                            <h2>{el.title}<em>{el.subTitle}</em></h2>
                            <p>{el.content}</p>
                        </div>
                    </div>
            </SwiperSlide >
    ))
    return (  
        <section className="banner">
        <h2 className="ir_so">최신 영화 소식</h2>
        <div className="banner_menu">
            <div className="container">
                <div className="row">
                    <div className="bm_left">
                        <ul>
                            <li className="total"><a href="#"><i className="fa fa-bars" aria-hidden="true"></i> 전체메뉴</a></li>
                            <li className="line"><a href="#">필름 소사이어티</a></li>
                            <li><a href="#">클래식 소사이어티</a></li>
                        </ul>
                    </div>
                    <div className="bm_right">
                        <ul>
                            <li className="line"><a href="#">고객센터</a></li>
                            <li className="line"><a href="#">맴버쉽</a></li>
                            <li><a href="#">VIP</a></li>
                        </ul>
                        <ul>
                            <li className="white"><a href="#">상영시간표</a></li>
                            <li className="purple"><a href="#">빠른예매</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='slider'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {content}
            </Swiper>
        </div> 
    </section>
    );
}
 
export default Banner;