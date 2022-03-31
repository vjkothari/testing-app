import React from "react";
import {
    ITimelineAnimation,
    ICaptionData,
    ITimelineEvent,
    CaptionType,
} from "../interfaces";
import { AnimationElements } from "../interfaces";

export type IAnimationProps = ITimelineAnimation;

const defaultElements = (type: string): React.ComponentType<any> => AnimationElements[type];

const TimelineAnimation: React.FC<IAnimationProps> = (
    props: IAnimationProps
) => {
    const getAnimation = (type: CaptionType, captionData: ICaptionData) => {
        let animStyle = "";
        
        // Animation atoms could be indepndent of styles where to place on screen
        // so setting dynamically.
        // Maintaining aspect raio is missing from this implementation.
        if (type === CaptionType.Logo) {
            animStyle = "video-logo";
        }
        if (type === CaptionType.NameSuper) {
            animStyle = "video-nameSuper";
        }
        if (type === CaptionType.Title) {
            animStyle = "video-title";
        }

        let AnimationComponent = AnimationElements[type];
        return <div key={type} className={animStyle}><AnimationComponent {...captionData} /></div>;
    };

    const displayAnimation = () => {
        const events = Object.values(props);
        const comps = events.map((timelineEvent: ITimelineEvent) => {
            const { captionType, captionData } = timelineEvent;
            return getAnimation(captionType, captionData);
        });
        return comps;
    };

    return <React.Fragment>{displayAnimation()}</React.Fragment>;
};

export default TimelineAnimation;
