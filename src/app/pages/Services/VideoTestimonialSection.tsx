export const VideoTestimonialSection = (data: any) => {

    return (
        <section className="flex flex-col gap-[50px] md:mb-[100px] md:pb-[51.5px] p-2 justify-center bg-black text-white items-center">
            <p className="font-objective font-medium md:mt-[51.5px] md:text-[40px] text-[30px] leading-[41.25px] w-[395px] tracking-[-0.04em] text-center">
                Still Unsure? Watch the video below
            </p>
            <video controls className="rounded-md" width="913" height="456">
                <source src={data.src} type={data.type}/>
                Your browser does not support the video tag.
            </video>
        </section>
    );
}
