"use client";
import { useEffect } from "react";
import { ContactUsHero } from "../components/ContactUsHero";
import { ContactFormSection } from "./ContactUs/ContactSection";
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import { TalkUs } from "../components/TalkUs";

export const ContactUsPage = () => {

    // Scroll to the top of the page when the component mounts

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <section className="flex flex-col justify-center">
            {/* SEO */}
            <Helmet>
                <meta name="description" content="Contact MarchCroft" />
                <meta name="keywords" content="contact, email, Contactus@marchcroft.com, +44 20 3286 8065" />
            </Helmet>
            {/* Background */}
            <Background className="absolute top-0 h-[545px]"  />
            {/* <section className="flex justify-center px-5 relative lg:mb-36 md:mb-36 sm:mb-24 mb-24">
                <DivLeft className="absolute bottom-0 lg:top-1/3 md:top-1/4 sm:top-1/4 left-0">
                    <div className="relative">
                        <BackgroundDivLeft className="my-auto" />
                        <BackgroundLeftImg src="/img/work/background-left.svg" alt="backgroundLeftImg" />
                    </div>                
                </DivLeft>
                <div className="absolute top-0 right-0">
                    <div className="relative">
                        <BackgroundDivRight />
                        <BackgroundRightImg src="/img/work/background-right.svg" alt="backgroundRightImg" />
                    </div>
                </div>
                <ContactUsHero />
            </section> */}
            <section className="flex flex-col justify-center relative bg-[#0D1B2A] -mt-10">
                <SectionLeftImg className='absolute top-0' />
                <SectionRightImg className='absolute bottom-1/3 right-0' />
                <section className="flex flex-col max-w-[1111px] container mx-auto mt-28">
                    {/* ContactForm Section */}
                    <ContactFormSection />
                </section>
            </section>
            <TalkUsSection className="pt-10">
                {/* TalkUs Component */}
                <TalkUs />
            </TalkUsSection>
        </section>
    );
}

//styled components

const Background = styled.div`
    background-color: #0D1B2A;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
    background-position-x: center;
`;

const TalkUsSection = styled.section`
    background: var(--linear-2, linear-gradient(123deg, #2F25A5 0%, #2934AE 14.00%, #1A5EC8 40.00%, #03A1F2 77.00%, #00ACF9 83.00%));
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
    background: linear-gradient(123deg, #2F25A5 0%, #2934AE 14.00%, #1A5EC8 40.00%, #A100A1 60.51%, #03A1F2 77.00%, #00ACF9 83.00%);
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
    background: linear-gradient(123deg, #2F25A5 0%, #2934AE 14.00%, #1A5EC8 40.00%, #A100A1 60.51%, #03A1F2 77.00%, #00ACF9 83.00%);
    filter: blur(120px);
    width: 308.239px;
    height: 150px;

    @media (max-width: 700px) {
        width: 150px;
        filter: blur(70px);
        top: -40px;
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

const SectionLeftImg = styled.div`
    width: 320px;
    height: 320px;
    flex-shrink: 0;
    border-radius: 320px;
    opacity: 0.699999988079071;
    background: var(--linear-2, linear-gradient(123deg, #2F25A5 0%, #2934AE 14.00%, #1A5EC8 40.00%, #03A1F2 77.00%, #00ACF9 83.00%));
    filter: blur(110.5px);

    @media (max-width: 699px) {
        display: none;
    }
`;

const SectionRightImg = styled.div`
    width: 320px;
    height: 320px;
    flex-shrink: 0;
    border-radius: 320px;
    opacity: 0.699999988079071;
    background: var(--linear-2, linear-gradient(123deg, #2F25A5 0%, #2934AE 14.00%, #1A5EC8 40.00%, #03A1F2 77.00%, #00ACF9 83.00%));
    filter: blur(110.5px);

    @media (max-width: 699px) {
        display: none;
    }
`;