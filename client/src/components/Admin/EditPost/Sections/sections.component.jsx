import React, { useState } from 'react';

import ImageDropzone from '../../../ImageDropzone/imageDropzone.component';
import VideoPlayer from '../../../VideoPlayer/videoPlayer.component';
import ImagePickerModal from '../../../ImagePickerModal/imagePickerModal.component';

import { AiOutlineDelete } from 'react-icons/ai';

import {
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  Select,
  Image,
} from '../adminPostEditor.styles';

const Sections = ({
  sections,
  view,
  setSelectedImages,
  selectedImages,
  handleRemoveSectionTitle,
  handleImageUrl,
  handleRemoveSection,
  handleContentTypeChange,
  handleAddSection,
  handlePostChange,
  images,
}) => {
  //TODO: Need to refactor and set the API to use the modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleImageSelected = (selectedImage, sectionIndex) => {
    handleImageUrl(selectedImage.secure_url, sectionIndex, true);
    const newSelectedImages = [...selectedImages];
    newSelectedImages[sectionIndex] = selectedImage.secure_url;
    setSelectedImages(newSelectedImages);
    setShowModal(false);
  };
  return (
    <>
      <Label htmlFor='sections'>Sections</Label>
      {sections &&
        sections.map((section, index) => (
          <FormGroup key={index}>
            {view[index] ? (
              <>
                <Label htmlFor={`sectionTitle-${index}`}>Section Title</Label>
                <Input
                  type='text'
                  name={`sectionTitle-${index}`}
                  id={`sectionTitle-${index}`}
                  value={section.sectionTitle}
                  onChange={(e) => {
                    handlePostChange(e, index);
                  }}
                />
                <Button
                  type='button'
                  onClick={() => handleRemoveSectionTitle(index)}
                >
                  Remove
                  <AiOutlineDelete />
                </Button>
              </>
            ) : null}

            {/* Sections contentType */}
            {section.contentType === 'text' && (
              <>
                <TextArea
                  type='text'
                  name={`content-${index}`}
                  id={`content-${index}`}
                  value={section.content}
                  maxLength='1000'
                  onChange={(e) => handlePostChange(e, index)}
                />
              </>
            )}
            {section.contentType === 'image' && (
              <>
                <Label htmlFor={`imageUrl-${index}`}>Image Dropzone</Label>
                <ImagePickerModal
                  show={showModal}
                  handleClose={handleCloseModal}
                  handleSelect={(image) => {
                    handleImageUrl(image, index, true);
                    const newSelectedImages = [...selectedImages];
                    newSelectedImages[index] = image;
                    setSelectedImages(newSelectedImages);
                    setShowModal(false);
                  }}
                  images={images}
                />
                <Button type='button' onClick={handleOpenModal}>
                  Select Image
                </Button>
                <ImageDropzone
                  setSelectedImage={setSelectedImages}
                  index={index}
                  handleImageUrl={(file, index) => {
                    handleImageUrl(file, index);
                    const newSelectedImages = [...selectedImages];
                    newSelectedImages[index] = URL.createObjectURL(file);
                    setSelectedImages(newSelectedImages);
                  }}
                />
                {selectedImages[index] && section.imageUrl === '' ? (
                  <Image
                    src={selectedImages[index]}
                    alt='Not Selected'
                    style={{
                      marginTop: '1rem',
                    }}
                  />
                ) : section.imageUrl !== '' ? (
                  <Image
                    src={section.imageUrl}
                    alt='Selected'
                    style={{ marginTop: '1rem' }}
                  />
                ) : null}
              </>
            )}

            {section.contentType === 'video' && (
              <>
                <Label htmlFor={`videoUrl-${index}`}>Video URL</Label>
                <Input
                  type='text'
                  name={`videoUrl-${index}`}
                  id={`videoUrl-${index}`}
                  value={section.videoUrl}
                  onChange={(e) => handlePostChange(e, index)}
                />
                {section.videoUrl && <VideoPlayer url={section.videoUrl} />}
              </>
            )}

            {/* Content Type [text, images, or video] */}
            <Label htmlFor={`contentType-${index}`}>Content Type</Label>
            <Select
              name={`contentType-${index}`}
              id={`contentType-${index}`}
              value={section.contentType}
              onChange={(e) => handleContentTypeChange(e, index)}
            >
              <option value='text'>Text</option>
              <option value='image'>Image</option>
              <option value='video'>Video</option>
            </Select>

            {/* Button */}
            <Button type='button' onClick={() => handleRemoveSection(index)}>
              Delete Section
            </Button>
          </FormGroup>
        ))}
      <Button type='button' onClick={handleAddSection}>
        Add Section
      </Button>
    </>
  );
};

export default Sections;
