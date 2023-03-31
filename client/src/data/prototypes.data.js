export const postPrototype = {
  id: null,
  title: '',
  subtitle: '',
  author: '',
  date: '',
  excerpt: '',
  post: {
    postTitle: '',
    introduction: '',
    sections: [
      {
        sectionTitle: '',
        contentType: 'text', //text or 'image', 'video'
        content: '',
        imageUrl: '',
        videoUrl: '',
      },
    ],
    conclusion: '',
  },
  imageUrl: '',
  categories: [''],
  tags: [''],
};
