import React from 'react'
import { CopyrightContainer, FooterContainer, FooterStyles } from '../styles/GlobalStyles'
import socialmedia from '../Imagens/Socialmediaicon.png'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterStyles>
            <div>
                <h6>Product</h6>
                <ul>
                    <li>Email Row</li>
                    <li>Free Tools</li>
                    <li>Agents</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h6>Resources</h6>
                <ul>
                    <li>Our Agents</li>
                    <li>Member Stories</li>
                    <li>Video</li>
                    <li>Free trial</li>
                </ul>
            </div>
            <div>
                <h6>Company</h6>
                <ul>
                    <li>Patnerships</li>
                    <li>Terms of use</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <h6>Get in touch</h6>
                <ul>
                    <li>You’ll find your next Marketing value<br/> you prefer.</li>
                    <li><img src={socialmedia} alt='Social media'/></li>
                </ul>
            </div>
        </FooterStyles>
        <CopyrightContainer>
            <p>Copyright 2021 j-shop.com, All rights reserved.</p>
        </CopyrightContainer>
    </FooterContainer>
  )
}

export default Footer