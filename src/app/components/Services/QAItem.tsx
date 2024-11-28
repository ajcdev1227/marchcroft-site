export const QAItem = (props: any) => {
    const {question, answer} = props;
    return (
        <div className="flex flex-col gap-[10px]">
            <p className="font-bold">
                Q: {question}
            </p>
            <div
                className="answer italic font-medium"
                dangerouslySetInnerHTML={{__html: answer}}
            />
        </div>
    );
}
