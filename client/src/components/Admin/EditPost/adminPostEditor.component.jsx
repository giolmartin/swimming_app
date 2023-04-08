import React from 'react';

import { useAdminPostEditor } from '../../hooks/useAdminPostEditor.hooks';
import Sections from './Sections/sections.component';
import Categories from './Categories/categories.component';
import Tags from './Tags/tags.component';

import {
  EditPostContainer,
  EditPostTitle,
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
import HeaderImage from './HeaderImage/headerImage.component';

const AdminPostEditor = () => {
  const {
    title,
    subtitle,
    author,
    date,
    excerpt,
    imageUrl,
    sections,
    postTitle,
    introduction,
    conclusion,
    view,
    selectedImages,
    setSelectedImages,
    postEdit,
    categoriesList,
    categories,
    tagsList,
    tags,
    isEditMode,
    handlePostChange,
    handleRemoveSectionTitle,
    handleImageUrl,
    handleContentTypeChange,
    handleRemoveSection,
    handleAddSection,
    handleInputChange,
    handleFormSubmit,
    handleCategoryChange,
    handleTagChange,
    handleHeaderImageChange,
  } = useAdminPostEditor();

  // console.log(`AdminPostEditor: `, sections);

  return (
    <EditPostContainer>
      <EditPostTitle>Edit</EditPostTitle>
      <form onSubmit={handleFormSubmit}>
        <HeaderImage
          imageUrl={imageUrl}
          headerImageUrl={imageUrl}
          handleHeaderImageChange={handleHeaderImageChange}
        />
        <Title title={title} handleInputChange={handleInputChange} />
        <Subtitle subtitle={subtitle} handleInputChange={handleInputChange} />
        <Author author={author} handleInputChange={handleInputChange} />
        <Date date={date} handleInputChange={handleInputChange} />
        <Excerpt excerpt={excerpt} handleInputChange={handleInputChange} />
        <PostTitle postTitle={postTitle} handlePostChange={handlePostChange} />
        <Introduction
          introduction={introduction}
          handlePostChange={handlePostChange}
        />
        <Sections
          sections={sections}
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
          conclusion={conclusion}
          handlePostChange={handlePostChange}
        />
        <CategoriesTagContainer>
          <Categories
            categoriesList={categoriesList}
            postEdit={postEdit}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
          />
          <Tags
            tagsList={tagsList}
            postEdit={postEdit}
            handleTagChange={handleTagChange}
            tags={tags}
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
