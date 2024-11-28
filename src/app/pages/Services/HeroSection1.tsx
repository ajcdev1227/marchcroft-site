import {MParagraph} from "@/app/components/Text";

export const HeroSection1 = ({data}: any) => {
    return (
        <section className="flex justify-center px-5 z-10 relative bg-[#010101] pb-[100px]">
            <section className="flex max-w-screen-2xl lg:px-14">
                <div className="h-1/3 w-full flex flex-col gap-[16px]">
                    <div>
                        <p className="text-primary-800 mt-20 mb-5 lg:text-[73px] md:text-[45px] sm:text-[36px] text-[36px] capitalize mx-auto max-w-[1111px] font-bold font-objektiv-mk2">
                            {data?.title || "Transforming Businesses Through Technology"}
                        </p>
                    </div>
                    <div className="flex flex-row gap-[16px]">
                        <div>
                            <MParagraph className="text-white text-[16px] mx-auto">
                                10 MINUTE READ
                            </MParagraph>
                        </div>
                        <div>
                            <MParagraph className="text-white text-[16px] mx-auto">
                                JANUARY 11, 2024
                            </MParagraph>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default HeroSection1;
