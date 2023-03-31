import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../../context/blog.context';
import ReactMarkdown from 'react-markdown';
import VideoPlayer from '../../components/VideoPlayer/videoPlayer.component';
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
  SectionImage,
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

  const { title, imageUrl, author, date } = selectedPost;
  const { postTitle, introduction, sections, conclusion } = selectedPost.post;
  // if (!selectedPost) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BlogPostContainer>
      {/*  Root level -nice hack*/}
      <Image src={`/${imageUrl}`} alt={postTitle} />

      <Title>
        <ReactMarkdown>{postTitle}</ReactMarkdown>
      </Title>
      <AuthorDate>
        Written by {author} on {date}
      </AuthorDate>
      <Introduction>
        <ReactMarkdown>{introduction}</ReactMarkdown>
      </Introduction>
      {sections.map((section, index) => {
        if (section.contentType === 'text') {
          return (
            <Section key={index}>
              <SectionTitle>{section.sectionTitle}</SectionTitle>
              <ReactMarkdown>{section.content}</ReactMarkdown>
            </Section>
          );
        } else if (section.contentType === 'image') {
          return (
            <Section key={index}>
              <SectionTitle>{section.sectionTitle}</SectionTitle>
              <SectionImage
                src={`/${section.imageUrl}`}
                alt={section.sectionTitle}
              />
            </Section>
          );
        } else if (section.contentType === 'video') {
          return (
            <Section key={index}>
              <SectionTitle>{section.sectionTitle}</SectionTitle>
              <VideoPlayer url={section.videoUrl} />
            </Section>
          );
        } else {
          return null;
        }
      })}
      <Conclusion>
        <ReactMarkdown>{conclusion}</ReactMarkdown>
      </Conclusion>
    </BlogPostContainer>
  );
};

export default BlogPost;
