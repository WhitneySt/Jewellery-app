import React from 'react'
import { CollectionContainer, ImageResponsive } from '../styles/GlobalStyles'
import imagen2 from '../Imagens/image13.png'

const GoldCollection = () => {
  return (
    <CollectionContainer>
            <section>
                <h4>100% Gold</h4>
                <p>Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.</p>
            </section>
            <section>
                <ImageResponsive src={imagen2} alt='Gold collection' />
            </section>
        </CollectionContainer>
  )
}

export default GoldCollection