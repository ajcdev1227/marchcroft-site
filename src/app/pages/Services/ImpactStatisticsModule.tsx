import {MetricItem} from "@/app/components/Services/MetricItem"

interface ServiceStatsItem {
    title: string,
    subTitle: string,
    text: string,
}

interface Schema {
    serviceStatsItems: ServiceStatsItem[];
}

export const ImpactStatisticsModule: React.FC<{ content: Schema }> = ({content}) => {

    return (
        <section className="flex flex-col md:mb-[95px] p-2 text-white bg-black md:gap-[96px] gap-[42px]">
            <div className="flex flex-col gap-[12px]">
                <p className="h-[24px] font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.04em]">
                    At Marchcroft
                </p>
                <div className="flex flex-col md:flex-row gap-[23px] justify-between">
                    <p className="font-objective font-medium md:text-[48px] text-[30px] leading-[60px] tracking-[-0.04em] text-white flex-none order-0 flex-grow-0">
                        Innovating Today,<br/>
                        Shaping Tomorrow
                    </p>
                    <div className="max-w-[303px] font-objektivMk2 text-[20px] font-normal leading-[30px] tracking-[-0.8px]">
                        At Marchcroft, we don't just meet expectations - we exceed them.
                    </div>
                </div>
            </div>
            <div className="items-start grid grid-cols-1  md:grid-cols-4 p-0 gap-[32px] self-stretch flex-grow-0">
                {content.serviceStatsItems.map(
                    (serviceStatsItem, index) => (
                        <MetricItem
                            key={index}
                            title={serviceStatsItem.title}
                            subTitle={serviceStatsItem.subTitle}
                            text={serviceStatsItem.text}/>
                    ))
                }
            </div>
        </section>
    );
}
