import styled from "styled-components";

import {Fade} from "react-awesome-reveal";
import {MParagraph} from "@/app/components/Text";
import {fetchContent, selectServices, selectTalkToUsSection} from "@/store/contentSlice";
import {useSelector} from "react-redux";

export const HeroSection = ({data}: any) => {
    const ourServicePageContent = useSelector(selectServices);
    return (
        <section className="flex justify-center px-5 z-10 relative bg-[#012f62] h-[526px]">
            <LeftGradientDiv/>
            <BackgroundLeftImg
                src="/img/work/background-left.svg"
                alt="background-left-img"
            />
            <RightGradientDiv/>
            <BackgroundRightImg
                src="/img/work/background-right.svg"
                alt="background-right-img"
            />

            <section className="flex max-w-screen-2xl lg:px-14">
                <div className="h-1/3 w-full lg:order-1 order-2">
                    <Fade cascade delay={500}>
                        <p className="text-primary-800 mt-20 mb-5 lg:text-[73px] md:text-[45px] sm:text-[36px] text-[36px] capitalize text-center mx-auto max-w-[1111px] font-bold font-objektiv-mk2">
                            {ourServicePageContent?.title || "Measuring Our Success"}
                        </p>
                    </Fade>
                    <Fade cascade delay={500}>
                        <MParagraph className="text-white text-center text-[20px] mx-auto max-w-[1111px]">
                            {ourServicePageContent?.description || "Marchcroft translates our expertise into measurable success, driving your growth through data-backed solutions."}
                        </MParagraph>
                    </Fade>
                </div>
            </section>
        </section>
    );
}

const BackgroundLeftImg = styled.img`
    width: 224.41px;
    height: 231.3px;
    top: 224.41px;
    left: 48px;
    position: absolute;
    opacity: 50%;

    @media (max-width: 700px) and (min-width: 319px) {
        width: 150px;
    }

    @media (max-width: 318px) and (min-width: 289px) {
        width: 127px;
    }
`;

const BackgroundRightImg = styled.img`
    width: 224.41px;
    height: 231.3px;
    top: 80.32px;
    right: 0;
    position: absolute;
    opacity: 50%;

    @media (max-width: 700px) {
        width: 150px;
    }
`;

const LeftGradientDiv = styled.div`
    position: absolute;
    width: 308.24px;
    height: 252.32px;
    left: 48px;
    top: 195.33px;

    background: linear-gradient(
            122.96deg,
            #2F25A5 7.74%,
            #2934AE 22.52%,
            #1A5EC8 49.96%,
            #A200A2 71.61%,
            #03A1F2 89.02%,
            #00ACF9 95.36%
    );
    filter: blur(150px);
`

const RightGradientDiv = styled.div`
    position: absolute;
    width: 308.24px;
    height: 252.32px;
    right: 230px;
    top: 71px;

    background: linear-gradient(
            122.96deg,
            #2F25A5 7.74%,
            #2934AE 22.52%,
            #1A5EC8 49.96%,
            #A200A2 71.61%,
            #03A1F2 89.02%,
            #00ACF9 95.36%
    );
    filter: blur(150px);
`
