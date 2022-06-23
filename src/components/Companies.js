import React from 'react'
import { FrameCompanies, ImageResponsive } from '../styles/GlobalStyles'
import imagen4 from '../Imagens/Frame3.png'

const Companies = () => {
  return (
    <FrameCompanies>
        <h2>Trusted by leading companies</h2>
        <ImageResponsive src={imagen4} alt='Companies'></ImageResponsive>
    </FrameCompanies>
  )
}

export default Companies