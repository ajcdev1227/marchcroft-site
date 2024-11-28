import styled from "styled-components";

export const CareersSection = () => {

    return (
        <section className="flex flex-col gap-5 md:p-20 p-2 py-20 text-white bg-black justify-center text-center items-center"
                 style={{backgroundImage: "url('/img/services/careers_back.png')"}}
        >
            <p className="font-objective font-medium text-[40px] leading-[44px] tracking-[-0.04em] flex-none flex-grow-0">
                Careers
            </p>
            <p className="font-objective font-medium text-[16px] leading-[22px] tracking-[-0.02em] flex-none flex-grow-0">
                Check our jobs and grow your career
            </p>
            <a className="w-[100px] bg-transparent p-[10px] gap-[10px] border border-white rounded-[29px] text-[16px]">Join Us</a>
        </section>
    );
}
