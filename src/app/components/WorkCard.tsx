import styled from 'styled-components'
import cs from 'classnames'
import { useState } from 'react'

export const WorkCard = ({src,src2, title, text, index}: {src: string, src2: string, title: string, text: string, index: number}) => {
    const [hovered, setHovered] = useState(false)
    
    const handleMouseOver = () => {
        setHovered(true)
    }

    const handleMouseOut = () => {
        setHovered(false)
    }

    return (
        <Card className="flex rounded-xl mt-4 hover:cursor-pointer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="w-full p-2">
                <div className='p-3 h-[100px] mb-10'>
                    <Img className={cs("flex" )} src={hovered ? src2 : src}  style={{marginTop: hovered ? '8px' : '1.25rem'}} alt="img" />
                </div>
                <div className={cs("text-xl font-bold text-white text-center font-objektiv-mk2 mt-10" )}>{title}</div>
                <div className="mt-1 text-base font-normal text-white text-center font-objektiv-mk2">{text}</div>
            </div>
        </Card>
    );
}

const Card = styled.div`
    background: rgba(217, 217, 217, 0.08);
    @media (max-width: 767px) and (min-width: 360px) {
        width: 342px;
    }

    @media (max-width: 359px) {
        width: '100%'
    }
`;

const Img = styled.img`
    margin-Left: auto;
    margin-right: auto;
`;

