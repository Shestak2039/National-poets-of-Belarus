import React from 'react';
import BigPicture, { BigPictureGallery } from "react-bigpicture";

const lists = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2012._Stamp_of_Belarus_36-2012-09-05-m.jpg/267px-2012._Stamp_of_Belarus_36-2012-09-05-m.jpg',
  'https://www.belta.by/uploads/lotus/news/000027_25D7C6C9F9FEB3234325819C0026C82D_741836.jpg',
  'https://img.tyt.by/n/04/4/tank_135300910250669-i0.jpeg',
  'https://www.sb.by/upload/iblock/0a6/0a6f89e29ff40b1cbdbe3caa20ee4061.jpg'
];
const videos = ['https://www.youtube.com/watch?v=dd25MD4Dk68', 'https://i.gyazo.com/e64b7aa56af11547c2d193df42d1b67c.png'];

const Author = () => {
  const images = lists.map((el: string) => (
    <img
      key={`key${el}`}
      src={el}
      alt="#"
      height="200px"
    />

  ));
  const videoYoutoobe =
    <BigPicture
      type="youtube"
      src={videos[0]}
    >
      <img src={videos[1]} alt="#" />
    </BigPicture>
    ;

  return (
    <>
      <div className='autorsPhoto'><BigPictureGallery loop>{images}</BigPictureGallery></div>
      {videoYoutoobe}
    </>
  )
};


export default Author;
