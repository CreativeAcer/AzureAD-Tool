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
    position: relative;
    top: 30%;
    left: 30%;
    width: 40%;

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
            //background: white;
            background: linear-gradient(
                to right bottom,
                rgba(13, 12, 29, 0.8),
                rgba(13, 12, 29, 0.3)
              );
            backdrop-filter: blur(2px);
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
            //background:  ${({ theme }) => theme.primaryLight};
            animation: ${ltrBefore} 2s cubic-bezier(.77,0,.18,1) forwards;
            transform: translateX(0);
        }

        :nth-of-type(1)::before{
            animation-delay: 0.5s;
        }
        :nth-of-type(1)::after{
            animation-delay: 0.5s;
        }

        :nth-of-type(2)::before{
            animation-delay: 1.0s;
        }
        :nth-of-type(2)::after{
            animation-delay: 1.0s;
        }
    }
`;