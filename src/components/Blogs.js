import React from 'react'
import beauty from '../Imagens/Rectangle347.png'
import quality from '../Imagens/Rectangle348.png'
import comfort from '../Imagens/Rectangle349.png'
import { BlogsContainers } from '../styles/GlobalStyles'

const Blogs = () => {
  return (
    <BlogsContainers>
        <h2>Our Blogs</h2>
        <section>
            <div>
                <img src={beauty} alt='For beauty'/>
                <h6>For Beauty</h6>
                <p>Offending belonging promotion provision an be oh consulted ourselves it.</p>
            </div>
            <div>
                <img src={quality} alt='product'/>
                <h6>Product Quality</h6>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day necessary.</p>
            </div>
            <div>
                <img src={comfort} alt='product'/>
                <h6>For Comfort</h6>
                <p>Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment.</p>
            </div>
        </section>
    </BlogsContainers>
  )
}

export default Blogs