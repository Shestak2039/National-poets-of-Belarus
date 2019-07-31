import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


const timeLine = ({ data }: { data: any }) => {
  const info = data.timeline.map((el: any) => (
    el.fields.content
  ));
  const time = data.timeline.map((el: any) => (
    el.fields.yearAndDates
  ));
  // const lines = info.forEach((currentValue: any, index: number, array: any): void => {
  //   {
  //     <TimelineItem
  //       key="001"
  //       dateText={time[index]}
  //       dateInnerStyle={{ background: '#FFF', color: '#3F51B5' }}
  //       style={{ color: '#AAA' }}
  //     >
  //       <p>{info[index]}</p>


  //     </TimelineItem>
  //   }
  // });
  console.log(time[0].toString());
  return (

    <Timeline lineColor={'#ddd'}>
      <TimelineItem
        key="001"
        dateText={time[0]}
        dateInnerStyle={{ background: '#FFF', color: '#3F51B5' }}
        style={{ color: '#AAA' }}
      >
        <p>{info[0]}</p>


      </TimelineItem>
      <TimelineItem
        key="002"
        dateText={time[1]}
        dateInnerStyle={{ background: '#FFF', color: '#3F51B5' }}
      >
        <p>{info[1]}</p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText={time[2]}
        dateInnerStyle={{ background: '#FFF', color: '#3F51B5' }}
      >

        <p>{info[2]}</p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText={time[3]}
        dateInnerStyle={{ background: '#FFF', color: '#3F51B5' }}
      >
        <p>{info[3]}</p>
      </TimelineItem>
    </Timeline>
  )
};
export default timeLine;
