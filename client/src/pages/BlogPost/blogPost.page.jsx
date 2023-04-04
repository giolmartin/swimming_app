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
  const { selectedPost, selectPost, formatDate } = useBlogContext();

  useEffect(() => {
    const fetchPost = async () => {
      if (!selectedPost || selectedPost._id !== id) {
        await selectPost(id);
      }
    };
    fetchPost();
  }, [id, selectedPost, selectPost]);

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  const { title, imageUrl, introduction, sections, conclusion, author, date } =
    selectedPost;

  console.log(sections);

  return (
    <BlogPostContainer>
      <Image src={`/${imageUrl}`} alt={title} />

      <Title>
        <ReactMarkdown>{title}</ReactMarkdown>
      </Title>
      <AuthorDate>
        Written by {author} on {formatDate(date)}
      </AuthorDate>
      <Introduction>
        <ReactMarkdown>{introduction}</ReactMarkdown>
      </Introduction>
      {sections &&
        sections.map((section, index) => {
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
