import "./Update.css"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/img1.webp"
import image2 from "../../assets/img2.webp"
import image3 from "../../assets/img3.webp"
import { useEffect, useState } from "react";


const Update = () => {

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setSlidesToShow(1);
            } else if (window.innerWidth <= 1025) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const items = [
        { timeLine: "Latest Update", heading: "Xcellent Care & University of Leicester launch Digital Health Centre in India", img: image1 }
        , { timeLine: "Latest Update", heading: "Xcellent Care Neuro Conclave 2024", img: image2 }
        , { timeLine: "Latest Update", heading: "Xcellent Care Hospitals completes 500 robotic cardiac procedures.", img: image3 }
        , { timeLine: "Latest Update", heading: "Xcellent Care & University of Leicester launch Digital Health Centre in India", img: image1 }
        , { timeLine: "Latest Update", heading: "Xcellent Care Neuro Conclave 2024", img: image2 }
        , { timeLine: "Latest Update", heading: "Xcellent Care Hospitals completes 500 robotic cardiac procedures.", img: image3 }
    ]

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             initialSlide: 0,
        //         },
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             initialSlide: 0,
        //         },
        //     },
        // ]
    };

    return (
        <div className="update-wrapper">
            <div className="d-flex update-text">
                <div>
                    <p style={{ marginBottom: "10px" }} className="big-text semi-bold">LATEST UPDATES</p>
                    <p className="title bold">What's New At Xcellent Care</p>
                </div>
                <button className="update-more">Explore More <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
            </div>

            {/* Slick Carousel */}
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} style={{ padding: "40px", borderRadius: "10px" }}>
                        <UpdateCard title={item.heading} timeLine={item.timeLine} img={item.img} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Update;

function PreviousArrow(props) {
    const { onClick } = props;

    return (
        <div className="previous-arrow" onClick={onClick}>
            <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </div>
    );
}

function NextArrow(props) {
    const { onClick } = props;

    return (
        <div className="next-arrow" onClick={onClick}>
            <FontAwesomeIcon className="icon" icon={faArrowRight} />
        </div>
    );
}

const UpdateCard = ({ timeLine, title, img }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="update-card-wrapper">
            <p className="text">{timeLine}</p>
            <p className="update-card-title">{title}</p>
        </div>
    )
}

