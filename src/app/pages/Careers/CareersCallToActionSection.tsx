"use client"
import {CareersCard} from "../../components/CareersCard";
import {MTitle} from "../../components/Text";


export const CareersCallToActionSection: React.FC<{ content: any, title?: string }> = ({content, title}) => {
    if (!content)
        return (<></>);

    return (
        <section className='flex flex-col md:mb-[100px]'>
            {/* Title */}
            <MTitle className='text-[20px] text-[#1A40A9]'>
                {content?.length} {title || "Open roles"}
            </MTitle>
            {/* CareersCard Component */}

            {content && content.length > 0 &&
                content.map((e: any, index: number) => (
                    <CareersCard
                        key={index}
                        title={e.attributes.career.title}
                        name={e.attributes.career.name}
                        salary={e.attributes.career.salary}
                        content={e.attributes.career.content}
                    />
                ))
            }
        </section>
    );
};
