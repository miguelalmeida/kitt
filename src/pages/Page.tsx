import React from 'react';
import { useParams } from 'react-router';
import DashboardContainer from '../components/DashboardContainer';
import './Page.css';
import PageContainer from './PageContainer';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  return (
    <PageContainer name={name}>
      <DashboardContainer />
    </PageContainer>
  );
};

export default Page;
