import React, { useEffect, useState, useCallback } from 'react';

import { HeaderImageContainer, Image } from '../adminPostEditor.styles';
import ImageDropzone from '../../../ImageDropzone/imageDropzone.component';
import ImagePickerModal from '../../../ImagePickerModal/imagePickerModal.component';

const HeaderImage = ({
  headerImageUrl,
  handleHeaderImageChange,
  imageUrl,
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState(headerImageUrl);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setSelectedImage(headerImageUrl);
  }, [headerImageUrl]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectImage = (image) => {
    handleHeaderImageChange(image, true);
    setSelectedImage(image.secure_url);
    setShowModal(false);
  };

  //FIXME: Need to change the header Image container to a div
  //FIXME: NEED TO CHECK WHY IS RERENDERING THE COMPONENT even when some other input is loaded.

  return (
    <>
      <HeaderImageContainer
        style={{
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Image src={selectedImage} alt='' />
        <ImagePickerModal
          show={showModal}
          handleClose={handleCloseModal}
          handleSelect={handleSelectImage}
          images={images}
        />
        <button type='button' onClick={handleOpenModal}>
          Select Image
        </button>
        <ImageDropzone
          setSelectedImage={setSelectedImage}
          handleImageUrl={() => {}}
          handleImageRoute={(file) => {
            handleHeaderImageChange(file, false);
            setSelectedImage(URL.createObjectURL(file));
          }}
        />
      </HeaderImageContainer>
    </>
  );
};

export default HeaderImage;
