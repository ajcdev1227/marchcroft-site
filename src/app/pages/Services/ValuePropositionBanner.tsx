interface Schema {
    title: string; // Required field
    text: string; // Required field
}
export const ValuePropositionBanner: React.FC<{ content: Schema }> = ({ content }) => {
    return (
        <section className="flex flex-col mb-[95px] gap-[20px] z-10 bg-[#010101] text-white items-start max-w-[702px]">
            <span className="font-objektivMk2 font-bold text-[48px] leading-[52px] self-stretch">
                {content?.title}
            </span>
            <p className="font-objektivMk2 font-medium text-[16px] leading-[24px]">
                {content?.text}
            </p>
        </section>
    );
}

