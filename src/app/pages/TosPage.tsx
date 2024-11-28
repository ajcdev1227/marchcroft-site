"use client";

/** @format */

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export const TosPage = () => {
  const [tosContent, setTosContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTos = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/privacies?filters[title]=terms-of-service`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const tosData = data.data[0]?.attributes?.json;

        if (tosData) {
          setTosContent(tosData);
        } else {
          setError("No Terms of Service content found.");
        }
      } catch (err) {
        console.error("Error fetching Terms of Service:", err);
        setError("Failed to fetch Terms of Service.");
      } finally {
        setLoading(false);
      }
    };

    fetchTos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MainContainer>
      <Helmet>
        <title>{tosContent?.title || "Terms of Service"}</title>
        <meta name="description" content="Terms of Service of Marchcroft Digital." />
        <meta name="keywords" content="terms of service, tos, legal, compliance" />
      </Helmet>
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
          <h1 className="text-2xl font-bold mb-4">{tosContent?.title || "Terms of Service"}</h1>
          {tosContent?.sections.map((section: any, index: number) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{section.heading}</h2>
              <p className="text-base leading-6">{section.content}</p>
            </div>
          ))}
        </WhiteCard>
      </ContentContainer>
    </MainContainer>
  );
};

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

export default TosPage;
