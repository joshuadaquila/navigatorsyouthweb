import React from 'react';
import images from '../Helpers/Images';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function Carousel() {
  const [currImg, setImg] = useState(0);

  const backgroundStyle = {
    backgroundImage: `url(${images[currImg].img})`,
    backgroundSize: 'cover',
    height: '100%',
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currImg < images.length - 1) {
        setImg(currImg + 1);
      } else {
        setImg(0);
      }
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currImg]);

  return (
    <div className='h-85 rounded-md' style={{ height: '300px' }}>
      <div className='h-85 flex rounded-md' style={backgroundStyle}>
        <div
          className='flex flex-5p justify-center items-center h-full bg-black bg-opacity-40 cursor-pointer rounded-md'
          onClick={() => {
            currImg === 0 ? setImg(2) : setImg(currImg - 1);
            console.log(currImg);
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} size='2x' color='white' />
        </div>
        <div className='flex flex-90p h-full'></div>
        <div
          className='flex flex-5p justify-center items-center h-full bg-black bg-opacity-40 cursor-pointer rounded-md'
          onClick={() => {
            currImg === 2 ? setImg(0) : setImg(currImg + 1);
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} size='2x' color='white' />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
