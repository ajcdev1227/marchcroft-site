import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { MParagraph } from "./Text";
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const CustomizedAccordion = styled(Accordion)(() => ({
    '& .MuiPaper-root:before': {
      backgroundColor: 'white',
    }
  }));

export const ServiceCard = ({ title, content }: { title: string, content: string }) => {

    return (
        <CustomizedAccordion sx={accordionCss} className="max-w-full">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#FFF' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{borderBottom: '1px solid #FFF'}}
                >
                    <MParagraph className="text-primary-800 text-base">{title}</MParagraph>
                </AccordionSummary>
                <AccordionDetails sx={{position: 'relative'}}>
                    <MParagraph className="text-primary-800">
                        {content}
                    </MParagraph>
                </AccordionDetails>
            </CustomizedAccordion>
    );
}

const accordionCss = {
    boxShadow: 'none',
    gap: '20px',
    color: 'white',
    marginX: 'auto',
    display: 'flex',
    background: 'none',
    flexDirection: 'column',
};


