import {PriceItem} from "@/app/components/Services/PriceItem";

interface PricingPlan {
    name: string,
    "price": number,
    "benefits": string[]
}

interface Schema {
    priceItems: PricingPlan[];
}

export const PricingPlansSection: React.FC<{ content: Schema }> = ({content}) => {
    return (
        <section className="flex flex-col gap-[64px] md:mb-[100px] p-2 text-white bg-black justify-center items-center"
                 style={{backgroundImage: "url('/img/services/careers_back.png')"}}
        >
            <div className="flex flex-col gap-5 w-[711px] items-center justify-center text-center">
                <p className="font-objective font-medium w-[520px] text-[40px] leading-[44px] tracking-[-0.04em] flex-none flex-grow-0">
                    Simple, straightfoward pricing
                </p>
                <p className="font-objective font-medium text-[16px] leading-[22px] tracking-[-0.02em] flex-none flex-grow-0">
                    Get your creative business started and running easily! Let’s help you become that dream Marchcroft
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-[60px]">
                {content.priceItems.map(
                    (priceItem, index) =>
                        <PriceItem
                            key={index}
                            priceName={priceItem.name}
                            price={priceItem.price}
                            benefits={priceItem.benefits}
                        />
                )}
            </div>
        </section>
    );
}
