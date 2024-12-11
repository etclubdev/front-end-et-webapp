import './Departments.css';
import Slider from "react-slick";
import { departmentsData } from "../../mocks/data";

const departments = departmentsData.departments;

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          height: "auto",
          zIndex: 1000, 
          position: "absolute", 
          top: "12vw",
          left: "1.5vw",
        }}

        onClick={onClick}
      />
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          ...style, 
          display: "block", 
          height: "auto", 
          zIndex: 1000, 
          position: "absolute", 
          top: "12vw", 
          right: "2vw",
        }}
        onClick={onClick}
      />
    );
  }

export const Departments = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "1vw",
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [  
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Kích thước lớn hơn 1200px  
            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },  // Kích thước từ 768px đến 1200px  
            { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } }   // Kích thước nhỏ hơn 480px  
        ] 
    };
    return (
      <div className="departments-section">  
        <div className="departments-section__title">ĐIỂM GIAO THOA TUYỆT VỜI <br /> GIỮA CÔNG NGHỆ & KINH TẾ</div>  
        <Slider {...settings}>  
            {departments.map(department => (  
                <div key={department.id} className="departments-section__department">  
                    <img src={require(`../../mocks${department.image}`)} alt={department.name} className="departments-section__department-image" />  
                    <button className="departments-section__button">{"BAN " + department.name}</button>  
                    <div className="departments-section__hover-overlay">Nội dung hiển thị khi hover</div>  
                </div>  
            ))}  
        </Slider>  
    </div>
    );
}

