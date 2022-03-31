import { INameSuper } from '../interfaces';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ITitle } from '../interfaces';

type INameSuperProps = INameSuper;

const NameSuper: React.FC<INameSuperProps> = (props: INameSuperProps) => {
    const { line1, line2, action } = props;

    return (action === 'on') ?
        <React.Fragment>
            {line1}
            <br />
            {line2}
        </React.Fragment>
        : null;
};
export default NameSuper;