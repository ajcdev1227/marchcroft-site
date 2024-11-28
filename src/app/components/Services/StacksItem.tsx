export const StacksItem = (props: any) => {
    const {title, text, description, src, url} = props;
    return (
        <div className="flex flex-col gap-[10px] px-[17px] py-[19px] bg-[#2B2B2B] rounded-lg">
            <p className="font-objective font-medium text-[20px] leading-[40px] tracking-[-0.04em] flex-none flex-grow-0">
                {title}
            </p>
            <p className="font-objective font-medium text-[32px] leading-[40px] tracking-[-0.04em] flex-none flex-grow-0">
                {description}
            </p>
            <p className="font-objective font-normal text-[16px] leading-[24px] tracking-[-0.04em] flex-none flex-grow-0">
                {text}
            </p>

            {src && <img src={src} alt="Consultation Image" className="w-full rounded-md object-cover"/>}
            <a href={url} className="underline decoration-gray-400">Find out more</a>
        </div>
    );
}
