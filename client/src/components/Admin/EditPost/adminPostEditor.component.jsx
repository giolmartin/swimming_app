import React from 'react';

import { useAdminPostEditor } from '../../hooks/useAdminPostEditor.hooks';

import Sections from './Sections/sections.component';
import Categories from './Categories/categories.component';
import Tags from './Tags/tags.component';

import {
  EditPostContainer,
  EditPostTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  CategoriesTagContainer,
} from './adminPostEditor.styles';
import Title from './Title/title.component';
import Subtitle from './Subtitle/subtitle.component';
import Author from './Author/author.component';
import Date from './Date/date.component';
import Excerpt from './Excerpt/excerpt.component';
import PostTitle from './PostTitle/postTitle.component';
import Introduction from './Introduction/introduction.component';
import Conclusion from './Conclusion/conclusion.component';

const AdminPostEditor = () => {
  const {
    post,
    view,
    setSelectedImages,
    selectedImages,
    handleRemoveSectionTitle,
    handleImageUrl,
    handleRemoveSection,
    handleContentTypeChange,
    handleAddSection,
    title,
    subtitle,
    author,
    date,
    excerpt,
    postEdit,
    categoriesList,
    tagsList,
    isEditMode,
    handlePostChange,
    handleInputChange,
    handleFormSubmit,
    handleCategoryChange,
    handleTagChange,
  } = useAdminPostEditor();

  console.log(postEdit);

  return (
    <EditPostContainer>
      <EditPostTitle>Edit</EditPostTitle>
      <form onSubmit={handleFormSubmit}>
        <Title title={title} handleInputChange={handleInputChange} />
        <Subtitle subtitle={subtitle} handleInputChange={handleInputChange} />
        <Author author={author} handleInputChange={handleInputChange} />
        <Date date={date} handleInputChange={handleInputChange} />
        <Excerpt excerpt={excerpt} handleInputChange={handleInputChange} />
        <PostTitle
          postTitle={post.postTitle}
          handlePostChange={handlePostChange}
        />
        <Introduction
          introduction={post.introduction}
          handlePostChange={handlePostChange}
        />
        <Sections
          post={post}
          view={view}
          handleImageUrl={handleImageUrl}
          selectedImages={selectedImages}
          handleAddSection={handleAddSection}
          handlePostChange={handlePostChange}
          setSelectedImages={setSelectedImages}
          handleRemoveSection={handleRemoveSection}
          handleContentTypeChange={handleContentTypeChange}
          handleRemoveSectionTitle={handleRemoveSectionTitle}
        />
        <Conclusion
          conclusion={post.conclusion}
          handlePostChange={handlePostChange}
        />
        <CategoriesTagContainer>
          <Categories
            categoriesList={categoriesList}
            postEdit={postEdit}
            handleCategoryChange={handleCategoryChange}
          />
          <Tags
            tagsList={tagsList}
            postEdit={postEdit}
            handleTagChange={handleTagChange}
          />
        </CategoriesTagContainer>
        <Button type='submit'>
          {isEditMode ? 'Update Post' : 'Create Post'}
        </Button>
      </form>
    </EditPostContainer>
  );
};

export default AdminPostEditor;
