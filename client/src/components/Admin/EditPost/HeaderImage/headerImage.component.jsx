import React, { useState } from 'react';

import { HeaderImageContainer, Image } from '../adminPostEditor.styles';
import ImageDropzone from '../../../ImageDropzone/imageDropzone.component';

const HeaderImage = ({ headerImageUrl, handleHeaderImageChange, imageUrl }) => {
  const [selectedImage, setSelectedImage] = useState(headerImageUrl);
  return (
    <HeaderImageContainer
      style={{
        backgroundImage: `url(${headerImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ImageDropzone
        setSelectedImage={setSelectedImage}
        handleImageUrl={() => {}}
        handleImageRoute={(file) => {
          handleHeaderImageChange(file);
          setSelectedImage(URL.createObjectURL(file));
        }}
      />
      {selectedImage && imageUrl === '' ? (
        <Image
          src={selectedImage}
          alt='Selected'
          // style={{
          //   width: '100%',
          //   height: 'auto',
          //   marginTop: '1rem',
          // }}
        />
      ) : imageUrl !== '' ? (
        <Image
          src={imageUrl}
          alt='Selected'
          // style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
        />
      ) : null}
    </HeaderImageContainer>
  );
};

export default HeaderImage;
