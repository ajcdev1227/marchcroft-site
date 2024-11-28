import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
    '&': {
        marginBottom: '50px',
        width: '100%',
    },
    input: {
        color: 'white',
        fontFamily: 'objektiv-mk2',
        fontStyle: 'normal',
        marginTop: '10px',
        background: 'transparent'

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
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
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
