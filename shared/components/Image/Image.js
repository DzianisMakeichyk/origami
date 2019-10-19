import React from 'react';

import { ImageContainer } from './imageStyles';

const Image = ({ alt, src, srcMobile }) => (
  <ImageContainer>
    <picture>
      <source media="(max-width: 700px)"
        srcSet={`${srcMobile} 1x,
        ${src} 2x`} />
      <source media="(min-width: 701px)"
        srcSet={`${src} 1x,
        ${src} 2x`} />
      <img src={srcMobile} alt={alt} />
    </picture>
  </ImageContainer>
);

export default Image;
