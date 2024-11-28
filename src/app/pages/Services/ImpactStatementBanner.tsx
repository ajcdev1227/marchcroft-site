interface Schema {
    title: string; // Required field
    text: string; // Required field
}

export const ImpactStatementBanner: React.FC<{ content: Schema }> = ({content}) => {
    return (
        <section className="flex flex-row mb-[95px] gap-[20px] z-10 bg-[#010101] text-white justify-end">
            <div className="flex flex-col gap-[20px] max-w-[790px] items-start">
                <span className="font-objektivMk2 font-bold text-[48px] leading-[52px] tracking-[-1.92px]">
                    {content?.title}
                </span>
                <span className="font-objektivMk2 font-normal text-[16px] leading-[24px] tracking-[-0.64px]">
                    {content?.text}
                </span>
            </div>
        </section>
    );
}

