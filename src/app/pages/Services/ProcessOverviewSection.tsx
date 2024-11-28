import {DeetItem} from "@/app/components/Services/DeetItem";

interface Deet {
    title: string,
    text: string
}

interface Schema {
    deets: Deet[]
}

export const ProcessOverviewSection: React.FC<{ content: Schema }> = ({content}) => {

    return (
        <section className="flex flex-col mb-[95px] gap-[20px] z-10 bg-[#010101] text-white">

            {content.deets.map((deet, index) => (
                <DeetItem
                    key={index}
                    title={deet.title}
                    content={deet.text}/>
            ))}

        </section>
    );
}

