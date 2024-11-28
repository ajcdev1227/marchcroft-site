"use client"
import styled from "styled-components";

export const MetricItem = (props: any) => {
    const {title, subTitle, text} = props;
    return (
        <div className="flex flex-col gap-2 p-0 items-start">
            <StatsTitle className="lg:text-[60px] text-[40px]">
                {title}
            </StatsTitle>
            <p className="gap-0 font-objective font-medium lg:text-[18px] md:text-[12px] leading-[28px] tracking-[-0.04em] flex-none order-0 self-stretch flex-grow-0">
                {subTitle}
            </p>
            <p className="font-objective font-normal lg:text-[16px] md:text-[10px] leading-[24px] tracking-[-0.04em] flex-none order-1 self-stretch flex-grow-0">
                {text}
            </p>
        </div>
    );
}

const StatsTitle = styled.p`
    font-family: 'Objective','Objektiv-Mk2', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 72px;
    letter-spacing: -0.04em;
    background: linear-gradient(
            122.96deg, 
            #2F25A5 7.74%, 
            #2934AE 22.52%, 
            #1A5EC8 49.96%, 
            #A200A2 71.61%, 
            #03A1F2 89.02%, 
            #00ACF9 95.36%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;
