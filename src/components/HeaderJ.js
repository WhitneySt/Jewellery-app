import React from 'react'
import { IconButton, Tooltip } from '@mui/material';
import ring1 from '../Imagens/gold-ring-with-shiny-diamond-stone-it.png'
import ring2 from '../Imagens/Rectangle4.png'
import play from '../Imagens/buttonPlay.png'
import pagination from '../Imagens/pagination.png'
import vRedSocial from '../Imagens/Vector2.png'
import explore from '../Imagens/buttonExplore.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { HeaderStylesDiv, ImageResponsive, LateralDiv, PlayDiv, Section1Styles, Section2Styles, SubSection1Div, SubSection2Div } from '../styles/GlobalStyles'

const HeaderJ = () => {
    return (
        <HeaderStylesDiv>
            <Section1Styles>
                <ImageResponsive src={ring1} alt='gold ring' />
                <Tooltip title="Explore">
                    <IconButton sx={{ p: 0 }}>
                        <img src={explore} alt='More' />
                    </IconButton>
                </Tooltip>
                <h1>Jewelery tells a great story</h1>
                <section>
                    <div>
                        <h5>Gold</h5>
                        <p>Her provision acuteness had
                            two why intention. </p>
                    </div>
                    <div>
                        <h5>SILVER</h5>
                        <p>Her provision acuteness had
                            two why intention. </p>
                    </div>
                </section>
            </Section1Styles>
            <Section2Styles>
                <SubSection1Div>
                    <h3>Our Story</h3>
                    <p>modern jewelry is made of gold, silver, or platinum, often with precious or semiprecious stones, it evolved from shells, animal teeth, and other items used as body decoration in prehistoric times.</p>
                </SubSection1Div>
                <SubSection2Div>
                    <ImageResponsive src={ring2} alt='Gold ring' />
                    <PlayDiv>
                        <Tooltip title="Play video">
                            <IconButton sx={{ p: 1 }}>
                                <img src={play} alt='Play' />
                            </IconButton>
                        </Tooltip>
                        <span>Play Video</span>
                    </PlayDiv>
                    <LateralDiv>
                        <div>
                            <Tooltip title="Twitter">
                                <IconButton sx={{ p: 1 }}>
                                    <TwitterIcon sx={{ color: '#3D3D3F' }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Red social">
                                <IconButton sx={{ p: 1 }}>
                                    <img src={vRedSocial} alt='Red social' />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Facebook">
                                <IconButton sx={{ p: 1 }}>
                                    <FacebookIcon sx={{ color: '#3D3D3F' }} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <img src={pagination} alt='Paginación' />
                    </LateralDiv>
                </SubSection2Div>
            </Section2Styles>
        </HeaderStylesDiv>
    )
}

export default HeaderJ