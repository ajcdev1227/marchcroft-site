/** @format */

import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const WorkHistoryCard = ({
  id,
  src,
  date,
  title,
  slug,
  content,
  tags,
}: {
  id: any;
  src: string;
  date: string;
  title: string;
  slug: string;
  content: string;
  tags: any;
}) => {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate(`/work/casestudies/${slug}`);
  // };

  const { t, i18n } = useTranslation();

  return (
    <Card>
      <img src={src} className="h-[278px]" alt={src} />
      <p className="text-base font-normal font-objektiv-mk2">{t(`${date}`)}</p>
      <p className="font-objektiv-mk2 font-bold text-[20px]">{t(`${title}`)}</p>
      {/* {content !== null ? (
                <p className="font-objektiv-mk2 text-base font-normal">{t(`${content}`)}</p>
            ) : null} */}
      <div className="flex gap-3">
        {tags?.map((item: any, index: any) => (
          <React.Fragment key={index}>
            <p className="p-2 text-black border rounded-lg">{item}</p>
          </React.Fragment>
        ))}
      </div>
      <Link href={`/work/casestudies/${slug}`} passHref legacyBehavior>
        <StyledLink
          style={{
            width:
              i18n.language === "pt" || i18n.language === "gr"
                ? "250px"
                : "166px",
          }}
        >
          {t("Read more")}
        </StyledLink>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 1023px) {
    padding: 10px;
  }
`;
const StyledLink = styled.a`
  display: inline-block;
  width: 166px;
  height: 55px;
  padding: 10px;
  border-radius: 29px;
  border: 1px solid var(--neutral-black, #1e1e1e);
  background: var(--neutral-white, #fff);
  margin-bottom: 20px;
  text-align: center;
  line-height: 35px;
`;