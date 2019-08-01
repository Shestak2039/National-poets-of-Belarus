import React from 'react';
import PropTypes from 'prop-types';

import Foto from '../../OverlayFoto';
import Video from '../../OverlayVideo';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Author = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <>
    <YMaps>
      <Map defaultState={{center: [53.899362, 27.560870], zoom: 17 }} width={'100%'} height={'50vh'}>
        <Placemark geometry={[53.899362, 27.560870]} />
      </Map>
    </YMaps>
      <div> Some info about author {data.nameAuthor}</div>
      <Foto data={data} />
      <Video data={data} />
    </>
  )
};

Author.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default Author;
