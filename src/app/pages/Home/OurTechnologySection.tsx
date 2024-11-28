import cs from 'classnames';
import styled from 'styled-components';
import { TechIconCard } from "../../components/TechIconCard";
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Key } from 'react';

export const OurTechnologySection = (props: any) => {
    const { content, title, description } = props;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return (
        <section className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mt-8">
            <Fade cascade>
                <div>
                    <Title className={cs("font-objektiv-mk2 mt-10 mb-5 text-white text-left font-medium lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px]")}>{title}</Title>
                    <div className="text-white text-base text-left">{description}</div>
                </div>
                
                <div className="justify-center grid grid-cols-3 mt-10">
                    {content?.map((data: { icon: { data: { attributes: { url: string; }}} }, i: Key | null | undefined) => <TechIconCard src={baseUrl+data.icon.data.attributes.url} key={i}/>)}
                </div>
            </Fade>
           

        </section>
    );
}



const Title = styled.div`
    @media (max-width: 1023px) {
        text-align: center;
    }
`