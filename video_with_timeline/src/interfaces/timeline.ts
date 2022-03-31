import React from "react";

export interface ICommonEvent {
    action: 'on' | 'off'
}

export interface ITitle extends ICommonEvent {
    text: string;
}

export interface INameSuper extends ICommonEvent {
    line1: string;
    line2?: string;
}

export interface ILogo extends ICommonEvent {
    location: string;
}

export type ICaptionData = ILogo | ITitle | INameSuper;

export enum CaptionType {
    Logo = 'Logo',
    Title = 'Title',
    NameSuper = 'NameSuper'
};
export interface ITimelineEvent {
    id: number;
    startTime: string;
    endTime: string;
    captionType: CaptionType;
    captionData: ICaptionData;

}

export type ITimeLineEvents = ITimelineEvent[];

export interface IVideo {
    src: string;
    timelineEvents: ITimeLineEvents;
    triggerEvent: (timelineEvent: ITimelineEvent) => void;
}


export interface ITimelineAnimation {
    [key: string]: ITimelineEvent
}

export interface IAnimationRegister {
    [key: string]: any;
}