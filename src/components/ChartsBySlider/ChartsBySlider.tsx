import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ChartsBySlider.css";

interface Chart {
	children: React.ReactNode;
}

interface styleProps {
	className?: string;
	style?: {};
	onClick?: () => void;
}

const NextArrow: React.FC<styleProps> = ({style, className, onClick}) => {
	return <div className={className} style={{...style}} onClick={onClick} />;
};

const PrevArrow: React.FC<styleProps> = ({style, className, onClick}) => {
	return <div className={className} style={{...style}} onClick={onClick} />;
};

const ChartsBySlider: React.FC<Chart> = ({children}) => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		fade: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	};

	return <Slider {...settings}>{children}</Slider>;
};

export default ChartsBySlider;
