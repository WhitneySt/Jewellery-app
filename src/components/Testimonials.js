import React from 'react'
import imagen5 from '../Imagens/Imagebg.png'
import imagen6 from '../Imagens/BottomImages.png'
import imagen7 from '../Imagens/comillas.png'
import back from '../Imagens/arrowPre.png'
import next from '../Imagens/arrowBack.png'
import patron from '../Imagens/patron.png'
import { ImageResponsive, Img1Styles, Img2Styles, PatronStyles, ResenaContainer, ResenaHeader, ResenaStyles, TestimonialsContainer } from '../styles/GlobalStyles'
import { IconButton, Tooltip } from '@mui/material'


const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <section>
        <ImageResponsive src={imagen5} alt='Comfort collection' />
        <Img1Styles src={imagen7} alt='comillas' />
        <Img2Styles src={imagen6} alt='testimonials' />
      </section>
      <ResenaContainer>
        <ResenaHeader>
          <h2>Testimonials</h2>
          <div>
            <Tooltip title="Back">
              <IconButton sx={{ p: 1 }}>
                <img src={back} alt='Back'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Next">
              <IconButton sx={{ p: 1 }}>
                <img src={next} alt='Next'/>
              </IconButton>
            </Tooltip>
          </div>
        </ResenaHeader>
        <ResenaStyles>
          <h3>Maria Sarapavoo</h3>
          <h5>Senior Designer</h5>
          <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</p>
        </ResenaStyles>
        <PatronStyles src={patron} alt='Patron'/>
      </ResenaContainer>      
    </TestimonialsContainer>
  )
}

export default Testimonials