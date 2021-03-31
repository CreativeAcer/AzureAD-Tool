import styled  from 'styled-components';

export const StyledHeader = styled.header`
    grid-area: ${props => props.Gridarea || "header"};
    // background-color: lawngreen;
    background: ${({ theme }) => theme.primaryDark};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 16px;
    width: inherit;
`;