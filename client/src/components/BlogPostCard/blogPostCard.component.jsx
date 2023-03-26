import React from 'react'
import { Card, CardImage, CardContent, CardTitle, CardDate, CardExcerpt } from './blogPostCard.styles'

const BlogPostCard = ({post}) => {
    return (
        <Card>
          <CardImage src={post.imageUrl} alt={post.title} />
          <CardContent>
            <CardTitle>{post.title}</CardTitle>
            <CardDate>{post.date}</CardDate>
            <CardExcerpt>{post.excerpt}</CardExcerpt>
          </CardContent>
        </Card>
      );
}

export default BlogPostCard