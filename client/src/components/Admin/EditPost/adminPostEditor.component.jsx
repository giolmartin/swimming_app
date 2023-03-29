import React, { useState, useEffect } from 'react';

import { useBlogContext } from '../../../context/blog.context';
import { postPrototype } from '../../../data/prototypes.data';
import { useParams, useNavigate } from 'react-router-dom';
import {
  EditPostContainer,
  EditPostTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  Select,
} from './adminPostEditor.styles';
import { categories1 as categories } from '../../../data/categories.data';

const AdminPostEditor = () => {
  const { id } = useParams();
  const { selectedPost, posts, updatePost, createPost, blankPost } =
    useBlogContext();
  const navigate = useNavigate();
  const isEditMode = id !== 'create';
  console.log(id);
  console.log(isEditMode);
  //Current Post Json, might Change(FIXME: check json if it changes)
  const [postEdit, setPostEdit] = useState(postPrototype);

  useEffect(() => {
    if (isEditMode) {
      setPostEdit(posts[0]);
    } else {
      setPostEdit(blankPost);
    }
  }, [id, isEditMode, posts, blankPost, selectedPost]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPostEdit({ ...postEdit, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      updatePost(postEdit.id, postEdit);
    } else {
      createPost(postEdit);
    }
    navigate('/admin/dashboard/posts');
  };

  const handlePostChange = (e, index) => {
    e.persist();
    const { name, value } = e.target;
    setPostEdit((prevState) => {
      const updatedSections = [...prevState.post.sections];

      let updatedPostTitle = prevState.post.postTitle;
      let updatedIntroduction = prevState.post.introduction;
      let updatedConclusion = prevState.post.conclusion;

      if (name.startsWith('postTitle')) {
        updatedPostTitle = value;
      } else if (name.startsWith('introduction')) {
        updatedIntroduction = value;
      } else if (name.startsWith('conclusion')) {
        updatedConclusion = value;
      } else if (name.startsWith('sectionTitle')) {
        updatedSections[index].sectionTitle = value;
      } else if (name.startsWith('content-')) {
        updatedSections[index].content = value;
      }
      return {
        ...prevState,
        post: {
          postTitle: updatedPostTitle,
          introduction: updatedIntroduction,
          sections: updatedSections,
          conclusion: updatedConclusion,
        },
      };
    });
  };

  //TODO: Add section should be able to choose between the type of content to add
  //Images, video urls, text.
  //Upload image or choose from library
  //Videos should be able to be embedded from youtube or vimeo
  //Text should be able to be formatted with markdown




  const handleAddSection = () => {
    setPostEdit((prevState) => {
      const updatedSections = [...prevState.post.sections];
      updatedSections.push({
        sectionTitle: '',
        content: '',
      });
      return {
        ...prevState,
        post: {
          ...prevState.post,
          sections: updatedSections,
        },
      };
    });
  };

  const handleRemoveSection = (index) => {
    setPostEdit((prevState) => {
      const updatedSections = prevState.post.sections.filter(
        (_, i) => i !== index
      );
      return {
        ...prevState,
        post: {
          ...prevState.post,
          sections: updatedSections,
        },
      };
    });
  };

  const handleCategoryChange = (e) => {
    const selectedCategories = Array.from(
      e.targetSelectedOptions,
      (option) => option.value
    );
    setPostEdit({ ...postEdit, category: selectedCategories });
  };



  console.log(postEdit);
  const { title, subtitle, author, date, excerpt, post } = postEdit;

  return (
    <EditPostContainer>
      <EditPostTitle>Edit</EditPostTitle>
      <form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label htmlFor='title'>Title</Label>
          <Input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='subtitle'>Subtitle</Label>
          <Input
            type='text'
            name='subtitle'
            id='subtitle'
            value={subtitle}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='author'>Author</Label>
          <Input
            type='text'
            name='author'
            id='author'
            value={author}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='date'>Date</Label>
          <Input
            type='text'
            name='date'
            id='date'
            value={date}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='excerpt'>Excerpt</Label>
          <Input
            type='text'
            name='excerpt'
            id='excerpt'
            value={excerpt}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Label htmlFor='title'>Post</Label>
        <FormGroup>
          <Label htmlFor='postTitle'>Post Title</Label>
          <Input
            type='text'
            name='postTitle'
            id='postTitle'
            value={post.postTitle}
            onChange={(e) => {
              handlePostChange(e, null);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='introduction'>Introduction</Label>
          <TextArea
            name='introduction'
            id='introduction'
            value={post.introduction}
            onChange={(e) => {
              handlePostChange(e, null);
            }}
          />
        </FormGroup>
        <Label htmlFor='sections'>Sections</Label>
        {post.sections.map((section, index) => (
          <FormGroup key={index}>
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
            <Label htmlFor={`content-${index}`}>Content</Label>
            <TextArea
              type='text'
              name={`content-${index}`}
              id={`content-${index}`}
              value={section.content}
              maxlength='1000'
              onChange={(e) => {
                handlePostChange(e, index);
              }}
            />
            <Button type='button' onClick={() => handleRemoveSection(index)}>
              Delete Section
            </Button>
          </FormGroup>
        ))}
        <Button type='button' onClick={handleAddSection}>
          Add Section
        </Button>
        <FormGroup>
          <Label htmlFor='conclusion'>Conclusion</Label>
          <TextArea
            name='conclusion'
            id='conclusion'
            value={post.conclusion}
            onChange={(e) => {
              handlePostChange(e, null);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='category'>Categories</Label>
          <Select
            name='category'
            id='category'
            multiple
            value={postEdit.category}
            // onChange={handleCategoryChange}
          >
            {categories &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </Select>
        </FormGroup>
        <Button type='submit'>
          {isEditMode ? 'Update Post' : 'Create Post'}
        </Button>
      </form>
    </EditPostContainer>
  );
};

export default AdminPostEditor;
