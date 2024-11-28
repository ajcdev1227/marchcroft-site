interface Statement {
    title: string,
    text: string
}

interface Schema {
    statements: Statement[];
}

export const ImpactMetricsModule: React.FC<{ content: Schema }> = ({content}) => {

    return (
        <section className="flex flex-col mb-[95px] z-10 bg-[#010101] text-white">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-[56px]">
                {content.statements.map((statement: Statement, index) => (
                    <div className="flex flex-col gap-[8px]" key={index}>
                        <p className="font-objektivMk2 font-bold text-[48px] leading-[43px] tracking-[-1.92px]">
                            {statement.title}
                        </p>
                        <p className="font-objektivMk2 font-medium text-[16px] leading-[25px] tracking-[-0.64px]">
                            {statement.text}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}

