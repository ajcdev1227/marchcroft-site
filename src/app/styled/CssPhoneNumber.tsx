import styled from "@emotion/styled";
import { MuiTelInput } from "mui-tel-input";

export const CssPhoneNumber = styled(MuiTelInput)({
    input: {
        color: 'white',
        fontFamily: 'objektiv-mk2',
        fontStyle: 'normal',
        marginTop: '10px',
        background: 'transparent'
    },
    '& .MuiTelInput-Flag': {
        marginTop: '10px'
    },
    '& input:focus': {
        boxShadow: 'none !important',
        outline: 'none',
      },
    '& .MuiInput-input:focus': {
        boxShadow: 'none !important', // Remove the box shadow effect
        outline: 'none',
      },
    '& label': {
        color: 'white',
        fontFamily: 'objektiv-mk2',
        fontStyle: 'normal',
        fontSize: '24px',
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:hover': {
        borderBottomColor: 'white !important',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'grey',
        },
    },
});
