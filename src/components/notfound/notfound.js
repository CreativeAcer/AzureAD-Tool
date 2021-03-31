import React, {useState} from 'react';
import JsxWrapper from '../../hoc/jsxwrapper/jsxwrapper';

/**
 * Styled Component import
 */
 import { TextReveal } from '../../styledcomponents/textreveal-styled';

const NotFound = (props) => {
    return (
        <JsxWrapper>
            <TextReveal class="home-title">
                <span>Page not found!</span>
                <span>please try again.</span>
            </TextReveal>
        </JsxWrapper>
    );
}

export default NotFound;