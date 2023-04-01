import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageDropzone = ({
  setSelectedImage,
  handleImageUrl,
  index,
  handleImageRoute,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    console.log('File: ', file.name);
    handleImageUrl(file.name, index);
    handleImageRoute && handleImageRoute(file.name, index);

    reader.onload = (event) => {
      setSelectedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  }, []);

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
