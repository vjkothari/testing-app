import React, { useRef } from "react";
import { IVideo, ITimelineEvent } from "../interfaces";


type IVideoProps = IVideo;

const Video: React.FC<IVideoProps> = (props: IVideoProps) => {

    const { timelineEvents, src } = props;
    let eventsToProcess = [...timelineEvents];
    const videoRef = useRef(null);

    const getTimeinSeconds = (timestamp: string): Number => {
        let [hours, minutes, seconds, f] = timestamp.split(':');
        const timeInSeconds = Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds) + (Number(f) * .01);
        return timeInSeconds;
    }

    const actionOnTimeline = (arg: any) => {
        const { currentTime = undefined } = videoRef?.current as any;
        const actionEvent: ITimelineEvent | undefined = eventsToProcess.find((tEvent: ITimelineEvent): ITimelineEvent | undefined => {
            const startTimeInSeconds = getTimeinSeconds(tEvent.startTime);
            const endTimeInSeconds = getTimeinSeconds(tEvent.endTime);
            const { action } = tEvent.captionData;
            console.log(startTimeInSeconds, currentTime);
            if (action == 'off' && currentTime >= startTimeInSeconds && currentTime < endTimeInSeconds) {
                return tEvent;
            } else if (action == 'on' && currentTime >= endTimeInSeconds) {
                return tEvent;
            }
            return undefined;
        });

        if (actionEvent != undefined) {
            (videoRef.current as any).pause();
            props.triggerEvent(actionEvent);
        }
    }

    const onFinish = () => {
        console.log('finished');
    }

    return <React.Fragment>
        <video controls src={src} ref={videoRef} onTimeUpdate={actionOnTimeline}>
        </video>
    </React.Fragment>
}

export default Video;