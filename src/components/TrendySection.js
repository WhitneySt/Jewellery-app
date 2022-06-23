import React from 'react'
import { CollectionContainer, ImageResponsive } from '../styles/GlobalStyles'
import imagen3 from '../Imagens/image14.png'
import { Button } from '@mui/material'

const TrendySection = () => {
    return (
        <CollectionContainer>
            <section>
                <ImageResponsive src={imagen3} alt='Trendy' />
            </section>
            <section>
                <h4>Trendy</h4>
                <p>A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings.Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.</p>
                <Button variant="contained">Go to Shop</Button>
            </section>
        </CollectionContainer>
    )
}

export default TrendySection