"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { TalkUs } from "../../components/TalkUs";
import { AppDispatch, RootState } from "@/store";
import { useLocale } from "@/app/utils/Constants";
import { fetchContent, selectServices, selectTalkToUsSection } from "@/store/contentSlice";
import { HeroSection1 } from "@/app/pages/Services/HeroSection1"
import { ValuePropositionBanner } from "@/app/pages/Services/ValuePropositionBanner"
import { ImpactStatementBanner } from "@/app/pages/Services/ImpactStatementBanner"
import { ClientSuccessStoryModule } from "@/app/pages/Services/ClientSuccessStoryModule"
import { CommonQuestionsModule } from "@/app/pages/Services/CommonQuestionsModule"
import { TechnologyAlliancesBanner } from "@/app/pages/Services/TechnologyAlliancesBanner"
import { ImpactMetricsModule } from "@/app/pages/Services/ImpactMetricsModule"
import { ProcessOverviewSection } from "@/app/pages/Services/ProcessOverviewSection"
import { CareersCallToActionSection } from "@/app/pages/Careers/CareersCallToActionSection";
import { LatestBlogPostsSection } from "@/app/pages/Services/LatestBlogPostsSection";
import { ResourceDownloadSection } from "@/app/pages/Services/ResourceDownloadSection";
import { TrustedBySection } from "@/app/pages/Services/TrustedBySection";
import { PricingPlansSection } from "@/app/pages/Services/PricingPlansSection";
import { CapabilitiesGrid } from "@/app/pages/Services/CapabilitiesGrid";
import { ImpactStatisticsModule } from "@/app/pages/Services/ImpactStatisticsModule";
import { TechStackShowcase } from "@/app/pages/Services/TechStackShowcase";
import { TrendingWorksSection } from "@/app/pages/Services/TrendingWorksSection";
import { ServiceHighlightSection } from "@/app/pages/Services/ServiceHighlightSection";
import { VideoTestimonialSection } from "@/app/pages/Services/VideoTestimonialSection";

const ServicesPage = () => {
    const dispatch: AppDispatch = useDispatch(); // Dispatch from Redux
    const locale = useLocale();
    const talkToUs = useSelector(selectTalkToUsSection);

    useEffect(() => {
        dispatch(fetchContent(locale)); // Fetch content from Redux
    }, [locale, dispatch]);


    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    return (
        <section className="flex flex-col justify-center bg-[#010101]">
            <Background className="absolute top-0 h-[100px]" />
            <HeroSection1 />
            <section className="flex flex-col justify-center max-w-[1111px] mx-auto">
                {/* <BriefSection/> */}
                {/* Value Proposition Banner */}
                {/*<ValuePropositionBanner/>*/}
                {/* impactStatementBanner */}
                {/*<ImpactStatementBanner/>*/}
                {/* clientSuccessStoryModule */}
                {/*<ClientSuccessStoryModule/>*/}
                {/* commonQuestionsModule */}
                {/*<CommonQuestionsModule/>*/}
                {/* technologyAlliancesBanner */}
                {/*<TechnologyAlliancesBanner/>*/}
                {/* serviceHighlightSection */}
                {/*<ServiceHighlightSection/>*/}
                {/* impactMetricsModule */}
                {/*<ImpactMetricsModule/>*/}
                {/* processOverviewSection */}
                {/*<ProcessOverviewSection/>*/}
                {/* impactStatisticsModule */}
                {/*<ImpactStatisticsModule/>*/}
                {/* capabilitiesGrid */}
                {/*<CapabilitiesGrid/>*/}
                {/* trendingWorksSection */}
                {/*<TrendingWorksSection/>*/}
                {/* trustedBySection */}
                <TrustedBySection/>
                {/* latestBlogPostsSection */}
                {/*<LatestBlogPostsSection/>*/}
                {/* techStackShowcase */}
                <TechStackShowcase/>
                {/* careersCallToActionSection */}
                {/*<CareersCallToActionSection/>*/}
                {/* pricingPlansSection */}
                {/*<PricingPlansSection/>*/}
                {/* videoTestimonialSection */}
                <VideoTestimonialSection/>
                {/* resourceDownloadSection */}
                <ResourceDownloadSection/>
            </section>
            <TalkUsSection className="z-10 p-10">
                <TalkUs title={talkToUs?.title} description={talkToUs?.description} buttonText="Consult with us" />
            </TalkUsSection>
        </section>
    );
};


//styled components

const Background = styled.div`
    background-color: #010101;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
    background-position-x: center;
    position: fixed;
`;

const TalkUsSection = styled.section`
    background: linear-gradient(
            123deg,
            #2f25a5 0%,
            #2934ae 14%,
            #1a5ec8 40%,
            #03a1f2 77%,
            #00acf9 83%
    );
`;

export default ServicesPage;
