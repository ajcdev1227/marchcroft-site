interface Schema {
    title: string; // Required field
    impactStatement: string; // Required field
    statements: string[];
}

export const ServiceHighlightSection: React.FC<{ content: Schema }> = ({content}) => {

    return (
        <section className="flex flex-col mb-[95px] gap-[32px] z-10 bg-[#010101] text-white">
            <p className="font-objektivMk2 font-bold text-[48px] leading-[52px] tracking-[-1.92px]">
                {content.title}
            </p>
            <div className="flex flex-col gap-[10px] text-[16px] leading-[24px] tracking-[-0.64px]">
                <span>
                    {content.impactStatement}
                </span>
                <div className="text-white bg-black p-4 space-y-2 ml-[10px]">
                    <ul className="list-disc list-outside">
                        {
                            content.statements.map((statement: any, index: number) => (
                                <li key={index}>{statement}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

