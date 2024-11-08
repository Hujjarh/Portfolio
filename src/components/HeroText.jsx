import React from 'react'
import styled from 'styled-components'
import Media from './Media'

const HeroText = () => {
  return (
    <>
        <Container>
            <h1>
                Hi👋, I am <br /> Mahmud Hujjatullah.
            </h1>
            <p>I am a full stack developer. I am interested in building accessible and user friendly websites, that drive sales and increase productivity.</p>
            <p>You can get in touch with me on my socials: <Media /> </p>
            
        </Container> 
    </>
  )
}

export default HeroText
const Container = styled.div`
display: flex;
flex-direction: column;
p{
    max-width: 500px;
    color: gray;
    font-weight: 700;
    margin-bottom: 2em;
}

@media screen and (max-width:800px) {
    justify-content: center;
    max-width: 300px;
    margin-top: 5em;
    /* margin-right: 30px; */
    h1{
        font-size: 20px;
        font-weight: bold;
    }
    p{
        font-size: 14px;
        max-width: 300px;
        margin-bottom: 1em;
    }
}
`