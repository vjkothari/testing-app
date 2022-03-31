import * as React from 'react';
import { ITitle } from '../interfaces';
export type ITitleProps = ITitle;

const Title: React.FC<ITitleProps> = (props: ITitleProps) => {
    const { text, action } = props;
    return (action === 'on') ?
        <React.Fragment>
            {text}
        </React.Fragment>
        : null
};
export default Title;