export const BlogItem = (props: any) => {
    const {title, username, src, date, tags, url} = props;
    const isValidUsername = username && username.trim() !== "";
    return (
        <div className="flex flex-col gap-[16px] p-0 pt-4">
            {src && <img src={src} alt="Blog Image" className="w-full object-cover rounded-md"/>}
            {isValidUsername
                ? (<p className="font-inter font-medium text-[16px] leading-[19.36px]">{username} - {date}</p>)
                : (<p className="font-inter font-medium text-[16px] leading-[19.36px]">{date}</p>)}
            <p className="font-objective font-medium text-[20px] leading-[20.76px]">{title}</p>
            <div className="flex flex-row gap-1 text-center">
                {tags.map((tag: string, index: bigint) => (
                    <p className="bg-white py-[2px] px-[9px] text-black border border-gray-300 rounded-[6px] text-[14px]" key={index}>{tag}</p>
                ))}
            </div>
            <a href={url} className="md:flex hidden w-[166px] bg-transparent p-[10px] gap-[10px] border border-white rounded-[29px] text-[16px] justify-center">Read more</a>
        </div>
    );
}
