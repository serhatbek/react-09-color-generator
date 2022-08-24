import rgbToHex from './utils';
import { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bgc = rgb.join(',');
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  const copyHexValue = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alert) {
        setAlert(false);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={copyHexValue}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className='percent-value'>{weight}</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
