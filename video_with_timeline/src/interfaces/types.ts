import { IAnimationRegister, CaptionType } from "./timeline";
import Logo from "../components/Logo";
import NameSuper from "../components/NameSuper";
import Title from "../components/Title";

// Title component is added here but implementation is missing
// to show it on timeline
export const AnimationElements: IAnimationRegister = {
    [CaptionType.Logo]: Logo,
    [CaptionType.NameSuper]: NameSuper,
    [CaptionType.Title]: Title
}