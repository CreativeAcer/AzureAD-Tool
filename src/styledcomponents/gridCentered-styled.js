import styled from 'styled-components';

export const GridCentered = styled.div`
    display: grid;
    align-content: center;
    text-align: center;
    grid-area: ${props => props.Gridarea || "main"};
    grid-template-columns: ${props => props.columns || "1fr"};
    grid-template-rows: auto; 
    gap: 10px 10px;
    padding: 1%;
    height: 100%;
    width: 100%;
`;