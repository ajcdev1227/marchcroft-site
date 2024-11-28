import styled from "@emotion/styled";
import { TextareaAutosize } from "@mui/material";

export const CssTextArea = styled(TextareaAutosize)({
    '&': {
        marginTop: '30px',
        marginBottom: '30px',
        width: '100%',
        backgroundColor: '#0D1B2A',
        borderColor: 'White',
        resize: 'none',
        fontSize: '22px',
        fontFamily: 'objektiv-mk2',
        fontStyle: 'normal',
        Color: '#FFF'
    },
    '&:focusedLabel': {
        Color: '#FFF'
    }
});