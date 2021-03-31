import styled, {keyframes} from 'styled-components';

const ltrAfter = keyframes`
0% {transform: translateX(-100%)}
100% {transform: translateX(101%)}
`
const ltrBefore = keyframes`
0% {transform: translateX(0)}
100% {transform: translateX(200%)}
`

export const TextReveal = styled.h1`
    font-size: 3em;
    font-weight: normal;

    span {
        position: relative;
        overflow: hidden;
        display: block;
        line-height: 1.2;

        ::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: white;
            animation: ${ltrAfter} 2s cubic-bezier(.77,0,.18,1) forwards;
            transform: translateX(-101%);
        }

        ::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-color);
            animation: ${ltrBefore} 2s cubic-bezier(.77,0,.18,1) forwards;
            transform: translateX(0);
        }

        :nth-of-type(1)::before{
            animation-delay: 1s;
        }
        :nth-of-type(1)::after{
            animation-delay: 1s;
        }

        :nth-of-type(2)::before{
            animation-delay: 1.5s;
        }
        :nth-of-type(2)::after{
            animation-delay: 1.5s;
        }
    }
`;