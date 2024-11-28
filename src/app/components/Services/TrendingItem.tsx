export const TrendingItem = (props: any) => {
    const {title, text, src} = props;
    return (
        <div className="flex flex-col gap-5 p-0 bg-[#161714] pt-4 text-center md:text-left">
            <p className="mt-4 pl-4 font-objective font-medium text-[16px] leading-[5.85px]">
                {title}
            </p>
            <p className="pl-4 pb-4 font-objective font-medium text-[32px] leading-[40px] tracking-[-0.04em]">
                {text}
            </p>

            {src && <img src={src} alt="Trending Image" className="w-full object-cover"/>}
        </div>
    );
}
