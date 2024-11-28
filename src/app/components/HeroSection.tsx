/** @format */

import { MParagraph } from "./Text";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Fade } from "react-awesome-reveal";

export const HeroSection = (props: any) => {
  const { heroText, subHeroText, buttonText } = props;
  const { t } = useTranslation();
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="min-h-[400px] h-1/3 w-full lg:order-1 order-2">
        <Fade cascade delay={500}>
          <p className="text-primary-800 mt-20 mb-6 lg:text-[73px] md:text-[45px] sm:text-[36px] text-[36px] capitalize text-center mx-auto max-w-[1111px] font-bold font-objektiv-mk2">
            {t(heroText)}
          </p>
        </Fade>
        <Fade cascade delay={500}>
          <MParagraph className="text-white mb-10 font-normal	text-center text-base mx-auto lg:px-14 md:px-10 max-w-[1111px]">
            {t(subHeroText)}
          </MParagraph>
        </Fade>
        <Fade cascade delay={500}>
          <div className="flex justify-center lg:mb-5 md:mb-4 sm:mb-2 mb-2">
            <Button href="contactus" sx={ctaButtonCss}>
              {buttonText}
            </Button>
          </div>
        </Fade>
      </div>
    </div>
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
