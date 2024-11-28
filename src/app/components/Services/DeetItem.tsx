export const DeetItem = (props: any) => {
    const {title, content} = props;
    return (
        <div className="flex flex-col gap-[12px] pb-[12px] border-b-[2px] border-[#999999]">
            <p className="font-objektivMk2 font-bold text-[48px] leading-[43px] tracking-[-1.92px]">
                {title}
            </p>
            <p
                className="font-objektivMk2 font-normal text-[16px] leading-[24px] tracking-[-0.64px]"
                dangerouslySetInnerHTML={{__html: content}}
            ></p>
        </div>
    );
}
