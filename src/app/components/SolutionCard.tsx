import { useTranslation } from 'react-i18next';
import styled from 'styled-components'


export const SolutionCard = ({src, title, text}: {src: string, title: string, text: string}) => {

    return (
        <Card className="flex border-2 bg-[#F4F5FB] rounded-xl">
            <div className="flex justify-center flex-col w-full p-4">
                <div className='pb-4'>
                    <Img className="flex w-[28px] h-[20px]" src={src} alt="solutionIcon" />
                </div>
                <Paragraph className="text-xl font-bold font-objektiv-mk2">{title}</Paragraph>
                <Paragraph className="mt-1 text-base font-normal font-objektiv-mk2">{text}</Paragraph>
            </div>
        </Card>
    );
}

const Card = styled.div`
    @media (max-width: 768px) and (min-width: 724px) {
        width: 330px;
    }

    @media (max-width: 723px) and (min-width: 383px) {
        margin-left: auto;
        margin-right: auto;
        width: 342px;
        height: 193px;
    }

    @media (max-width: 382px) {
        margin-left: auto;
        margin-right: auto;
        width: 250px;
        height: 240px
    }
`;

const Img = styled.img`
    @media (max-width: 723px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

const Paragraph = styled.div`
    @media (max-width: 723px) {
        text-align: center;
    }
`;
