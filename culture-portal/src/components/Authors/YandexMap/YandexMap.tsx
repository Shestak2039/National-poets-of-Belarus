import React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = ({ coordinates }: { coordinates: any }) => (
    <YMaps>
      <Map defaultState={{center: coordinates, zoom: 17 }} width={'100%'} height={'50vh'}>
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
);

export default YandexMap;
