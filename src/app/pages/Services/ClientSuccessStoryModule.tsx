interface Schema {
    title: string; // Required field
    impactStatement: string; // Required field
    statements: string[];
    outcomeStatement: string; // Required field
    feedbackStatement: string;
    feedbackProvider: string;
}
export const ClientSuccessStoryModule: React.FC<{ content: Schema }> = ({ content }) => {
    const statements = content?.statements;
    return (
        <section className="flex flex-col mb-[95px] gap-[32px] z-10 bg-[#010101] text-white">
            <span className="font-objektivMk2 font-bold text-[48px] leading-[52px] tracking-[-1.92px]">
                {`Success Story: ${content.title}`}
            </span>
            <div className="flex flex-col gap-[10px] text-[16px] leading-[24px] tracking-[-0.64px]">
                <p>{content.impactStatement}</p>
                <div className="text-white bg-black p-4 space-y-2">
                    <ul className="list-disc list-inside">
                        {statements.length > 0 &&
                            statements.map((statement, index) => {
                                return <li>{statement}</li>
                            })}
                    </ul>
                </div>
                <p>{content?.outcomeStatement}</p>
            </div>
            <div className="mr-[40px] p-[10px] gap-[10px] rounded-[8px] bg-[#2B2B2B]">
                <div className="flex flex-row gap-[17px]">
                    <div className="w-[3px] h-[26px] rounded-[10px] bg-[#1A40A9]"></div>
                    <p className="font-objektivMk2 italic text-[16px] leading-[24px]">
                        {`"${content?.feedbackStatement}" - ${content?.feedbackProvider}`}
                    </p>
                </div>
            </div>
        </section>
    );
}



