import {StacksItem} from "@/app/components/Services/StacksItem"

interface Capability {
    "title": string,
    description: string,
    text: string,
    src: string,
    "url": string
}

interface Schema {
    capabilities1: Capability[],
    capabilities2: Capability[]
}

export const CapabilitiesGrid: React.FC<{ content: Schema }> = ({content}) => {
    return (
        <section className="flex flex-col md:mb-[85px] p-2 text-white bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col gap-[22px] m-0 p-0">
                    {content.capabilities1.map(
                        (capability, index) =>
                            <StacksItem
                                key={index}
                                title={capability.title}
                                description={capability.description}
                                text={capability.text}
                                src={capability.src}
                                url={capability.url}
                            />
                    )}
                </div>
                <div className="flex flex-col gap-[22px] m-0 p-0">
                    {content.capabilities2.map(
                        (capability, index) =>
                            <StacksItem
                                key={index}
                                title={capability.title}
                                description={capability.description}
                                text={capability.text}
                                src={capability.src}
                                url={capability.url}
                            />
                    )}
                </div>
            </div>
        </section>
    );
}
