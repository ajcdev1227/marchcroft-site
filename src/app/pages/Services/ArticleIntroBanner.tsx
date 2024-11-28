import {Fade} from "react-awesome-reveal";
import {MParagraph} from "@/app/components/Text";

interface ArticleSchema {
    title: string; // Required field
    dateTime: string; // Required field
    duration: number; // Required field
}

export const ArticleIntroBanner: React.FC<{ content: ArticleSchema }> = ({content}) => {
    return (
        <section className="flex flex-col justify-center bg-[#010101] pb-[36px] mb-[37px] max-w-[1113px] pl-[94.25px] pr-[91.75px] gap-[30px]">
            <span className="text-primary-800 mt-[88px] lg:text-[73px] md:text-[45px] sm:text-[36px] text-[36px] capitalize mx-auto max-w-[1111px] font-bold font-objektiv-mk2 tracking-[-2.92px]">
                {content?.title}
            </span>
            <div className="flex flex-row items-start justify-start gap-[16px]">
                <MParagraph className="text-white text-[16px]">
                    {`${content?.duration} MINUTE READ`}
                </MParagraph>
                <MParagraph className="text-white text-[16px]">
                    {/* Use date formatter */}
                    {content?.dateTime}
                </MParagraph>
            </div>
        </section>
    );
};

export default ArticleIntroBanner;
