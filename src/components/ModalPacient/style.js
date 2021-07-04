import styled, { keyframes } from 'styled-components'

const animationShowModal = keyframes`
    from{
        opacity: 0;
        transform: translateY(-30px);
    }
    to{
        opacity: 1;
        transform: initial;
    }
`

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #0006;

    display:flex;
    align-items: center;
    justify-content: center;
`

export const ContainerModal = styled.div`
    width: 60%;
    min-width: 320px;
    max-width: 550px;
    background-color: #fff;
    position: relative;
    border-radius: 4px;
    padding: 7rem 4rem 3rem 4rem;
    font-size: 1rem;

    animation:  ${animationShowModal} .4s forwards;

    h2{
        text-align: center;
        margin-bottom: 2rem;
    }

    p{
        margin-bottom: 0.8rem; 
    }
`

export const PicturePatient = styled.img`
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -45%);

    width: 150px;
    height: 150px;
`

export const ButtonClose = styled.button`
    font-size: 2rem;
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer;

    background-color: transparent;
    padding: 0;
    border: 0;
`