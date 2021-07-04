import { BsArrowCounterclockwise } from 'react-icons/bs';
import styled from 'styled-components'

export const IconArrowCircle = styled.div`
    animation: ${({ isLoadingBtn }) => isLoadingBtn ? 'rotation .4s infinite linear' : ''};

    @keyframes rotation{
        to{
            transform: rotate(-360deg)
        }
    }
`