import { useTranslation } from "react-i18next";
import { ContactUsFormCard } from "../../components/ContactUsFormCard";
import { MParagraph, MTitle } from "../../components/Text";

export const ContactFormSection = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div className="flex flex-col w-full max-w-[1111px] mt-10">
                <MTitle className="text-white text-[40px] text-center">{t('Request a call')}</MTitle>
                <MParagraph className="text-white text-base text-center">{t('Fill out the form below and receive our free consultation')}</MParagraph>
                <ContactUsFormCard />
            </div>
        </div>
    );
}
