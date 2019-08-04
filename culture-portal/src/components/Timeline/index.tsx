import React from 'react';
import i18next from 'i18next';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


const timeLine = ({ data }: { data: any }) => {
  const timeline = data.timeline.map((data: any, index: any) => {
    const { yearAndDates, content} = data.fields;

    return (
      <TimelineItem
        key={index}
        dateText={i18next.t(yearAndDates)}
        dateInnerStyle={{ background: '#FFF', color: '#3F51B5' }}
        style={{ color: '#AAA' }}
      >

        <p>{i18next.t(content)}</p>
      </TimelineItem>
    );
  });

  return (
    <Timeline lineColor={'#ddd'}>
      {timeline}
    </Timeline>
  )
};
export default timeLine;
