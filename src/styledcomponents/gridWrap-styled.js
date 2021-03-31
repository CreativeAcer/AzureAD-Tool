import styled from 'styled-components';

export const GridWrap = styled.div`
    display: grid;
    grid-area: ${props => props.Gridarea || "main"};
    grid-template-columns: ${props => props.columns || "1fr"};
    grid-template-rows: auto; 
    gap: 10px 10px;
    padding: 1%;
`;