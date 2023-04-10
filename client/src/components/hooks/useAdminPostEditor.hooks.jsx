import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../context/admin.context';
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
    uploadImage,
  } = useAdminContext();

  const isEditMode = id !== 'create';
  const [view, setView] = useState([true]);
  const [postEdit, setPostEdit] = useState(postPrototype);
  const [selectedImages, setSelectedImages] = useState([]);
  const [headerImageUrl, setHeaderImageUrl] = useState('');

  //Categories and Tags ony for dev

  //-------------FIXME: ------------------------------------------
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [sections, setSections] = useState(postEdit.sections || []);

  const [headerImageFile, setHeaderImageFile] = useState(null);
  const [sectionImageFiles, setSectionImageFiles] = useState([]);

  //Once Api is up and running, remove this
  const [categoriesList, setCategoriesList] = useState([]);

  const [tagsList, setTagsList] = useState([]);

  // console.log('UseAdminPostEditor mounted');

  useEffect(() => {
    const setMode = async () => {
      if (isEditMode) {
        const post = await selectPost(id);
        setPostEdit(post);
        // console.log(`Edit mode`, selectedPost);
      } else {
        // console.log(`Create mode`, postEdit);
        setPostEdit(postEdit);
      }
      const cat = await getCategories();
      setCategoriesList(cat);
      const tag = await getTags();
      setTagsList(tag);
    };
    setMode();
  }, [id]);

  useEffect(() => {
    // console.log(`HOOK postEdit: ${JSON.stringify(postEdit)}`);
    // console.log(`Sections Post EDit `, postEdit.sections);
    setSections(postEdit.sections);
    setTitle(postEdit.title);
    setSubtitle(postEdit.subtitle);
    setAuthor(postEdit.author);
    setDate(postEdit.date);
    setPostTitle(postEdit.postTitle);
    setIntroduction(postEdit.introduction);
    setConclusion(postEdit.conclusion);
    setExcerpt(postEdit.excerpt);
    setImageUrl(postEdit.imageUrl);
    setCategories(postEdit.categories);
    setTags(postEdit.tags);
  }, [postEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPostEdit({ ...postEdit, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let headerImageUrlRoot = imageUrl;
    if (headerImageFile) {
      headerImageUrlRoot = await uploadImage(headerImageFile);
    }

    const sectionImagesUrls = await Promise.all(
      sectionImageFiles.map(async (sectionImageFile, index) => {
        if (sectionImageFile && sections[index].contentType === 'image') {
          const updatedImageURL = await uploadImage(sectionImageFile);
          return updatedImageURL;
        }
        return sections[index]?.imageUrl || '';
      })
    );

    // Create a new post object with the uploaded image URLs
    const newPost = {
      ...postEdit,
      imageUrl: headerImageUrlRoot.imageUrl,
      sections: sections.map((section, index) => {
        const sectionImageUrl =
          sectionImagesUrls[index]?.imageUrl || section.imageUrl || '';
        return {
          ...section,
          imageUrl: sectionImageUrl,
        };
      }),
    };

    if (isEditMode) {
      updatePost(newPost._id, newPost);
    } else {
      console.log('Create post');
      createPost(newPost);
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
      const updatedSections = [...prevState.sections];

      let updatedPostTitle = prevState.postTitle;
      let updatedIntroduction = prevState.introduction;
      let updatedConclusion = prevState.conclusion;

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
        postTitle: updatedPostTitle,
        introduction: updatedIntroduction,
        sections: updatedSections,
        conclusion: updatedConclusion,
      };
    });
  };

  const handleAddSection = () => {
    setPostEdit((prevState) => {
      const updatedSections = [
        ...prevState.sections,
        { sectionTitle: '', content: '', contentType: 'text' },
      ];

      return {
        ...prevState,
        sections: updatedSections,
      };
    });
    setView((prevView) => [...prevView, true]);
  };

  const handleRemoveSection = (index) => {
    setPostEdit((prevState) => {
      const updatedSections = prevState.sections.filter((_, i) => i !== index);
      return {
        ...prevState,
        sections: updatedSections,
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
      const updatedSections = [...prevState.sections];
      updatedSections[index].sectionTitle = '';
      return {
        ...prevState,
        sections: updatedSections,
      };
    });
  };

  //Handle Content Type Change, image, video, text
  const handleContentTypeChange = (e, index) => {
    const { value } = e.target;
    setPostEdit((prevState) => {
      const updatedSections = [...prevState.sections];
      updatedSections[index].contentType = value;
      return {
        ...prevState,
        sections: updatedSections,
      };
    });
  };

  const handleImageUrl = async (image, index) => {
    setSectionImageFiles((prevState) => {
      const updatedSectionImageFiles = [...prevState];
      updatedSectionImageFiles[index] = image;
      return updatedSectionImageFiles;
    });

    setPostEdit((prevState) => {
      const updatedSections = [...prevState.sections];
      updatedSections[index].imageUrl = URL.createObjectURL(image);
      return {
        ...prevState,
        sections: updatedSections,
      };
    });
  };
  const handleHeaderImageChange = async (image) => {
    setHeaderImageFile(image);
  };

  return {
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
