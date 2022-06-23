import React from 'react'
import { BtnCartContainer, ButtonsContainer, ImageResponsive, SectionBlackRing } from '../styles/GlobalStyles'
import { IconButton, Tooltip } from '@mui/material'
import Button from '@mui/material/Button';
import blackRing from '../Imagens/image25.png'

const BlackRingSection = () => {
    return (
        <SectionBlackRing>
            <section>
                <h2>Gold Black Coral Ring</h2>
                <p>A 14K yellow gold ring Two Hawaiian Black Coral inlaid strips, 14.5x2mm Ring sizes 4-8 Contact us for additional ring sizes To our valued International Customers, an extra CITES charge will be added to your order. </p>
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
                        <span>320.99</span>
                    </BtnCartContainer>
                </div>
            </section>
            <ImageResponsive src={blackRing} alt='Black Ring' />
        </SectionBlackRing>
    )
}

export default BlackRingSection