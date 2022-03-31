import * as React from "react";
import { ILogo } from "../interfaces";
import '../index.css';

type ILogoProps = ILogo;
const logo = "https://static.files.bbci.co.uk/orbit/8161b75793cc3c38d814e1a4a19a2f6a/img/blq-orbit-blocks_grey.svg";

const Logo: React.FC<ILogoProps> = (props: ILogoProps) => {
    const { location, action } = props;
    return (action === 'on') ?
        <React.Fragment>
            <div className="overlay">
                <img src={logo} alt="logo" />
            </div>
        </React.Fragment>
        : null;
};

export default Logo;

