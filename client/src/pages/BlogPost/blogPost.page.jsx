import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../../context/blog.context';

import {
  BlogPostContainer,
  Title,
  Introduction,
  Section,
  SectionTitle,
  Content,
  Conclusion,
  Image,
  AuthorDate,
} from './blogPost.styles';

const BlogPost = () => {
  const { id } = useParams();
  const { posts, selectedPost, selectPost } = useBlogContext();

  // useEffect(() => {
  //   const selPost = async () => {
  //     if (!selectedPost || selectedPost.id !== id) {
  //       const post = await posts.find((post) => post.id === id);
  //       selectPost(post);
  //     }
  //   };
  //   selPost();
  // }, [id, posts, selectedPost, selectPost]);

  const { imageUrl, author, date } = selectedPost;
  const { title, introduction, sections, conclusion } = selectedPost.post;
  console.log(imageUrl);
  // if (!selectedPost) {
  //   return <div>Loading...</div>;
  // }
  console.log('Selected Post: ', selectedPost);
  return (
    <BlogPostContainer>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <AuthorDate>
        Written by {author} on {date}
      </AuthorDate>
      <Introduction>{introduction}</Introduction>
      {sections.map((section, index) => (
        <Section key={index}>
          <SectionTitle>{section.sectionTitle}</SectionTitle>
          <Content>{section.content}</Content>
        </Section>
      ))}
      <Conclusion>{conclusion}</Conclusion>
    </BlogPostContainer>
  );
};

export default BlogPost;
