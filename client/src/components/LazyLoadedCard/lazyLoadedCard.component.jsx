import React from 'react';
import { easeIn, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogPostCard from '../BlogPostCard/blogPostCard.component';
import MinimalBlogCard from '../MinimalBlogPostCard/minimalBlogPostCard.component';

const LazyLoadedCard = ({ post }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 0.5, ease: easeIn }}
    >
      <MinimalBlogCard post={post} />
    </motion.div>
  );
};

export default LazyLoadedCard;
