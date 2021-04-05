import styled  from 'styled-components';

export const StyledHeader = styled.header`
    grid-area: ${props => props.Gridarea || "header"};
    // background-color: lawngreen;
    background: ${({ theme }) => theme.primaryDark};
    border-bottom: 2px solid ${({ theme }) => theme.primaryLights};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 16px;
    width: inherit;
    padding: 2px;
`;