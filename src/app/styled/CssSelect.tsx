import styled from "@emotion/styled";
import { Select } from "@mui/material";

export const CssSelect = styled(Select)({
    // color: "white",
    // border: "1px",
    // '& .MuiSelect': {
    //     backgroundColor: '#2D26A3',
    //     color: 'white',
    //     fontFamily: 'objektiv-mk2',
    //     fontStyle: 'normal',
    // },
    // '&': {
    //     color: 'white',
    //     fontFamily: 'objektiv-mk2',
    //     fontStyle: 'normal',
    // },
    // '&:focusedLabel': {
    //     // Color: '#FFF'
    // }
    fontFamily: 'objektiv-mk2',
    fontStyle: 'normal',
    color: 'white',
    '& > label': {
        color: 'white',
    },
    '& > div': {
        borderBottomColor: 'grey',
        borderColor: 'grey',
        marginTop: '10px'
    },
    '&:before': {
        borderColor: 'white',
    },
    '&:after': {
        borderColor: 'white',
    },
    "&.Mui-focused": {
        color: "white"
        
    },
    '&.MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey', // Update the border color to grey
          },
          '&:hover fieldset': {
            borderColor: 'grey', // Update the hover border color to grey
          },
          '&.Mui-focused fieldset': {
            borderColor: 'grey', // Update the focused border color to grey
          },
    }
});