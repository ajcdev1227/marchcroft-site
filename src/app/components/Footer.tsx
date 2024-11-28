import { MParagraph, MTitle } from "./Text";
import styled from 'styled-components';
import { Button, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation();

    return (
        <FooterSection className="py-5" id="footerSection">
            
            <div className="flex flex-wrap justify-between py-5 container mx-auto">
                <div className="py-5">
                    <a href="/" className="h-[31px]">
                        <img className="my-auto" src='/img/Marchcroft-Logo.svg' alt="logo" />
                    </a>
                    
                    <div className="flex mt-5">
                        {/* <p className="text-white text-[14px] font-objektiv-mk2 mr-3">{t("Compliance services")}</p>
                        <img src="/img/newPage.svg" alt="newPage" /> */}
                    </div>
                    <div>
                        <a href="/privacy" className="text-white text-[14px] font-objektiv-mk2 mt-3">
                            {t("Privacy")}
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href="/termsofservice" className="text-white text-[14px] font-objektiv-mk2 mt-3">
                            {t("Terms of service")}
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-white text-base font-objektiv-mk2 font-bold">{t("Get In Touch")}</p>
                    <div className="flex mt-5">
                        <img src="/img/phone.png" alt="phone" />
                        <p className="text-white text-[14px] font-objektiv-mk2 ml-2">+44 20 3286 8065</p>
                    </div>
                    <div className="flex mt-3">
                        <img src="/img/mail.png" alt="mail" />
                        <a 
                            href="mailto:contactus@marchcroft.com" 
                            className="text-white text-[14px] font-objektiv-mk2 ml-2"
                        >
                            contactus@marchcroft.com
                        </a>
                    </div>
                </div>
            </div>
        </FooterSection>
    );
}

const FooterSection = styled.div`
    background: var(--linear-2, linear-gradient(123deg, #2F25A5 0%, #2934AE 14.00%, #1A5EC8 40.00%, #03A1F2 77.00%, #00ACF9 83.00%));
`;

const ctaButtonCss: Object = {
    border: '2px solid #FFFFFF;',
    padding: '0px 10px',
    height: '50px',
    color: 'white',
    borderRadius: '29px',
    display: 'inline-block',
    fontSize:'16px',
    fontFamily: 'objektiv-mk2',
    fontStyle: 'normal',
    lineHeight: '47px',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: '500',
    '&:hover': {
        color: '#1976d2',
        background: 'white'
    }
};
