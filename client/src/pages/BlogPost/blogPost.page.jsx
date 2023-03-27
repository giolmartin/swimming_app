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
  const {
    // posts,
    selectedPost,
    // selectPost
  } = useBlogContext();

  // useEffect(() => {
  //   const selPost = async () => {
  //     if (!selectedPost || selectedPost.id !== id) {
  //       const post = await posts.find((post) => post.id === id);
  //       console.log(post);
  //       selectPost(post);
  //     }
  //   };
  // }, [id, posts, selectedPost, selectPost]);

  const { imageUrl, author, date } = selectedPost;
  const { title, introduction, sections, conclusion } = selectedPost.post;
  console.log(imageUrl);
  // if (!selectedPost) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BlogPostContainer>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <AuthorDate>
        Written by {author} on {date}
      </AuthorDate>
      <Introduction>{introduction}</Introduction>
      {selectedPost.sections.map((section, index) => (
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
