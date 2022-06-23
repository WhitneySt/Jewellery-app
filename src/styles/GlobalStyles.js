import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

//Estilos globales

export const GlobalStyles = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        background-color: #F8F3E9;
        display: flex;
        flex-direction: column;
        font-family: 'ABeeZee';
        @media screen and (max-width: 900px){
            font-size: 15px;
        }
        @media screen and (max-width: 400px){
            font-size: 10px;
        }
    }
`

// Inicio de los estilos del header
export const HeaderStylesDiv = styled.div`
    display: flex;
    margin-top: 5em;
    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`
export const Section1Styles = styled.section`
    width:50%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 750px){
        justify-content: center;
        width: 100%;
    }
    h1{
        color: #2C2A2B;
        font-size: 5em;
        font-family: 'Noto Serif Display';
        margin: 0 0 1em 1.5em;
        transform: translateY(-85%); 
        @media screen and (max-width: 1200px){
            transform: translateY(-30%);
            font-size: 4em; 
        }
        @media screen and (max-width: 860px){
            font-size: 3.5em; 
        } 
        @media screen and (max-width: 750px){
            transform: translateY(-100%);
            margin: auto;
            padding: 0 1em;
        }
        @media screen and (max-width: 530px){
            transform: none;
        }     
    }
    button{
        transform: translate(400%, -150%);
        width: 20%;
        height: auto;
        @media screen and (max-width: 1200px){
            display: none;
        }
        @media screen and (max-width: 750px){
            display: flex;
            transform: translate(350%, -150%);
        }
        @media screen and (max-width: 570px){
            display: none;
        }
        
    }
    section{
        display: flex;
        gap: 60px;
        margin-left: 8em;
        transform: translateY(-300%);
        @media screen and (max-width: 1200px){
            transform: translateY(-100%);
        }
        @media screen and (max-width: 750px){
            transform: translateY(-180%);
            margin: auto;
            padding: 0 1em;
        }
        @media screen and (max-width: 530px){
            transform: none;
            margin-top: 20px;            
            flex-direction: column;
            justify-content: center;
        }   
        
        div{
            width: 190px;
            height: 69px;
            h5{
                color: #2C2A2B;
                font-size: 20px;
                font-family: 'Noto Serif Display';
                margin: 0;
            }
            p{
                font-family: 'ABeeZee';
                font-size: 14px;
                line-height: 21px;
                color: #3D3D3F;
            }
        }
    }
`
export const Section2Styles = styled.section`
    width:50%;
    display:flex;
    flex-direction: column;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`
export const SubSection1Div = styled.div`
    width: 360px;
    @media screen and (max-width: 750px){
        margin-left: 3em;
    }
    @media screen and (max-width: 530px){
        margin-top: 3em;
    }
    h3{
        color: #2C2A2B;
        font-size: 34px;
        font-family: 'Noto Serif Display';
        margin: 0;
    }
    p{
        font-family: 'ABeeZee';
        font-size: 14px;
        line-height: 21px;
        color: #3D3D3F;
    }
`
export const ImageResponsive = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    mix-blend-mode: multiply;
`
export const SubSection2Div = styled.div`
    display: flex;
`
export const PlayDiv = styled.div`
    display: flex;
    flex-direction: column;
    transform: translate(-200%, 50%);
    @media screen and (max-width: 1220px){
        transform: translate(-150%, 50%);
    }
    span{
        font-family: 'ABeeZee';
        font-size: 14px;
        color: #3D3D3F; 
        transform: translate(100%, -250%);
    }
`
export const LateralDiv = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12em;
    transform: translateY(25%);
    
    div{
        display: flex;
        flex-direction: column;
    }
    img{
        width: 15px;
    }
`

//Inicio seccion del bracelet trenzado
 export const SectionBracelet = styled.div`
    display: flex;
    padding: 0 5em 0 8em;
    @media screen and (max-width: 950px){
       flex-direction: column;
       padding: 0 2em 0 2em;
    }
    section{
        margin-left: 8em;
        @media screen and (max-width: 950px){
            margin: auto;
        }
        h2{
            color: #2C2A2B;
            font-size: 3em;
            font-family: 'Noto Serif Display';
            margin: 0;
        }
        p{
            width: 85%;
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 50px;
            color: #3D3D3F;
        }
        div{
            
            h4{
                margin:0;
                font-size: 26px;
                color: #3D3D3F;
            }
        }
    }
 `

 export const ButtonsContainer = styled.div`
    margin-bottom: 50px;
    button{
        width: 40px;
        height:40px;
        font-size: 20px;
        color: #3D3D3F;
        margin-right: 40px;        
    }
 `

 export const BtnCartContainer = styled.div`
    display: flex;
    align-items: center;
    span{
        margin-left: 50px;
        font-size: 2.25em;
        font-family: 'Noto Serif Display';
        color: #2C2A2B;

    }
    button{
        background-color: #3D3D3F;
        padding: 0.5em 2em;
        border-radius: none;
        font-size: 1.25em;
    }
 `
 //Inicio seccion del BlackRing
 export const SectionBlackRing = styled.div`
    display: flex;
    padding: 0 5em 0 8em;
    margin-top: 8em;
    @media screen and (max-width: 950px){
       flex-direction: column;
       padding: 0 2em 0 2em;
    }
    section{
        margin-right: 8em;
        @media screen and (max-width: 950px){
            margin: auto;
        }
        h2{
            width: 90%;
            color: #2C2A2B;
            font-size: 3em;
            font-family: 'Noto Serif Display';
            margin: 0;
        }
        p{
            width: 80%;
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 50px;
            color: #3D3D3F;
        }
        div{
            
            h4{
                margin:0;
                font-size: 26px;
                color: #3D3D3F;
            }
        }
    }
 `

 //Inicio sección de Collections

 export const ComfortContainer = styled.div`
    display:flex;
    margin: 5em 5em 1em 8em;
    gap: 3.5em;
    @media screen and (max-width: 750px){
       flex-direction: column-reverse;
       padding: 0 2em 0 2em;
       margin: auto;
       margin-bottom: 1em;
    }
    section{
        width: 50%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 750px){
            width: 100%;
        }
        h2{
            margin:0;
            font-size: 3.3em;
            font-family: 'Noto Serif Display';
        }
        h4{
            margin: .9em 0 .5em 0;
            font-size: 2.3em;
        }
        p{
            font-size: 20px;
            line-height: 30px;
            width: 95%;
            color: #3D3D3F;
        }
    }
 `
  export const CollectionContainer = styled.div`
    display:flex;
    margin: 0 5em .5em 8em;
    gap: 3.5em;
    @media screen and (max-width: 750px){
       flex-direction: column-reverse;
       padding: 0 2em 0 2em;
       margin: auto;
    }
  section{
      width: 50%;
      display:flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-width: 750px){
            width: 100%;
        }
      h2{
          margin:0;
          font-size: 3.3em;
          font-family: 'Noto Serif Display';
      }
      h4{
          margin: .9em 0 .5em 0;
          font-size: 2.3em;
      }
      p{
          font-size: 20px;
          line-height: 30px;
          width: 97%;
          color: #3D3D3F;
      }
      button{
        background-color: #3D3D3F;
        padding: 0.5em 2em;
        border-radius: none;
        font-size: 1.25em;
        align-self: flex-start;
        margin-top: 2em;
    }
  }
`
export const FrameCompanies = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5em 5em .5em 8em;
    @media screen and (max-width: 600px){
        margin: 4em 2em;
    }
    h2{
        font-size: 2.75em;
        color: #3D3D3F;
        text-align: center;
        @media screen and (max-width: 600px){
            font-size: 1.8em;
        }
    }
`

//Inicio sección de testimonios
export const TestimonialsContainer = styled.div`
    display: flex;
    margin: 5em 5em .5em 8em;
    @media screen and (max-width: 600px){
        flex-direction: column;
        margin: 4em 2em;
    }
`
export const Img1Styles = styled.img`
    width: 23%;
    height: auto;
    object-fit: cover;
    transform: translate(300%, -460%);
`
export const Img2Styles = styled.img`
    width: 77%;
    height: auto;
    object-fit: cover;
    position: relative;
    top: -7%;
    z-index: 10;
    @media screen and (max-width: 600px){
        top: -10%;
    }
`
export const ResenaStyles = styled.div`
    background-color: #FFFFFF;
    border-left: 8px solid #2c2a2b;
    padding: 3em 1.25em 3em 4.8em;
    h3{
        font-size: 1.5em;
        color: #2c2a2b;
        margin:0;
        @media screen and (max-width: 600px){
            font-size: 1.2em;
        }
    }
    h5{
        font-size: 0.9em;
        color:#8B9AA6;
        margin:0.75em 0 1.6em 0;
        @media screen and (max-width: 600px){
            font-size: 0.5em;
        }
    }
    p{
        font-size: 1.2em;
        color: #3D3D3F;
        margin:0;
        @media screen and (max-width: 600px){
            font-size: .8em;
        }
    }

`
export const ResenaContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    transform: translate(-7%, 21%);
    @media screen and (max-width: 600px){
        transform: none;
    }
    
`
export const ResenaHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-family: 'Noto Serif JP';
        font-size: 3em;
        margin:0 0 0 10%;
        @media screen and (max-width: 600px){
            font-size: 2em;
        }
    }
    img{
        width:100%;
        height: auto;
        object-fit: cover;
    }
`
export const PatronStyles = styled.img`
    width: 20%;
    height: auto;
    object-fit: cover;
    align-self: flex-end;
    transform: translate(25%,-83%);
    z-index: -1;
`
export const JoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        font-family: 'Noto Serif JP';
        font-size: 3em;
    }
    form{
        display: flex;
        justify-content: space-between;
        width: 50%;
        @media screen and (max-width: 600px){
            width: 95%;
        }
        input{
            width: 60%;
            & ::placeholder{
                font-family: 'ABeeZee';
            }
        }
        button{
            padding: 0.5em 2em;
            font-family: 'ABeeZee';
        }
    }
    
`
export const BlogsContainers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-family: 'Noto Serif JP';
        font-size: 3em;
    }
    section{
        display: flex;
        gap: 4em;
        justify-content: center;
        flex-wrap: wrap;
        div{
            width: 300px;
            h6{
                font-size: 28px;
                color: #2c2a2c;
                margin:30px 0 15px 0;
            }
            p{
                font-size: 18px;
                color: #3d3d3f;
                margin:0;
            }
        }
    }
`
export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 9em;
`
export const CopyrightContainer =styled.div`
    background-color: #3d3d3f;
    P{
        font-size: 14px;
        color: #c2c2c2;
        text-align: center;
    }
`
export const FooterStyles = styled.section`
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    div{
        h6{
            font-size: 20px;
            color: #2c2a2c;
            margin:0;
        }
        ul{
            margin:40px 0 40px 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
            color: #8e8e8e;
            li{
                img{
                    margin-top: 40px;
                }
            }
        }
    }
`
