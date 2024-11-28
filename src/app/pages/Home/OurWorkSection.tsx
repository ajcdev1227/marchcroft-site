import { Button } from "@mui/material";
import cs from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ContentTitle } from "../../utils/Constants";

export const OurWorkSection = (props: any) => {
  const { data, title, description, buttonText } = props;
  const [currentSlide, setCurrentSlide] = useState<Number>(0);

  const setting: Settings = {
    dots: true,
    customPaging: (index: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: index === currentSlide ? "#1A40A9" : "#FFF", // set the color of the dots to white
        }}
      ></div>
    ),
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    afterChange: (slideIndex: number) => {
      setCurrentSlide(slideIndex);
    },
  };

  return (
    <section
      className='flex flex-col lg:scroll-mt-24 mt-36'
      id='OurWorkSection'
    >
      <div className='w-full'>
        <div
          className={cs(
            ContentTitle,
            "text-white text-center font-medium lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px]"
          )}
        >
          {title}
        </div>
        <div className='font-objektiv-mk2 text-white text-center text-base'>
          {description}
        </div>
        <div className='mt-6 lg:px-32 md:px-28 mx-auto'>
          <Slider {...setting}>
            {data?.map((item: any) => (
              <div className='mb-2' key={item.id}>
                <div className='lg:flex md:flex sm:flex flex-row'>
                  <img
                    src='/img/text.svg'
                    className='w-[74px] mb-auto'
                    alt='text'
                  />
                  <div className=''>
                    <div className='text-white text-[20px] mt-10 font-normal font-objektiv-mk2 px-10 text-center lg:text-left md:text-left sm:text-center'>
                      {item.attributes.data.content}
                    </div>
                    <div className='text-white text-base font-normal font-objektiv-mk2 lg:text-right md:text-right sm:text-center text-center'>
                      {item.attributes.data.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='flex justify-center mt-20'>
          <Button href='contactus' sx={ctaButtonCss}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

const ctaButtonCss: Object = {
  border: "1px solid #FFFFFF;",
  padding: "0px 20px",
  height: "50px",
  color: "white",
  borderRadius: "29px",
  display: "inline-block",
  fontSize: "1rem",
  fontFamily: "objektiv-mk2",
  lineHeight: "47px",
  gap: "10px",
  textTransform: "capitalize",
  fontWeight: "500",
  textAlign: "center",
  "&:hover": {
    color: "#1976d2",
    background: "white",
  },
};
