"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrivacyPolicy, selectPrivacyPolicy } from '../../../store/privacySlice'; // Adjust the import path
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useLocale } from '@/app/utils/Constants';
import { AppDispatch } from '@/store';

const PrivacyPage = () => {
  const dispatch: AppDispatch = useDispatch(); // Dispatch from Redux
  const locale = useLocale();
  const { loading, error } = useSelector((state: any) => state.privacy);
  const privacyContent = useSelector(selectPrivacyPolicy);

  useEffect(() => {
    dispatch(fetchPrivacyPolicy(locale));
  }, [locale, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const replaceLinks = (text: string) => {
    return text
      .replace(
        'tos_link',
        '<a href="/termsofservice" style="color: #007bff; text-decoration: none;">Terms of Service</a>'
      )
      .replace(
        'cookie_policy_link',
        '<a href="/cookiepolicy" style="color: #007bff; text-decoration: none;">Cookie Policy</a>'
      );
  };

  return (
    <MainContainer>
    <Background className="absolute top-0 h-[800px] w-full" />
    <section className="flex justify-center px-5 z-10">
      <DivLeft className="absolute bottom-1/3 lg:top-1/4 md:top-1/4 sm:top-1/3 left-0">
        <div className="relative w-[300px] h-[300px]">
          <img
            src="/img/Rectangle-left.png"
            alt="rectangle-left"
            className="absolute h-[400px] blur-[30px] top-[-60px]"
          />
          <BackgroundLeftImg
            src="/img/work/background-left.svg"
            alt="background-left"
          />
        </div>
      </DivLeft>
      <div className="top-0 right-0 absolute">
        <div className="relative w-[300px] h-[500px]">
          <img
            src="/img/Rectangle-right.png"
            alt="rectangle-right"
            className="absolute h-[400px] blur-[25px]"
          />
          <BackgroundRightImg
            src="/img/work/background-left.svg"
            alt="background-right"
          />
        </div>
      </div>
    </section>
    <ContentContainer className="flex justify-center z-10">
      <WhiteCard className="bg-white p-10 rounded-lg shadow-lg mt-16">
        <h1 className="text-2xl font-bold mb-4">{privacyContent?.title || "Privacy Policy"}</h1>
        {privacyContent?.sections.map((section: any, index: number) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
            <p className="text-base leading-6" dangerouslySetInnerHTML={{ __html: replaceLinks(section.content) }} />
          </div>
        ))}
      </WhiteCard>
    </ContentContainer>
  </MainContainer>
  );
};

export default PrivacyPage;

// Styled components here...
// styled components

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #0d1b2a;
`;

const ContentContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px; /* Ensure padding inside the max width */
`;

const Background = styled.div`
  width: 100%;
  background-color: #0d1b2a;

  @media (max-width: 327px) {
    height: 766px;
  }
`;

const DivLeft = styled.div`
  @media (max-width: 627px) {
    bottom: 38%;
  }
  @media (max-width: 400px) {
    bottom: 15%;
  }
  @media (max-width: 279px) {
    display: none;
  }
`;

const BackgroundLeftImg = styled.img`
  width: 308.239px;
  height: 252.322px;
  position: absolute;
  top: 0;
  left: 10px;

  @media (max-width: 639px) {
    width: 200px;
  }
  @media (max-width: 279px) {
    display: none;
  }
`;

const BackgroundRightImg = styled.img`
  width: 308.239px;
  height: 252.322px;
  position: absolute;
  top: 35px;
  right: 0;

  @media (max-width: 279px) {
    display: none;
  }
`;

const WhiteCard = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 16px; /* Adjust this value based on the height of your navbar */

  @media (max-width: 327px) {
    padding: 20px;
  }
`;

