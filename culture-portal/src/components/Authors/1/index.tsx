import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const Author = () => (
  <div>
    <Timeline lineColor={'#ddd'}>
      <TimelineItem
        key="001"
        dateText="17/09/1912"
        dateInnerStyle={{ background: '#61b8ff' }}
      >
        <h3>Место рождения</h3>
        <p>
          Родился 4 (17) сентября 1912 года в селе Пильковщина (ныне Мядельского района Минской области Беларуси)
          в крестьянской семье.
          С сестрой Верой
          Принимал активное участие в политической жизни Западной Белоруссии в межвоенный период.
          Арестовывался польскими властями в 1932 и в 1934 годах.
    </p>
        <p>
          После воссоединения Западной Белоруссии и Белорусской ССР Максим Танк являлся корреспондентом
          в газете «Вилейская правда». В 1940 году принят в СП СССР. В годы Великой Отечественной войны
          продолжал работать во фронтовой печати.
    </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="1945—1948"
        dateInnerStyle={{ background: '#61b8ff' }}
      >
        <p>
          В 1945—1948 годы Максим Танк являлся редактором в юмористическом журнале «Вожык».
    </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="1948—1966"
        dateInnerStyle={{ background: '#61b8ff' }}

      >
        <p>
          В 1948—1966 годы — главный редактор белорусского литературного журнала «Полымя».
    </p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText="1965—1971"
        dateInnerStyle={{ background: '#61b8ff' }}
      >
        <p>
          Председатель ВС БССР
    </p>
      </TimelineItem>
      <TimelineItem
        key="005"
        dateText="07/08/1995"
        dateInnerStyle={{ background: '#61b8ff' }}
      >
        <p>
          Максим Танк умер в Минске 7 августа 1995 года. Похоронен в родном селе.
    </p>
      </TimelineItem>
    </Timeline>
  </div>
);

export default Author;
