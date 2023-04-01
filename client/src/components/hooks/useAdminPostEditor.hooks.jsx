import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlogContext } from '../../context/blog.context';
import { postPrototype } from '../../data/prototypes.data';
export const useAdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    selectedPost,
    posts,
    updatePost,
    createPost,
    blankPost,
    selectPost,
    getCategories,
    getTags,
  } = useBlogContext();
  const isEditMode = id !== 'create';
  const [view, setView] = useState([true]);
  const [today, setToday] = useState(new Date().toDateString().slice(4));
  const [postEdit, setPostEdit] = useState(postPrototype);
  const [selectedImages, setSelectedImages] = useState([]);
  const { post } = postEdit;
  const [headerImageUrl, setHeaderImageUrl] = useState('');

  //Categories and Tags ony for dev
  //-------------FIXME: ------------------------------------------
  //Once Api is up and running, remove this
  const [categoriesList, setCategoriesList] = useState([]);

  const [tagsList, setTagsList] = useState([]);
  useEffect(() => {
    if (isEditMode) {
      setPostEdit(selectedPost);
    } else {
      setPostEdit(postEdit);
    }
    const cat = getCategories();
    setCategoriesList(cat);
    const tag = getTags();
    setTagsList(tag);
  }, [id]);

  useEffect(() => {
    console.log('post.sections changed:', post.sections);
  }, [post.sections]);

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
      } else if (name.startsWith('videoUrl')) {
        updatedSections[index].videoUrl = value;
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

  const handleAddSection = () => {
    setPostEdit((prevState) => {
      const updatedSections = [
        ...prevState.post.sections,
        { sectionTitle: '', content: '', contentType: 'text' },
      ];

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
  const handleImageUrl = (imageUrl, index) => {
    const imageUrlRoot = `./images/${imageUrl}`;
    setSelectedImages((prevImage) => {
      const updatedSelectedImages = [...prevImage];
      updatedSelectedImages[index] = imageUrlRoot;
      return updatedSelectedImages;
    });
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
  const handleHeaderImageChange = (url) => {
    const imageUrlRoot = `./images/${url}`;
    setPostEdit((prevPostEdit) => ({
      ...prevPostEdit,
      imageUrl: imageUrlRoot,
    }));
  };
  const { title, subtitle, author, date, excerpt, imageUrl, categories, tags } =
    postEdit;
  return {
    title,
    subtitle,
    author,
    date,
    excerpt,
    imageUrl,
    post,
    view,
    selectedImages,
    setSelectedImages,
    postEdit,
    setPostEdit,
    categoriesList,
    categories,
    tagsList,
    tags,
    isEditMode,
    headerImageUrl,
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
  };
};
