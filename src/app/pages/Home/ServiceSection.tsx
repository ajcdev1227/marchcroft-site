import cs from 'classnames';
import { ServiceCard } from "../../components/ServiceCard";
import { useNav } from "../../useHooks/useNav";
import { ContentTitle } from "../../utils/Constants";
import { Key } from 'react';

// ServiceCard Data
export const ServiceSection = (props: any) => {
    // Using the useNav hook to get a reference for navigation
    const { content, title, description } = props;
    const navRef = useNav('Services');

    return (
        <section className="flex flex-col lg:scroll-mt-24 mt-3" ref={navRef} id='ServiceContainer'>
            <div className="mb-16">
                <div className={cs(ContentTitle, "text-white text-center lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px]")}>{title}</div>
                <div className="text-base text-center text-white mb-5">{description}</div>
                <div className="flex flex-col mb-16 lg:px-32 md:px-28 mx-auto">
                    {/* Mapping over the data array to create ServiceCard components */}
                    {content?.map((data: { title: string; text: string; }, i: Key | null | undefined) => <ServiceCard title={data.title} content={data.text} key={i} />)}
                </div>
            </div>
        </section>
    );
}

