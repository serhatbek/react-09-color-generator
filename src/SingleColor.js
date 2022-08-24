import rgbToHex from './utils';
import { useState } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(',');
  // const hex = rgbToHex(...rgb);
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>#{hexColor}</p>
    </article>
  );
};

export default SingleColor;
