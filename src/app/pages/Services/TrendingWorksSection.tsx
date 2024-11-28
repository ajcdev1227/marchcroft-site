import {TrendingItem} from "@/app/components/Services/TrendingItem"

interface TrendingContent {
    title: string,
    text: string,
    src: string,
}

interface Schema {
    trendingContents: TrendingContent[];
}

export const TrendingWorksSection: React.FC<{ content: Schema }> = ({content}) => {

    return (
        <section className="flex flex-col md:mb-[95px] gap-10 p-2 text-white bg-black">
            <div className="flex flex-col md:flex-row gap-1 justify-between">
                <p className="font-objective font-medium md:text-[48px] text-[30px] leading-[60px] tracking-[-0.04em] flex-none flex-grow-0">
                    Whats Trending
                </p>
                <div className="max-w-96 flex items-center">
                    <a className="text-[20px] leading-[30px] underline decoration-gray-400" href="">View all our works</a>
                </div>
            </div>
            <div className="items-start grid grid-cols-1  md:grid-cols-4 p-0 gap-[32px] self-stretch flex-grow-0">
                {content.trendingContents.map((trendingContent, index) => (
                    <TrendingItem
                        key={index}
                        title={trendingContent.title}
                        text={trendingContent.text}
                        src={trendingContent.src}
                    />
                ))}
            </div>
        </section>
    );
}
