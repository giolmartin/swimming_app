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
  UploadButton,
  FileInput,
} from './imagePickerModal.styles';

const ImagePickerModal = ({
  show,
  handleClose,
  handleSelect,
  handleUpload,
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadImage = await handleUpload(file);
      setSelectedImage(uploadImage);
    }
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
            {images.map((image, index) => (
              <Thumbnail
                key={index}
                src={image.imageUrl}
                alt={''}
                selected={selectedImage?.imageUrl === image.imageUrl}
                onClick={() => handleSelectImage(image)}
              />
            ))}
          </ImageGrid>
          <UploadButton htmlFor='upload-new-image'>
            Upload new image
          </UploadButton>
          <FileInput
            type='file'
            id='upload-new-image'
            accept='image/*'
            onChange={handleFileChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => handleSelect(selectedImage)}
            disabled={!selectedImage}
          >
            Select
          </Button>
        </ModalFooter>+
      </ModalWrapper>
    </>
  );
};

export default ImagePickerModal;
