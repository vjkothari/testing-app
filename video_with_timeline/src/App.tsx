import React, { useState } from 'react';
import TimelineAnimation from './components/Animations';

import Video from './components/Video';
import { ITimeLineEvents, IVideo, ITimelineEvent, ITitle, ITimelineAnimation } from './interfaces';
import data from './mock.json';


const App: React.FC<any> = (): React.ReactElement => {

  const src = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_10MB.mp4";

  
  let timelineEvents: ITimeLineEvents = [...data.events as ITimeLineEvents];
  const [timelineAnimation, setTimelineAnimation] = useState<ITimelineAnimation>({});

  const onTimelineEvent = (timelineEvent: ITimelineEvent): void => {
    const { action } = timelineEvent.captionData;
    // Below can also be achieved through store, contextprovider
    const t = timelineEvents.find((e: ITimelineEvent): ITimelineEvent | undefined =>
      e.id === timelineEvent.id ? e : undefined
    );
    if (t) {
      t.captionData.action = (action === 'off') ? 'on' : 'off';
      setTimelineAnimation({ ...timelineAnimation, [t.captionType]: t });
    }
  }

  const videpProps: IVideo = {
    timelineEvents,
    src,
    triggerEvent: onTimelineEvent
  };

  return (
    <div className='video-container'>
      
        <Video {...videpProps} />
        {
          <TimelineAnimation {...timelineAnimation}></TimelineAnimation>
        }
     

    </div>
  );
}

export default App;
