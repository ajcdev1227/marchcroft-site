import {QAItem} from "@/app/components/Services/QAItem";

interface QA {
    question: string; // Required field
    answer: string; // Required field
}

interface Schema {
    title: string; // Required field
    description: string; // Required field
    qaList: QA[];
}

export const CommonQuestionsModule: React.FC<{ content: Schema }> = ({content}) => {

    return (
        <section className="flex flex-col mb-[95px] gap-[32px] z-10 bg-[#010101] text-white">
            <span className="font-objektivMk2 font-bold text-[48px] leading-[52px] tracking-[-1.92px]">
                {content.title}
            </span>
            <div className="flex text-[16px] leading-[24px] tracking-[-0.64px]">
                {content.description}
            </div>
            <div className="flex flex-col gap-[15px] z-10 bg-[#010101] text-white leading-[24px] tracking-[-0.64px] text-[16px]">
                {content.qaList.map((qAItem, index) => (
                    <QAItem
                        key={index}
                        question={qAItem.question}
                        answer={qAItem.answer}
                    />
                ))}
            </div>
        </section>
    );
}

