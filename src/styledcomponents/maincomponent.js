import styled  from 'styled-components';

export const Maincomponent = styled.div`
    grid-area: ${props => props.Gridarea || "main"};
    display: grid;
    background-color: #f1f3f6;
    grid-template-columns: repeat(auto-fit, minmax(${props => props.Cardheight || "250px"}, 1fr)); /* Where the magic happens */
    grid-auto-rows: ${props => props.Cardheight || "150px"};
    grid-gap: 20px;
    margin: 20px;
`;