"use client";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { CssSelect } from "../styled/CssSelect";
import { CssTextArea } from "../styled/CssTextArea";
import { CssTextField } from "../styled/CssTextField";
import { MParagraph, MTitle } from "./Text";
import ReactGA from 'react-ga4';
import {toast} from 'react-toastify'
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';
import ValidateContactUs from "../validation/validateContactUs";
import { CssPhoneNumber } from "../styled/CssPhoneNumber";

const data = [
    ' ',
    'Sales',
    'Strategic Consultancy',
    'Software Architecture & Infrastructure',
    'Engineering and Technology',
    'UX Design',
    'Cloud',
]

interface FormErrors {
    [key: string]: string | undefined;
  }
  
const formFields = [
    {
        id: 'name',
        title: 'Name',
    },
    {
        id: 'email',
        title: 'Email address',
    },
    {
        id: 'companyName',
        title: 'Company Name'
    },

]

export const ContactUsFormCard = () => {
    ReactGA.initialize("G-WV5C9XS82Z");
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<FormErrors>({});

    const {t} = useTranslation();

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        companyName: "",
        phonenumber: "",
        interest: ""
    })
    const handleSubmit = (event: any) => {
        const originalUrl = "https://api.marchcroft.com/sendContactUsMail";
        const maskUrl = "https://marchcroft.com/sendContactUsMail";

        event.preventDefault();
        

        const {isValid, errors} = ValidateContactUs(contactData);

        setError(errors);
        
        if(isValid) {
            const payload = {
                id: Date.now()+'-'+ Math.random(),
                name: contactData.name,
                email: contactData.email,
                companyName: contactData.companyName,
                phoneNumber: contactData.phonenumber,
                interest: contactData.interest,
            }
            ReactGA.event({
                category: "Button Click",
                action: "submitContactUsForm",
                label: payload!.id, // optional
              });
            fetch(originalUrl,
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(payload)
            })
            .then(function(res){ console.log(res); setSent(true); })
            .catch(function(res){ console.log(res) })
          }
        
    }

    

    const handlePhoneNumberChange = (value: any) => {
        setContactData({
            ...contactData,
            phonenumber: value
        })
    }

    const handleChange = (event: any) => {
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeInterest = (event: any) => {
        setContactData({
            ...contactData,
            interest: event.target.value
        })
      };


    return (
        <>
        <section className="w-full h-1/2 rounded-3xl my-10 lg:mx-0">

            {!sent ?
                <Box
                    component="form"
                    sx={{
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col lg:flex-col py-10">
                        <div className="flex flex-col w-full mr-10">
                            <div>
                                <CssTextField
                                    size="small"
                                    margin="dense"
                                    name="name"
                                    id="name"
                                    variant='standard'
                                    label={t('Name')}
                                    error={error.name === undefined || error.name === "" ? false : true}
                                    value={contactData.name}
                                    onChange={handleChange}
                                    helperText={error.name !== undefined ? t(`${error.name}`) : ''}
                                />
                            </div>
                            <div>
                                <CssTextField
                                    size="small"
                                    margin="dense"
                                    name="email"
                                    id="email"
                                    variant="standard"
                                    label={t('Email address')}
                                    error={error.email === undefined || error.email === "" ? false : true}
                                    value={contactData.email}
                                    onChange={handleChange}
                                    helperText={error.email !== undefined ? t(`${error.email}`) : ''}
                                />
                            </div>
                            <div>
                                <CssTextField
                                    size="small"
                                    margin="dense"
                                    name="companyName"
                                    id="companyName"
                                    variant="standard"
                                    label={t('Company Name')}
                                    error={error.companyName === undefined || error.companyName === "" ? false : true}
                                    helperText={error.companyName !== undefined ? t(`${error.companyName}`) : ''}
                                    value={contactData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <Stack direction='column' sx={{mt: 4, mb: 5}}>
                                <CssPhoneNumber
                                    name='phonenumber'
                                    id="phonenumber"
                                    defaultCountry="GB"
                                    error={error.phonenumber === undefined || error.phonenumber === '' ? false : true}
                                    value={contactData.phonenumber}
                                    label={t('Phone number')}
                                    variant="standard"
                                    onChange={handlePhoneNumberChange}
                                    margin="dense"
                                />
                                {error.phonenumber !== undefined && (
                                    <div className="text-red-500 text-left text-[12px] mt-2">
                                        {t(`${error.phonenumber}`)}
                                    </div>
                                )}
                            </Stack>
                            <FormControl variant="standard">
                                <InputLabel required style={{color : error.interest === undefined || error.interest === "" ? 'white' : '#d32f2f', fontFamily: 'objektiv-mk2', fontSize: '24px'}} >{t("Interest")}</InputLabel>
                                <CssSelect
                                    id="interest3"
                                    key="interest"
                                    size="small"
                                    labelId="demo-simple-select-standard-label"
                                    value={contactData.interest}
                                    error={error.interest === undefined || error.interest === "" ? false : true}
                                    onChange={handleChangeInterest}
                                >
                                    {data.map((option, index) => (
                                        <MenuItem key={index} value={option}>{t(`${option}`)}</MenuItem>
                                    ))}
                                </CssSelect>
                                {error.interest !== undefined && (
                                    <div className="text-red-500 text-left text-[12px] mt-2">
                                        {t(`${error.interest}`)}
                                    </div>
                                )}
                            </FormControl>
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <div className="mx-auto">
                                <Button sx={ctaButtonCss} variant="contained" type="submit">{t("Submit Request")}</Button>
                            </div>
                        </div>
                    </div>
                </Box>
                :
                <div className="flex flex-col px-12 py-10">
                    <MTitle className="text-primary-800 mt-10 mb-5 lg:text-[30px] md:text-[24px] text-base">{t("Your message has been sent!")}</MTitle>
                    <MParagraph className="text-primary-800 mb-5 lg:text-[24px] md:text-[24px] text-base">{t("Thank you for sending us a message. One of our experts touch in the next 24-48 hours!")}</MParagraph>
                </div>
            }
        </section >
        </>
      
    );
}
const ctaButtonCss = {
    // margin: '40px 0% 0% 10%',
    padding: '0 30px',
    gap: '10px',
    color: '#FFF',
    backgroundColor: '#0D1B2A',
    fontSize: '16px',
    marginTop: '20px',
    fontFamily: 'objektiv-mk2',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    lineHeight: '47px',
    borderRadius: '29px',
    border: '2px solid var(--neutral-white, #FFF)',    
    '&:hover': {
        color: '#1976d2',
    }

};
