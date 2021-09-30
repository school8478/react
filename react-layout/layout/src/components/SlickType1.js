import React from 'react';
import Slider from 'react-slick';
import url1 from '../image/img-slider-1.png';
import url2 from '../image/img-slider-2.png';
import url3 from '../image/img-slider-3.png';
import url4 from '../image/img-slider-4.png';

const SlickType1 = () => {
    const settings = {
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        speed : 300,
        autoplay : true,
        autoplaySpeed : 10000,
        arrows : true,
        dots : true,
        draggable : true,
    };

    return (
    <Slider {...settings} className="art-slider">
        <div className="dv-slider-info sha">
            <img src={ url1 } alt={ url1 } />
        </div>
        <div className="dv-slider-info sha">
            <img src={ url2 } alt={ url2 } />
        </div>
        <div className="dv-slider-info sha">
            <img src={ url3 } alt={ url3 } />
        </div>
        <div className="dv-slider-info sha">
            <img src={ url4 } alt={ url4 } />
        </div>
    </Slider>
    )

};

export default SlickType1;