import React, { useState, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

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
  CategoriesTagContainer,
} from './adminPostEditor.styles';
import ImageDropzone from '../../ImageDropzone/imageDropzone.component';

const AdminPostEditor = () => {
  const { id } = useParams();
  const {
    selectedPost,
    posts,
    updatePost,
    createPost,
    blankPost,
    getCategories,
    getTags,
  } = useBlogContext();
  const navigate = useNavigate();
  const isEditMode = id !== 'create';
  const [view, setView] = useState([true]);

  //Current Post Json, might Change(FIXME: check json if it changes)
  const [postEdit, setPostEdit] = useState(postPrototype);
  const [selectedImage, setSelectedImage] = useState(null);

  //Categories and Tags ony for dev
  //-------------FIXME: ------------------------------------------
  //Once Api is up and running, remove this
  const [categoriesList, setCategoriesList] = useState([]);

  const [tagsList, setTagsList] = useState([]);

  useEffect(() => {
    const cat = getCategories();
    setCategoriesList(cat);
  }, [getCategories]);

  useEffect(() => {
    const tag = getTags();
    setTagsList(tag);
  }, [getTags]);
  //--------------------------------------------------------------
  useEffect(() => {
    if (isEditMode) {
      setPostEdit(posts[0]);
    } else {
      setPostEdit(blankPost);
    }
  }, [id, isEditMode, posts, blankPost, selectedPost]);

  //-------------Dropzone-----------------------------------------
  const handleImageUrl = (imageUrl, index) => {
    const imageUrlRoot = `./image/${imageUrl}`;
    setPostEdit((prevState) => {
      const updatedSections = [...prevState.post.sections];
      updatedSections[index].imageUrl = imageUrlRoot;
      return {
        ...prevState,
        post: {
          ...prevState.post,
          sections: updatedSections,
        },
      };
    });
  };

  //--------------------------Input Handlers----------------------------------
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
  // video urls.
  //Upload image or choose from library
  //Videos should be able to be embedded from youtube or vimeo

  const handleAddSection = () => {
    setPostEdit((prevState) => {
      const updatedSections = [
        ...prevState.post.sections,
        { sectionTitle: '', content: '', contentType: 'text' },
      ];
      // updatedSections.push({
      //   sectionTitle: '',
      //   content: '',
      //   contentType: 'text',
      // });
      return {
        ...prevState,
        post: {
          ...prevState.post,
          sections: updatedSections,
        },
      };
    });
    setView((prevView) => [...prevView, true]);
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

    //This line removes the section and its view state, it was causing a bug
    setView((prevView) => prevView.filter((_, i) => i !== index));
  };

  const handleRemoveSectionTitle = (index) => {
    setView((prevView) => {
      const updatedView = [...prevView];
      prevView[index] = false;
      return updatedView;
    });

    setPostEdit((prevState) => {
      const updatedSections = [...prevState.post.sections];
      updatedSections[index].sectionTitle = '';
      return {
        ...prevState,
        post: {
          ...prevState.post,
          sections: updatedSections,
        },
      };
    });
  };

  //Handle Content Type Change, image, video, text
  const handleContentTypeChange = (e, index) => {
    const { value } = e.target;
    setPostEdit((prevState) => {
      const updatedSections = [...prevState.post.sections];
      updatedSections[index].contentType = value;
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
    const { name, value } = e.target;
    if (name === 'category') {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setPostEdit({ ...postEdit, categories: selectedOptions });
    } else {
      setPostEdit({ ...postEdit, [name]: value });
    }
  };

  const handleTagChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tags') {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setPostEdit({ ...postEdit, tags: selectedOptions });
    } else {
      setPostEdit({ ...postEdit, [name]: value });
    }
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
                  setSelectedImage={setSelectedImage}
                  index={index}
                  handleImageUrl={handleImageUrl}
                />
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt='Selected'
                    style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
                  />
                )}
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

        {/* Categories */}
        <CategoriesTagContainer>
          <FormGroup>
            <Label htmlFor='category'>Categories</Label>
            <Select
              name='category'
              id='category'
              value={postEdit.categories}
              onChange={handleCategoryChange}
              multiple
            >
              {categoriesList &&
                categoriesList.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </Select>
          </FormGroup>

          {/* Tags */}
          <FormGroup>
            <Label htmlFor='tags'>Tags</Label>
            <Select
              name='tags'
              id='tags'
              value={postEdit.tags}
              onChange={handleTagChange}
              multiple
            >
              {tagsList &&
                tagsList.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
            </Select>
          </FormGroup>
        </CategoriesTagContainer>
        <Button type='submit'>
          {isEditMode ? 'Update Post' : 'Create Post'}
        </Button>
      </form>
    </EditPostContainer>
  );
};

export default AdminPostEditor;
