"use client";

import { useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { TalkUs } from "../../../components/TalkUs";
import { CaseStudiesSection } from "../Work/CaseStudiesSection";
import { selectTalkToUsSection } from "@/store/contentSlice";
import { useSelector } from "react-redux";

interface caseStudies {
  img1: string;
  img2: string;
  title: string;
  title1: string;
  content1: string;
  title2: string;
  content2: string;
  title3: string;
  content3: string;
  title4: string;
  content4: string;
  content4_1?: string;
  title5: string;
  content5: string;
  title6: string;
  content6: string;
  title7?: string;
  content7?: string;
}

interface ourWork {
  src: string;
  blogTitle: string;
  content: string;
}

const CaseStudiesClient = ({
  caseStudiesData,
  workData,
}: {
  caseStudiesData: caseStudies[];
  workData: ourWork;
}) => {
  const talkToUs = useSelector(selectTalkToUsSection);
  
  // Use useMemo to memoize the blog title to avoid recalculating it on every render
  // const memoizedBlogTitle = useMemo(() => workData.blogTitle, [workData.blogTitle]);

  // Memoizing caseStudiesData to prevent unnecessary re-renders when data doesn’t change
  // const memoizedCaseStudiesData = useMemo(() => caseStudiesData, [caseStudiesData]);

  return (
    <section className="flex flex-col justify-center">
      {/* Background */}
      <Background className="bg-[#0D1B2A] absolute top-0 h-[600px] w-full" />
      <section className="flex justify-center px-5 z-10">
        <DivLeft className="absolute bottom-1/3 lg:top-1/4 md:top-1/4 sm:top-1/4 left-0">
          <div className="relative">
            {/* Left Background Div Element */}
            <BackgroundDivLeft className="my-auto" />
            <BackgroundLeftImg
              src="/img/work/background-left.svg"
              alt="backgroundleft-img"
            />
          </div>
        </DivLeft>
        <div className="top-0 right-0 absolute">
          <div className="relative">
            {/* Right Background Div Element */}
            <BackgroundDivRight />
            <BackgroundRightImg
              src="/img/work/background-left.svg"
              alt="backgroundright-img"
            />
          </div>
        </div>

        <section className="flex max-w-screen-2xl">
          <div className="h-1/3 w-full lg:order-1 order-2">
            <Fade cascade delay={500}>
              {/* Title */}
              <p className="text-primary-800 mt-20 lg:text-[73px] md:text-[73px] sm:text-[36px] text-[36px] capitalize text-center mx-auto max-w-[1111px] font-bold font-objektiv-mk2">
                {workData.blogTitle || ""}
              </p>
            </Fade>
          </div>
        </section>
      </section>

      <section className="flex justify-center mt-24 bg-white z-10 pt-10">
        <section className="flex flex-col w-full">
          {/* Render the specific case study section */}
          <CaseStudiesSection data={caseStudiesData} />
        </section>
      </section>
      <TalkUsSection className="pt-10">
      <TalkUs title={talkToUs?.title} description={talkToUs?.description} buttonText="Consult with us" />
      </TalkUsSection>
    </section>
  );
};

const Background = styled.div`
  @media (max-width: 327px) {
    height: 670px;
  }
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
  left: 10px;

  @media (max-width: 639px) {
    width: 200px;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const BackgroundRightImg = styled.img`
  width: 308.239px;
  height: 252.322px;
  position: absolute;
  top: 35px;
  right: 0;

  @media (max-width: 279px) {
    display: none;
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
  width: 300px;
  height: 200px;

  @media (max-width: 700px) {
    width: 200px;
    filter: blur(55px);
  }

  @media (max-width: 288px) {
    filter: blue(36px);
  }

  @media (max-width: 279px) {
    display: none;
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
  width: 300px;
  height: 300px;

  @media (max-width: 700px) {
    width: 150px;
    filter: blur(55px);
    top: -40px;
  }

  @media (max-width: 288px) {
    height: 200px;
    filter: blue(36px);
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const DivLeft = styled.div`
  @media (max-width: 627px) {
    bottom: 38%;
  }
  @media (max-width: 360px) {
    bottom: 25%;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

export default CaseStudiesClient;
