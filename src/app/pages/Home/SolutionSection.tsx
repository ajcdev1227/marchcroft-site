import { SolutionCard } from "../../components/SolutionCard";
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";
import { Key } from "react";

export const SolutionSection = (props: any) => {

    const { content, title, description } = props;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return (
        <section className="flex flex-col max-w-[1111px]" id="solutionSection">
            <div className="text-center md:text-[30px] lg:text-[40px] sm:text-[30px] font-objektiv-mk2 text-[30px] font-medium mb-5">{title}</div>
            <div className="text-center font-normal text-base mb-5">{description}</div>
            <Fade cascade delay={5}>
                <SolutionDiv className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-5 justify-center gap-3">
                    {content?.map((data: { icon: { data: {attributes: { url: string}}}; text: string; title: string; }, i: Key | null | undefined) => 
                        <SolutionCard src={baseUrl+data.icon.data.attributes.url} text={data.text} title={data.title} key={i} />
                    )}
                </SolutionDiv>
            </Fade>
            
        </section>
    );
}

const SolutionDiv = styled.div`
    
 


`