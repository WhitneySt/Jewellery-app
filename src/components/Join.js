import { Button, FormControl, Input, InputLabel} from '@mui/material'
import React from 'react'
import { JoinContainer } from '../styles/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main: '#313131'
        },
        secondary:{
            main: '#FFFFFF'
        }
    },
})

const Join = () => {

    return (
        <JoinContainer>
            <h2>Join J-Shop’s Family</h2>
            <ThemeProvider theme={theme}>
            <form>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input disableUnderline={true} id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <Button variant="contained">Join Family</Button>
            </form>
            </ThemeProvider>            
        </JoinContainer>
    )
}

export default Join