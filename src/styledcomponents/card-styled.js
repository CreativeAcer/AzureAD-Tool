import styled  from 'styled-components';

export const Softcard = styled.div`
    background-color: ${props => props.bgColor || "#f1f3f6"};
    color: #c8c8c8;
    border-radius: .5em;
    border: 0.084em solid rgba(#fff, 0.3);
    box-shadow:
      0px 3px 3px rgba(0, 54, 85, 0.2), /** Simulate Direct Light - Color is a darkened shade of blue **/
      0px 3px 20px rgba(0, 54, 85, 0.3)  /** Simulate Ambient Light - Color is a darkened shade of blue **/;
    // width: ${props => props.cardwidth || "250px"};
    // height: ${props => props.cardheight || "150px"};
    text-align: center;
    padding: 1em 2em;
`;