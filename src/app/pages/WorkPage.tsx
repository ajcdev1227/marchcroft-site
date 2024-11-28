"use client";

/** @format */

import {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {TalkUs} from "../components/TalkUs";
import {MParagraph} from "../components/Text";
import {WorkSection} from "./Work/WorkSection";
import {selectOurWorkPage} from "@/store/contentSlice";
import {useSelector} from "react-redux";

export const WorkPage = () => {
    const [workData, setWorkData] = useState<{ src: string; title: string; content: string }[] | undefined>();
    const ourWorkPageContent = useSelector(selectOurWorkPage);
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });

        fetch(`${baseUrl}/api/blogs?populate=image&populate=blogContent`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        })
            .then((res) => res.json())
            .then(({data}) => {
                console.log("data", data);
                setWorkData(data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className="flex flex-col justify-center">
            <Helmet>
                <title>Marchcroft | Our Work</title>
            </Helmet>
            {/* Background */}
            <Background className="absolute top-0 h-[526px]"/>
            <section className="flex justify-center px-5 z-10 relative mb-32 bg-[#0D1B2A]">
                {/* Background for Left Div */}
                <DivLeft className="absolute bottom-0 lg:top-1/3 md:top-1/4 sm:top-1/4 left-0">
                    <div className="relative w-[300px] h-[300px]">
                        <img
                            src="/img/Rectangle-left.png"
                            alt="rectangle-left"
                            className="absolute h-[400px] blur-[30px] top-[-60px]"
                        />
                        <BackgroundLeftImg
                            src="/img/work/background-left.svg"
                            alt="background-left-img"
                        />
                    </div>
                </DivLeft>
                <div className="absolute top-0 right-0">
                    {/* Background for Right Div */}
                    <div className="relative w-[300px] h-[500px]">
                        <img
                            src="/img/Rectangle-right.png"
                            alt="rectangle-right"
                            className="absolute h-[400px] top-[-90px]"
                        />
                        <BackgroundRightImg
                            src="/img/work/background-right.svg"
                            alt="background-right-img"
                        />
                    </div>
                </div>

                <section className="flex max-w-screen-2xl lg:px-14">
                    <div className="h-1/3 w-full lg:order-1 order-2">
                        {/* Title */}
                        <Fade cascade delay={500}>
                            <p className="text-primary-800 mt-20 mb-16 lg:text-[73px] md:text-[45px] sm:text-[36px] text-[36px] capitalize text-center mx-auto max-w-[1111px] font-bold font-objektiv-mk2">
                                {ourWorkPageContent?.title}
                            </p>
                        </Fade>
                        {/* Paragraph */}
                        <Fade cascade delay={500}>
                            <MParagraph className="text-white mb-10 text-center text-[20px] mx-auto max-w-[1111px]">
                                {ourWorkPageContent?.description}
                            </MParagraph>
                        </Fade>
                    </div>
                </section>
            </section>
            <section className="flex justify-center px-5 mt-24 bg-white z-10 py-10 lg:px-14 md:px-5 sm:px-5">
                <section className="flex flex-col max-w-[1111px] container w-full mx-auto">
                    {/* Work Section */}
                    <Fade cascade>
                        <WorkTitle className="text-black mt-10 font-bold text-left text-[20px] font-objektiv-mk2 mb-2">
                            {ourWorkPageContent?.header}
                        </WorkTitle>
                        <WorkSection data={workData}/>
                    </Fade>
                </section>
            </section>
            <TalkUsSection className="pt-10">
                {/* Talk Us Component */}
                <TalkUs/>
            </TalkUsSection>
        </section>
    );
};

//styled components

const Background = styled.div`
    // background: url('/img/work/background.png');
    background-color: #0d1b2a;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
    background-position-x: center;
`;

const TalkUsSection = styled.section`
    background: var(
            --linear-2,
            linear-gradient(
                    123deg,
                    #2f25a5 0%,
                    #2934ae 14%,
                    #1a5ec8 40%,
                    #03a1f2 77%,
                    #00acf9 83%
            )
    );
`;

const BackgroundLeftImg = styled.img`
    width: 308.239px;
    height: 252.322px;
    position: absolute;
    top: 0;

    @media (max-width: 700px) and (min-width: 319px) {
        width: 150px;
    }

    @media (max-width: 318px) and (min-width: 289px) {
        width: 127px;
    }
`;

const BackgroundRightImg = styled.img`
    width: 308.239px;
    height: 252.322px;
    position: absolute;
    top: -40px;
    right: 0;

    @media (max-width: 700px) {
        width: 150px;
    }
`;

const BackgroundDivLeft = styled.div`
    background: linear-gradient(
            123deg,
            #2f25a5 0%,
            #2934ae 14%,
            #1a5ec8 40%,
            #a100a1 60.51%,
            #03a1f2 77%,
            #00acf9 83%
    );
    filter: blur(90px);
    width: 308.239px;
    height: 150px;

    @media (max-width: 700px) {
        width: 150px;
        filter: blur(45px);
    }

    @media (max-width: 288px) {
        filter: blue(36px);
    }
`;

const BackgroundDivRight = styled.div`
    background: linear-gradient(
            123deg,
            #2f25a5 0%,
            #2934ae 14%,
            #1a5ec8 40%,
            #a100a1 60.51%,
            #03a1f2 77%,
            #00acf9 83%
    );
    filter: blur(120px);
    width: 308.239px;
    height: 150px;

    @media (max-width: 700px) {
        width: 150px;
        filter: blur(70px);
        top: -40px;
    }
`;

const WorkTitle = styled.div`
    @media (max-width: 937px) {
        text-align: center;
    }
`;

const DivLeft = styled.div`
    @media (max-width: 613px) and (min-width: 437px) {
        bottom: -48px;
    }

    @media (max-width: 436px) and (min-width: 319px) {
        bottom: -10px;
    }

    @media (max-width: 288px) {
        bottom: 45px;
    }

    @media (max-width: 280px) {
        bottom: 72px;
    }
`;
