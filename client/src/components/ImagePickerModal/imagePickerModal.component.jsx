import React, { useState } from 'react';

import {
  ModalOverlay,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ImageGrid,
  Thumbnail,
} from './imagePickerModal.styles';

const ImagePickerModal = ({ show, handleClose, handleSelect, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <ModalOverlay show={show} onClick={handleClose} />
      <ModalWrapper show={show}>
        <ModalHeader>
          <ModalTitle>Select an image</ModalTitle>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <ImageGrid>
            {console.log(images)}
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image.secure_url}
                alt={''}
                selected={selectedImage?.secure_url === image.secure_url}
                onClick={() => handleSelectImage(image)}
              />
            ))}
          </ImageGrid>
        </ModalBody>
        <ModalFooter>
          <Button type='button' onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={() => handleSelect(selectedImage)}
            disabled={!selectedImage}
            type='button'
          >
            Select
          </Button>
        </ModalFooter>
      </ModalWrapper>
    </>
  );
};

export default ImagePickerModal;
