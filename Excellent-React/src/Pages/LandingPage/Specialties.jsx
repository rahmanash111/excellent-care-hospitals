import { useRef, useState } from "react";
import Slider from "react-slick";
import "./Specialties.css"

const Specialties = () => {

    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = new Array(5).fill(<SpecialtiesCard />)

    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setActiveIndex(current),
    };

    const handleTabClick = (index) => {
        setActiveIndex(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="speciality-wrapper b-r">
            <p>OUR SPECIALTIES</p>
            <p>Discover Our Centres of Excellence</p>
            <p>Experience world-class healthcare at Xcellent specialized hubs of medical innovation. Our state-of-the-art centres deliver unparalleled expertise in key specialties and super specialties. Each centre stands as a beacon of cutting-edge care, setting new benchmarks in clinical outcomes globally.</p>
            {/* Tabs */}
            <div className="speciality-tabs">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`speciality-tab-item ${activeIndex === index ? "active" : ""}`}
                    >
                        Tab {index + 1}
                    </button>
                ))}
            </div>

            {/* Slick Carousel */}
            <Slider ref={sliderRef} {...settings}>
                {items.map((item, index) => (
                    <div key={index} style={{ padding: "40px", background: "#eee", borderRadius: "10px" }}>
                        <h2>{item}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Specialties;


export const SpecialtiesCard = () => {
    return (
        <div className="specialties-card">

            {/* Text Section */}
            <div className="content">
                <h2 className="title">Neurology</h2>

                <p className="description">
                    The Neurology department at Xcellentcare Hospital provides cutting-edge care for a variety of neurological conditions. Our services include advanced diagnostic imaging, comprehensive treatment plans, and specialized therapies for disorders such as...
                </p>

                <button className="read-more">Read More</button>

                <h4 className="sub-heading">Top Specialties & Procedures</h4>
                <div className="divider"></div>

                {/* Buttons */}
                <div className="button-group">
                    <button className="outline-btn">FIND DOCTOR →</button>
                    <button className="outline-btn">EXPLORE MORE →</button>
                </div>
            </div>

            {/* Image Section */}
            <div className="image-wrapper">
                <img
                    src="/mnt/data/6e47c984-e22c-4aab-8ff9-7a40d2d5820d.png"
                    alt="Neurology Brain Lab"
                    className="image"
                />
            </div>

        </div>
    )
}