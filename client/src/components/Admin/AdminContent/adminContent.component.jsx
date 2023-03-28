import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AdminContentContainer,
  AdminContentHeader,
  AdminContentLink,
  AdminContentParagraph,
  AdminContentSubHeader,
  Admin,
} from './adminContent.styles';

const AdminContent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <AdminContentContainer>
      <AdminContentHeader>Admin Dashboard</AdminContentHeader>
      <AdminContentSubHeader>Welcome, Gio</AdminContentSubHeader>
      <AdminContentParagraph>
        Here We will be able to edit, manage , update and delete Posts and
        users.{' '}
      </AdminContentParagraph>
      <AdminContentLink onClick={handleClick}>Go to Blogs</AdminContentLink>
    </AdminContentContainer>
  );
};

export default AdminContent;
