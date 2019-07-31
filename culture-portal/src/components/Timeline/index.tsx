import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


const timeLine = ({ data }: { data: any }) => {
  const timeline = data.timeline.map((data: any, index: any) => (
    <TimelineItem
      key={index}
      dateText={data.fields.yearAndDates}
      dateInnerStyle={{ background: '#FFF', color: '#3F51B5' }}
      style={{ color: '#AAA' }}
    >

      <p>{data.fields.content}</p>
    </TimelineItem>
  ));
  return (

    <Timeline lineColor={'#ddd'}>

      {timeline}
    </Timeline>
  )
};
export default timeLine;
