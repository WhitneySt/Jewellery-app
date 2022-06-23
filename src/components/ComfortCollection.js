import React from 'react'
import { ComfortContainer, ImageResponsive } from '../styles/GlobalStyles'
import imagen1 from '../Imagens/image12.png'

const ComfortCollection = () => {
    return (
        <ComfortContainer>
            <section>
                <ImageResponsive src={imagen1} alt='Comfort collection' />
            </section>
            <section>
                <h2> J-Shop’s best Collections</h2>
                <h4>Comfort</h4>
                <p> We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.</p>
            </section>
        </ComfortContainer>
    )
}

export default ComfortCollection