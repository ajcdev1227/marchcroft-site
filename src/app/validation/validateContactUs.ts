import { isValidPhoneNumber } from 'react-phone-number-input'

const ValidateContactUs = (value: any) => {
    let isValid = true;
    let errors: any = {};

    console.log(value)

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!value.email || !value?.email.trim()) {
      errors.email = "Email field is required.";
      isValid = false;
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Invalid email format.";
      isValid = false;
    } else {
      errors.email = "";
    }

    if(!value.name || !value.name.trim()) {
        errors.name = "Name field is required.";
        isValid = false;
    } else {
        errors.name = "";
    }

    if(!value.interest || !value.interest.trim()) {
        errors.interest = "Interest field is required.";
        isValid = false;
    } else {
        errors.interest = "";
    }

    if(!value.companyName || !value.companyName.trim()) {
        errors.companyName = "Company Name field is required.";
        isValid = false;
    } else {
        errors.companyName = "";
    }


    if (!value.phonenumber || !value.phonenumber.trim()) {
        errors.phonenumber = "PhoneNumber field is required.";
        isValid = false;
    } else if (!isValidPhoneNumber(value.phonenumber)) {
        errors.phonenumber = "Invalid phone number format.";
        isValid = false;
    } else {
        errors.phonenumber = "";
    }

    return {isValid, errors}
}

export default ValidateContactUs;