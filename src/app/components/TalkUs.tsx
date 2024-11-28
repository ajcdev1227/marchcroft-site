import { Button, Divider } from "@mui/material";
import { MParagraph, MTitle } from "./Text";
import { useTranslation } from "react-i18next";

export const TalkUs = (props: any) => {
    const { title, description, buttonText} = props;

    return (
        <div className="w-full pt-10">
            <MTitle className="text-primary-800 capitalize text-center mx-auto lg:text-[40px] md:text-[30px] sm:text-[30px] text-[30px]">{title}</MTitle>
            <MParagraph className="text-white text-center text-base mx-auto px-5">{description}</MParagraph>
            <div className="flex justify-center mt-5  mb-20 lg:mb-24">
                <Button href="/contactus" sx={ctaButtonCss} >{buttonText}</Button>
            </div>
            <Divider variant="fullWidth" sx={{background: 'white', width: '100%'}} />
        </div>
    )
}

const ctaButtonCss: Object = {
    border: '1px solid #FFFFFF;',
    padding: '0px 20px',
    height: '50px',
    color: 'white',
    borderRadius: '29px',
    display: 'inline-block',
    fontSize:'1rem',
    fontFamily: 'objektiv-mk2',
    lineHeight: '47px',
    gap: '10px',
    textTransform: 'capitalize',
    fontWeight: '500',
    textAlign: 'center',
    '&:hover': {
        color: '#1976d2',
        background: 'white'
    }
};