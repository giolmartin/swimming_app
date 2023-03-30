import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../../context/blog.context';
import ReactMarkdown from 'react-markdown';

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
  const { selectedPost, selectPost } = useBlogContext();

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
  // if (!selectedPost) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BlogPostContainer>
      {/*  Root level -nice hack*/}
      <Image src={`/${imageUrl}`} alt={title} />
      <Title>{title}</Title>
      <AuthorDate>
        Written by {author} on {date}
      </AuthorDate>
      <Introduction>{introduction}</Introduction>
      {sections.map((section, index) => {
        try {
          if (section.contentType && section.contentType === 'text') {
            return (
              <Section key={index}>
                <SectionTitle>{section.sectionTitle}</SectionTitle>
                <ReactMarkdown>{section.content}</ReactMarkdown>
              </Section>
            );

            //TODO: Add image and video sections
          } else if (section.contentType === 'image') {
            return <h2>Image</h2>;
          } else if (section.contentType === 'video') {
            return <h2>Video</h2>;
          }
        } catch {
          return <h2>error in sections</h2>;
        }
      })}

      <Conclusion>{conclusion}</Conclusion>
    </BlogPostContainer>
  );
};

export default BlogPost;
