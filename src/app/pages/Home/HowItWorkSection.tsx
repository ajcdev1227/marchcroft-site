import cs from 'classnames';
import styled from 'styled-components';

import { useNav } from "../../useHooks/useNav";
import { ContentTitle } from "../../utils/Constants";
import { WorkCard } from "../../components/WorkCard";
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Key } from 'react';

// const data = [
//     {
//         src: 'img/icons/work-problem.svg',
//         src2: 'img/icons/work-problem-hover.svg',
//         title: 'Understand your problems',
//         text: 'Our experts will develop a strategic solution, including architecture designs and mockup'
//     },
//     {
//         src: 'img/icons/work-Agile.svg',
//         src2: 'img/icons/work-agile-hover.svg',
//         title: 'Agile Work Cycle',
//         text: 'Your product is being worked on. get frequent updates during the delivery cycle'
//     },
//     {
//         src: 'img/icons/work-go.svg',
//         src2: 'img/icons/work-go-hover.svg',
//         title: 'Go live',
//         text: 'We will be there to support you even after completion day'
//     },
//     {
//         src: 'img/icons/work-success.svg',
//         src2: 'img/icons/work-success-hover.svg',
//         title: 'Success',
//         text: 'We make sure your product is top-notch and drive revenue'
//     },
// ]


export const HowItWorkSection = (props: any) => {
    const { title, description, data } = props;
    const navRef = useNav('How It Works');

    return (
        <section className="flex flex-col lg:scroll-mt-24" ref={navRef} id='HowItWorksContainer'>
            <div className="w-full">
                <Title className={cs(ContentTitle, "text-white text-left lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px]")}>{title}</Title>
                <Title className="text-base text-left text-white mb-5">{description}</Title>
            </div>
            <Fade cascade>
                <CardDiv className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 justify-center gap-3 flex-wrap ">
                    {data?.map((data: {
                        description: string;
                        imgHover: string;
                        img: string; src: string; src2: string; title: string; text: string; 
}, i: number) =>
                        <div key={i} className='flex justify-center lg:col-span-1 md:col-span-2 sm:col-span-1'>
                            <WorkCard src={`https://marchcroft.com${data.img}`} src2={`https://marchcroft.com${data.imgHover}`} title={data.title} text={data.description} index={i} />
                        </div>
                    )}
                </CardDiv>
            </Fade>

        </section>
    );
}

const Title = styled.div`
    @media (max-width: 795px) {
        text-align: center;
    }
`;

const CardDiv = styled.div`

`