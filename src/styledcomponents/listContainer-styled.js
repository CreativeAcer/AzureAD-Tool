import styled from 'styled-components';

export const ListContainer = styled.div`
    max-width: 60%;
    width: 100%;
    padding: 2em 0px;
    backdrop-filter: blur(10px);
    border-radius: 10px;

    h1 {
        text-align: center;
        padding: 10px;
        letter-spacing: 2px;
        font-size: 2em;
    }

    .list {
        position: relative;
        background: linear-gradient(
            to right bottom,
            rgba(255,255,255, 0.7),
            rgba(255,255,255, 0.4)
        );
        width: 80%;
        margin: 20px auto;
        display: flex;
        align-items: center;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        overflow: hidden;

        &:hover > i {
            opacity: 1;
        }

        img {
            height: 100px;
            width: 100px;
            object-fit: cover;
        }

        i {
            position: absolute;
            right: 0;
            padding: 0 5rem;
            height: 100%;
            display: grid;
            align-items: center;
            padding: 0px 20px;
            background: #f90c;
            background-size: 100px 100px;
            font-size: 1.3em;
            opacity: 0.5;
            transition: 0.2s;
            overflow: hidden;
        }

        .wrapper {
            padding-left: 10px;

            h3 {
                text-align: center;
                padding: 10px;
                letter-spacing: 2px;
                font-family: sans-serif;
                font-size: 1.2em;
            }

            p {
                padding: 5px;
                margin-left: 9px;
                letter-spacing: 2px;
                font-family: sans-serif;
                font-size: 0.7em;
                color: #c6c6c6;
            }
        }


    }


`;