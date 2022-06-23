import React from 'react'
import bracelet from '../Imagens/image24.png'
import { BtnCartContainer, ButtonsContainer, ImageResponsive, SectionBracelet } from '../styles/GlobalStyles'
import { IconButton, Tooltip } from '@mui/material'
import Button from '@mui/material/Button';

const BraceletSection = () => {
    return (
        <SectionBracelet>
            <ImageResponsive src={bracelet} alt='Chain bracelet' />
            <section>
                <h2>Gold Woven Chain Bracelet in Black</h2>
                <p>This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA.</p>
                <div>
                    <h4>Size</h4>
                    <ButtonsContainer>
                        <Tooltip title="S size">
                            <IconButton sx={{ p: 1 }}>
                                S
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="M size">
                            <IconButton sx={{ p: 1 }}>
                                M
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="L size">
                            <IconButton sx={{ p: 1 }}>
                                L
                            </IconButton>
                        </Tooltip>
                    </ButtonsContainer>
                    <BtnCartContainer>
                    <Button variant="contained">ADD TO CART</Button>
                    <span>549.29</span>
                    </BtnCartContainer>
                </div>
            </section>
        </SectionBracelet>
    )
}

export default BraceletSection