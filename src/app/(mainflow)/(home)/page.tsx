"use client";
/** @format */

import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"; // Importing for Redux
import { RootState, AppDispatch } from "../../../store"; // Adjust the path to your store
import { fetchContent, selectHowWeWorkSection, selectOurServicesSection, selectOurSolutionsSection, selectOurTechnologyStackSection, selectOurWorkSection, selectTalkToUsSection } from "../../../store/contentSlice"; // Import your fetchContent action
import { HeroSection } from "../../components/HeroSection";
import { TalkUs } from "../../components/TalkUs";
import { AboutUsSection } from "../../pages/Home/AboutUsSection";
import { HowItWorkSection } from "../../pages/Home/HowItWorkSection";
import { OurTechnologySection } from "../../pages/Home/OurTechnologySection";
import { OurVisionSection } from "../../pages/Home/OurVisionSection";
import { OurWorkSection } from "../../pages/Home/OurWorkSection";
import { ServiceSection } from "../../pages/Home/ServiceSection";
import { SolutionSection } from "../../pages/Home/SolutionSection";
import { fetchHistories } from "@/store/historiesSlice";
import { useLocale } from "@/app/utils/Constants";

const MainPage = () => {
  const dispatch: AppDispatch = useDispatch(); // Dispatch from Redux
  const locale = useLocale();

  // Use selector to get section content from Redux store
  const { sectionContent } = useSelector((state: RootState) => state.content);
  const ourSolution = useSelector(selectOurSolutionsSection);
  const ourServices = useSelector(selectOurServicesSection);
  const howWeWork = useSelector(selectHowWeWorkSection);
  const ourTech = useSelector(selectOurTechnologyStackSection);
  const ourWork = useSelector(selectOurWorkSection);
  const talkToUs = useSelector(selectTalkToUsSection);

  // State for body background color
  const [bodyBackgroundColor, setBodyBackgroundColor] = useState("#0D1B2A");

  // Fetch content and work histories when the locale changes
  useEffect(() => {
    dispatch(fetchContent(locale)); // Fetch content from Redux
    dispatch(fetchHistories(locale));
  }, [locale, dispatch]);

  // Refs for sections
  const solutionRef = useRef<HTMLElement>(null);
  const serviceRef = useRef<HTMLElement>(null);
  const aboutUsRef = useRef<HTMLElement>(null);
  const howWeWorkRef = useRef<HTMLElement>(null);
  const talkUsRef = useRef<HTMLElement>(null);

  // Effect for handling section intersections
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      let foundVisibleSection = false;

      // Iterate over each entry to determine visibility
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          foundVisibleSection = true;

          // Change body background color based on the section in view
          if (entry.target === aboutUsRef.current) {
            setBodyBackgroundColor("#0D1B2A"); // About Us
          } else if (entry.target === solutionRef.current) {
            setBodyBackgroundColor("white"); // Solutions
          } else if (entry.target === serviceRef.current) {
            setBodyBackgroundColor("black"); // Services
          } else if (entry.target === howWeWorkRef.current) {
            setBodyBackgroundColor("#0D1B2A"); // How We Work
          } else if (entry.target === talkUsRef.current) {
            setBodyBackgroundColor("#1A5EC8"); // Talk to Us
          }
        }
      });

      // If no section is visible, reset to default color
      if (!foundVisibleSection) {
        setBodyBackgroundColor("#0D1B2A");
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "144px",
      threshold: 0.95, // Ensure the section is almost fully in view before changing color
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each section
    if (aboutUsRef.current) observer.observe(aboutUsRef.current);
    if (solutionRef.current) observer.observe(solutionRef.current);
    if (serviceRef.current) observer.observe(serviceRef.current);
    if (howWeWorkRef.current) observer.observe(howWeWorkRef.current);
    if (talkUsRef.current) observer.observe(talkUsRef.current);

    return () => {
      // Unobserve each section
      if (aboutUsRef.current) observer.unobserve(aboutUsRef.current);
      if (solutionRef.current) observer.unobserve(solutionRef.current);
      if (serviceRef.current) observer.unobserve(serviceRef.current);
      if (howWeWorkRef.current) observer.unobserve(howWeWorkRef.current);
      if (talkUsRef.current) observer.unobserve(talkUsRef.current);
    };
  }, []);

  // Effect for applying the background color to the body
  useEffect(() => {
    document.body.style.transition = "background-color 1.3s ease-in-out"; // Add transition effect
    document.body.style.backgroundColor = bodyBackgroundColor;
  }, [bodyBackgroundColor]);

  return (
    <section className="flex flex-col justify-center">
      <Helmet>
        <title>Marchcroft Digital</title>
        {/* <meta
          name="description"
          content="At Marchcroft, we solve business problems with technology."
        /> */}
        <meta
          name="keywords"
          content="marchcroft, IT solutions, business, march, increase delivery times, business efficiency, 
                    streamline processes, reduce costs, optimal performance, future-proofing, seamless, 
                    growth, personalize offerings, eco-friendly, ROI, digital, software, UX"
        />
      </Helmet>

      <section className="flex justify-center px-5 z-10">
        <DivLeft className="absolute bottom-1/3 lg:top-1/4 md:top-1/4 sm:top-1/3 left-0">
          <div className="relative w-[300px] h-[300px]">
            <img src="/img/Rectangle-left.png" alt="rectangle-left" className="absolute h-[400px] blur-[30px] top-[-60px]" />
            <BackgroundLeftImg src="/img/work/background-left.svg" alt="background-left" />
          </div>
        </DivLeft>
        <div className="top-0 right-0 absolute">
          <div className="relative w-[300px] h-[500px]">
            <img src="/img/Rectangle-right.png" alt="rectangle-right" className="absolute h-[400px] blur-[25px]" />
            <BackgroundRightImg src="/img/work/background-left.svg" alt="background-right" />
          </div>
        </div>

        <section className="flex lg:px-14 z-10">
          <HeroSection
            heroText={sectionContent?.heroText}
            subHeroText={sectionContent?.subHeroText}
            buttonText={sectionContent?.ctaBookConsultation}
          />
        </section>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col w-full relative mt-32 lg:px-14 md:px-5 sm:px-5 px-5" id="aboutUsSection" ref={aboutUsRef}>
        <section className="flex justify-around w-full" ref={aboutUsRef}>
          <EllipseAboutLeftImg
            src="/img/Ellipse-about-left.png"
            alt="ellipse-about-left"
            className="absolute top-0 left-0 lg:h-[600px] z-10"
          />
          <EllipseAboutRightImg
            src="/img/Ellipse-about-right.png"
            alt="ellipse-about-right"
            className="absolute top-0 right-0 z-10"
          />
          <AboutUsSection
            aboutUsDescription={sectionContent?.aboutUsDescription?.split("//")}
            aboutUsTitle={sectionContent?.aboutUsTitle}
          />
        </section>

        <EllipseVisionSection className="flex justify-around w-full md:mt-[-10px]" id="ellipse-vision-section">
          {/* <VisionImg
            src="/img/our-vision.png"
            className="absolute left-0 z-10"
            alt="visionImg"
          /> */}
          <VisionLeftImg
            src="/img/Ellipse-about-left.png"
            className="absolute left-0 lg:hidden z-10"
            alt="vision-left"
          />
          <VisonRightImg
            src="/img/Ellipse-about-right.png"
            className="absolute right-0 lg:hidden z-10"
            alt="vision-right"
          />
          <OurVisionSection
            ourVisionDescription={sectionContent?.ourVisionDescription}
            ourVisionTitle={sectionContent.ourVisionTitle}
          />
        </EllipseVisionSection>
      </section>

      {/* Solution Section */}
      <section className="flex justify-center px-5 z-10 relative pt-10 pb-24 lg:px-14 md:px-5 sm:px-5 mb-10" id="solution" ref={solutionRef}>
        <section className="flex flex-col max-w-[1111px] mb-36">
          <SolutionSection content={sectionContent?.solutions} title={ourSolution?.title} description={ourSolution?.description} />
        </section>
      </section>

      {/* Service Section */}
      <section className="flex justify-center px-5 z-10 relative lg:px-14 md:px-5 sm:px-5 -mt-10" id="serviceSection" ref={serviceRef}>
        <ServiceLeftImg
          src="/img/Ellipse-about-left.png"
          className="absolute left-0"
          alt="service-left"
        />
        <ServiceRightImg
          src="/img/service-right.png"
          className="absolute top-0 right-0"
          alt="service-right"
        />
        <section className="flex flex-col max-w-[1111px] mb-36">
          <ServiceSection content={sectionContent?.services} title={ourServices?.title} description={ourServices?.description} />
        </section>
      </section>

      {/* How We Work Section */}
      <section className="flex justify-center px-5 z-10 relative lg:px-14 md:px-5 sm:px-5 lg:my-[-1px] py-10 mb-36" id="howWeWorkSection" ref={howWeWorkRef}>
        <WorkRightImg
          src="/img/work-right.png"
          className="absolute right-0"
          alt="work-right-img"
        />
        <section className="flex flex-col w-full max-w-[1111px] mb-36">
          <HowItWorkSection title={howWeWork?.title} description={howWeWork?.description} data={howWeWork?.components} />
        </section>
      </section>

      {/* Talk Us Section */}
      <section className="flex justify-center px-5 z-10 pb-28 relative lg:px-14 md:px-5 sm:px-5 mb-[-10px]" ref={talkUsRef}>
        <TalkUsSection className="pt-10">
          <TalkUs title={talkToUs?.title} description={talkToUs?.description} buttonText={sectionContent.ctaBookConsultation} />
        </TalkUsSection>
      </section>
    </section>
  );
};

// Styled components

const Background = styled.div`
  @media (max-width: 327px) {
    height: 766px;
  }
`;

const TalkUsSection = styled.section`
`;

const EllipseVisionSection = styled.section`
  @media (max-width: 281px) {
    margin-top: -20px;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const EllipseAboutLeftImg = styled.img`
  width: 320px;
  @media (max-width: 627px) {
    transform: rotate(90deg);
    height: 400px;
  }

  @media (max-width: 360px) and (min-width: 310px) {
    width: 220px;
  }

  @media (max-width: 309px) {
    width: 160px;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const EllipseAboutRightImg = styled.img`
  @media (min-width: 628px) {
    height: 800px;
  }

  @media (max-width: 627px) and (min-width: 516px) {
    height: 310px;
    top: auto;
    bottom: 30%;
  }

  @media (max-width: 515px) {
    height: 325px;
    bottom: 28%;
    top: auto;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const VisionImg = styled.img`
  @media (min-width: 628px) {
    height: 320px;
    width: 320px;
    bottom: 0;
  }

  @media (max-width: 627px) {
    display: none;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const VisionLeftImg = styled.img`
  @media (min-width: 628px) {
    display: none;
  }

  @media (max-width: 627px) {
    transform: rotate(90deg);
    height: 500px;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const VisonRightImg = styled.img`
  @media (min-width: 628px) {
    display: none;
  }
  @media (max-width: 627px) and (min-width: 516px) {
    height: 500px;
    top: auto;
    bottom: 0;
  }

  @media (max-width: 515px) {
    height: 325px;
    bottom: 0;
    top: auto;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

const ServiceLeftImg = styled.img`
  height: 280px;
  width: 280px;
  top: -60px;

  @media (max-width: 279px) {
    display: none;
  }
`;

const ServiceRightImg = styled.img`
  height: 230px;
  width: 230px;
  top: -48px;

  @media (max-width: 279px) {
    display: none;
  }
`;

const WorkRightImg = styled.img`
  height: 320px;
  width: 320px;
  bottom: 0;

  @media (max-width: 279px) {
    display: none;
  }
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

const DivLeft = styled.div`
  @media (max-width: 627px) {
    bottom: 38%;
  }
  @media (max-width: 400px) {
    bottom: 15%;
  }

  @media (max-width: 279px) {
    display: none;
  }
`;

export default MainPage;
