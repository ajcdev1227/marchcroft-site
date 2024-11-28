import { Button, capitalize } from "@mui/material";
import Link from 'next/link';
import { useTranslation } from "react-i18next";

type CTAButtonProps = {
    id: string;
    text: string;
    href: string; // Using href for next/link navigation
}

export const CTAButton = ({ id, text, href }: CTAButtonProps) => {
    const { t, i18n } = useTranslation();
    return (

        <Button id={id} sx={ctaButtonCss} style={{ width: i18n.language === 'gr' ? '200px' : '125px' }} variant="outlined">
            <Link href={href} passHref>
                {/* Use passHref to ensure the link passes the href down to the Button */}
                {t(text)}
             </Link>
        </Button>
    );
}

const ctaButtonCss = {
    margin: 'auto 0',
    padding: '0px 10px',
    maxWidth: '200px',
    color: 'black',
    borderRadius: '29px',
    background: '#FFFFFF',
    display: 'flex',
    fontSize: '15px',
    fontFamily: 'objektiv-mk2',
    fontStyle: 'normal',
    lineHeight: '40px',
    textTransform: 'capitalize',
    textAlign: 'center',
    '&:hover': {
        color: '#1976d2',
        background: 'transparent',
    }
};
