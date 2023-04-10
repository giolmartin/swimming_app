import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = ({
  setSelectedImage,
  handleImageUrl,
  index,
  handleImageRoute,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
        handleImageUrl(file, index);
        handleImageRoute && handleImageRoute(file, index);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    [handleImageRoute, handleImageUrl, index, setSelectedImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      style={{ border: '1px dashed gray', padding: '1rem' }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag and drop an image, or click to select one</p>
      )}
    </div>
  );
};

export default ImageDropzone;
