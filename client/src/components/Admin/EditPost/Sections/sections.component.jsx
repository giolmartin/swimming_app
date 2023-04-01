import React from 'react';

import ImageDropzone from '../../../ImageDropzone/imageDropzone.component';
import VideoPlayer from '../../../VideoPlayer/videoPlayer.component';

import { AiOutlineDelete } from 'react-icons/ai';

import {
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  Select,
} from '../adminPostEditor.styles';

const Sections = ({
  post,
  view,
  setSelectedImages,
  selectedImages,
  handleRemoveSectionTitle,
  handleImageUrl,
  handleRemoveSection,
  handleContentTypeChange,
  handleAddSection,
  handlePostChange,
}) => {
  return (
    <>
      <Label htmlFor='sections'>Sections</Label>
      {post.sections.map((section, index) => (
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
              <ImageDropzone
                setSelectedImage={setSelectedImages}
                index={index}
                handleImageUrl={handleImageUrl}
              />
              {selectedImages[index] && section.imageUrl === '' ? (
                <img
                  src={`/${selectedImages[index]}`}
                  alt='Selected'
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginTop: '1rem',
                  }}
                />
              ) : section.imageUrl !== '' ? (
                <img
                  src={`/${section.imageUrl}`}
                  alt='Selected'
                  style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
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
