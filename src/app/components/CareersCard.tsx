import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import {MParagraph} from "./Text";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {styled} from '@mui/material/styles'
import {useTranslation} from "next-i18next";

export const CareersCard = ({title, name, salary, content}: { title: string, name: string, salary: string, content: any }) => {
    const CustomAccordion = styled(Accordion)`
        & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
            transform: rotate(90deg);
        }
    `;

    const {t} = useTranslation();

    return (
        <CustomAccordion sx={accordionCss} className="w-full">
            <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{color: 'black'}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className="flex flex-col gap-y-3">
                    <MParagraph className="text-[#1A40A9] text-[20px]">{t(`${title}`)}</MParagraph>
                    <MParagraph className="text-black text-base">{t(`${name}`)}</MParagraph>
                    <MParagraph className="text-black text-base">{t(`${salary}`)}</MParagraph>
                </div>


            </AccordionSummary>
            <AccordionDetails>
                <MParagraph className="text-black mb-2">
                    {t(`${content.title}`)}
                </MParagraph>
                <MParagraph className="text-black font-bold">
                    {t("Competencies")}
                </MParagraph>
                {content.Competencies.map((item: any, index: any) =>
                    <ul key={index} className="list-disc px-8">
                        <li className="font-objektiv-mk2 text-black">{t(`${item}`)}</li>
                    </ul>
                )}
                <MParagraph className="text-black font-bold mt-3">
                    {t("Experience required")}
                </MParagraph>
                {content.ExperienceRequired.map((item: any, index: any) =>
                    <ul key={index} className="list-disc px-8">
                        <li className="font-objektiv-mk2 text-black">{t(`${item}`)}</li>
                    </ul>
                )}
                <MParagraph className="text-black mt-3">
                    {t(`${content.content2}`)}
                </MParagraph>
                <MParagraph className="text-black font-bold mt-3">
                    {t("Location")}
                </MParagraph>
                <MParagraph className="text-black mt-3">
                    {t(`${content.Location}`)}
                </MParagraph>
            </AccordionDetails>
        </CustomAccordion>
    )
}


const accordionCss = {
    boxShadow: '0px 4px 9px 0px rgba(47, 37, 165, 0.10);',
    padding: '0px 15px',
    color: 'white',
    marginX: 'auto',
    display: 'flex',
    background: "#FFF",
    flexDirection: 'column',
    marginTop: '2rem',
    paddingBottom: '1rem',
};
