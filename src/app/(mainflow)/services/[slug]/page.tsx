import {CareersCallToActionSection} from "@/app/pages/Careers/CareersCallToActionSection";
import {CapabilitiesGrid} from "@/app/pages/Services/CapabilitiesGrid";
import {ImpactStatisticsModule} from "@/app/pages/Services/ImpactStatisticsModule";
import {LatestBlogPostsSection} from "@/app/pages/Services/LatestBlogPostsSection";
import {PricingPlansSection} from "@/app/pages/Services/PricingPlansSection";
import {ResourceDownloadSection} from "@/app/pages/Services/ResourceDownloadSection";
import {TechStackShowcase} from "@/app/pages/Services/TechStackShowcase";
import {TrendingWorksSection} from "@/app/pages/Services/TrendingWorksSection";
import {TrustedBySection} from "@/app/pages/Services/TrustedBySection";
import {VideoTestimonialSection} from "@/app/pages/Services/VideoTestimonialSection";
import {ArticleIntroBanner} from "@/app/pages/Services/ArticleIntroBanner";
import {ClientSuccessStoryModule} from "@/app/pages/Services/ClientSuccessStoryModule";
import {CommonQuestionsModule} from "@/app/pages/Services/CommonQuestionsModule";
import {ImpactMetricsModule} from "@/app/pages/Services/ImpactMetricsModule";
import {ImpactStatementBanner} from "@/app/pages/Services/ImpactStatementBanner";
import {KeyHighlightsModule} from "@/app/pages/Services/KeyHighlightsModule";
import {ProcessOverviewSection} from "@/app/pages/Services/ProcessOverviewSection";
import {ServiceHighlightSection} from "@/app/pages/Services/ServiceHighlightSection";
import {TechnologyAlliancesBanner} from "@/app/pages/Services/TechnologyAlliancesBanner";
import {ValuePropositionBanner} from "@/app/pages/Services/ValuePropositionBanner";
import {Metadata} from "next";
import React from "react";

interface ServiceData {
    type?: string;
    content?: any; // Adjust this type to match the structure of your content
}

const ComponentDictionary: { [key: string]: React.FC<{ content: any }> } = {
    articleIntroBanner: ArticleIntroBanner,
    keyHighlightsModule: KeyHighlightsModule,
    valuePropositionBanner: ValuePropositionBanner,
    impactStatementBanner: ImpactStatementBanner,
    clientSuccessStoryModule: ClientSuccessStoryModule,
    commonQuestionsModule: CommonQuestionsModule,
    technologyAlliancesBanner: TechnologyAlliancesBanner,
    serviceHighlightSection: ServiceHighlightSection,
    impactMetricsModule: ImpactMetricsModule,
    processOverviewSection: ProcessOverviewSection,
    // downloadButton: DownloadButton,
    impactStatisticsModule: ImpactStatisticsModule,
    trendingWorksSection: TrendingWorksSection,
    capabilitiesGrid: CapabilitiesGrid,
    trustedBySection: TrustedBySection,
    latestBlogPostsSection: LatestBlogPostsSection,
    techStackShowcase: TechStackShowcase,
    careersCallToActionSection: CareersCallToActionSection,
    pricingPlansSection: PricingPlansSection,
    videoTestimonialSection: VideoTestimonialSection,
    resourceDownloadSection: ResourceDownloadSection,
};

async function fetchServiceData(slug: string) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    console.log('slug: ', slug);
    const res = await fetch(
        `${baseUrl}/api/services?filters[slug]=${slug}&populate=images&populate=serviceContent`,
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            cache: "no-store",
        }
    );


    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const {data} = await res.json();
    return data[0]?.attributes?.serviceContent || {}; // Returns an object, not an array
}

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const fetchServiceDataObj = await fetchServiceData(params.slug);
    const serviceData: ServiceData[] = Array.isArray(fetchServiceDataObj) ? fetchServiceDataObj : [];

    return {
        // Add metadata properties as needed
    };
}

const ServicePage = async ({params}: { params: { slug: string } }) => {
    const fetchServiceDataObj = await fetchServiceData(params.slug);
    const serviceData: ServiceData[] = Array.isArray(fetchServiceDataObj) ? fetchServiceDataObj : [];

    return (
        <section className="flex flex-col justify-center bg-[#010101] w-full items-center">
            {serviceData.length > 0 &&
                serviceData.map((data, index) => {
                    // Log the data for debugging
                    console.log('Fetched data:', data);

                    // Check if the component type exists in the dictionary
                    const Component = data.type && ComponentDictionary[data.type] ? ComponentDictionary[data.type] : null;

                    if (!Component) {
                        // Handle missing or undefined type
                        console.error(`No valid component found for type: ${data.type}`);
                        return null; // Or render a fallback component
                    }

                    return data.type == 'articleIntroBanner' ? <Component key={index} content={data.content}/> :
                        <section className="flex flex-col justify-center max-w-[1113px] pl-[93px] pr-[97px] w-full">
                            <Component key={index} content={data.content}/>
                        </section>;

                })}
        </section>
    );
};

export default ServicePage;
