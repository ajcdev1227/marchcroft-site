/** @format */

import { useState } from "react";
import styled from "styled-components";
import clsx from "clsx";

import { useTranslation } from "react-i18next";
import { WorkHistoryCard } from "../../../components/WorkHistoryCard";
import { filteringTitle } from "../../../utils/Constants";

export const WorkSection = ({ data }: any) => {
  const [visibleCards, setVisibleCards] = useState<number>(3);
  const [filterData, setFilterData] = useState<string>("All");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const { t } = useTranslation();

  const handleFiltering = (item: string) => {
    setFilterData(item);
  };

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  if (!data) return null;

  return (
    <section className="flex flex-col justify-center">
      <section className="flex gap-3 mb-8 mt-6 flex-wrap">
        {filteringTitle?.map((item: string, index: any) => (
          <div key={index}>
            <button
              className={clsx(
                "border rounded-lg p-2",
                filterData === item ? "bg-blue-700 text-white" : "text-black",
              )}
              onClick={() => handleFiltering(item)}
            >
              {item}
            </button>
          </div>
        ))}
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10">
        {[...data]
          ?.sort(
            (a: any, b: any) =>
              new Date(b.attributes.date).getTime() -
              new Date(a.attributes.date).getTime(),
          )
          // .slice(0, visibleCards)
          ?.filter((item: any, i: any) => {
            if (filterData === "All") {
              return true;
            } else if (item?.attributes?.tags?.includes(filterData)) {
              return true;
            } else {
              return false;
            }
          })
          .map((item: any, i: any) => {
            const formattedDate = new Date(
              item.attributes.date,
            ).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            });

            return (
              <WorkHistoryCard
                key={item?.id}
                id={item?.id}
                src={item?.attributes?.image?.data?.attributes?.url}
                date={formattedDate}
                title={item?.attributes.blogTitle}
                slug={item?.attributes.slug}
                tags={item?.attributes.tags}
                content={item?.attributes.content}
              />
            );
          })}
      </section>
      {visibleCards < data?.data?.length && (
        <Button className="mx-auto mt-10" onClick={handleLoadMore}>
          {t("Load More")}
        </Button>
      )}
    </section>
  );
};

const Button = styled.button`
  border-radius: 29px;
  background: var(--primary-color, #1a40a9);
  width: 166px;
  height: 50px;
  padding: 10px;
  color: white;
`;
