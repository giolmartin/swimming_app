import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';

import { useBlogContext } from '../../context/blog.context';

import VideoPlayer from '../../components/VideoPlayer/videoPlayer.component';

import Comments from '../../components/Comments/comments.component';

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
  CommentTitle,
} from './blogPost.styles';
import LoadingSpinner from '../../components/LoadingSpinner/loadingSpinner.component';

const BlogPost = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { selectedPost, selectPost, formatDate } = useBlogContext();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      if (!selectedPost || selectedPost._id !== id) {
        await selectPost(id);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id, selectedPost, selectPost]);

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  const { title, imageUrl, introduction, sections, conclusion, author, date } =
    selectedPost;

  console.log(selectedPost);
  return (
    <BlogPostContainer>
      {loading ? (
        <LoadingSpinner color='#FFC107' size={150} />
      ) : (
        <>
          <Image src={imageUrl} alt={title} />

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
                    <Content>
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </Content>
                  </Section>
                );
              } else if (section.contentType === 'image') {
                return (
                  <Section key={index}>
                    <SectionTitle>{section.sectionTitle}</SectionTitle>
                    <SectionImage
                      src={section.imageUrl}
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
          <CommentTitle> Comments</CommentTitle>
          <Comments postId={id} />
        </>
      )}
    </BlogPostContainer>
  );
};

export default BlogPost;
