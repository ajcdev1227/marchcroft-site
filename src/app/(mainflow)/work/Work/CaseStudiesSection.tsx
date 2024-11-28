import styled from "styled-components";

import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

export const CaseStudiesSection = ({ data }: any) => {
  const { t } = useTranslation();
  if (!data) return null;
  var blogContent = data?.blogContent;
  console.log(data);
  return (
    <Fade cascade delay={500}>
      <section className='flex flex-col mx-auto max-w-[1111px]'>
        <div className='px-3'>
          <Background
            src={data?.src}
            className='w-full lg:px-14 md:px-5 sm:px-5'
          />
        </div>
        <section className='mt-10 container mx-auto mb-10'>
          {/* <MParagraph className='text-black text-base lg:px-14 md:px-5 sm:px-5'>
            {data && t(`${data?.title}`)}
          </MParagraph> */}
          <img src={data?.image?.data?.attributes?.url} className="mt-5 w-full lg:px-14 md:px-5 sm:px-5" alt='img' />
          {/* <p className='whitespace-pre-line font-objektiv-mk2 lg:text-[32px] md:text-[32px] sm:text-[20px] text-[20px] text-center lg:text-left md:text-left sm:text-center text-[#1A40A9] mt-6 lg:px-14 md:px-5 sm:px-5'>
            {data && t(`${data?.title1}`)}
          </p> */}
          {blogContent && blogContent.map(({ title, content, image }: { title?: string, content?: string, image?: string }) => (
            <div key={title} className="lg:px-14 md:px-5 sm:px-5">
              {image && (
                <div className='p-20'>
                  <Background
                    src={image}
                    className='w-full'
                  />
                </div>
              )}
              <div key={title} className="mt-6">
                {title && (
                  <p className='whitespace-pre-line font-objektiv-mk2 text-2xl lg:text-[32px] md:text-[32px] sm:text-xl text-[#1A40A9] text-center lg:text-left md:text-left sm:text-center'>
                    {data && t(`${title}`)}
                  </p>
                )}
                {content && (
                  <p
                  className='font-objektiv-mk2 mt-5'
                  dangerouslySetInnerHTML={{
                    __html: data && t(`${content.replace(/\n/g, '<br>')}`)
                  }}
                />
                )}
              </div>
            </div>
          ))}
        </section>
      </section>
    </Fade>
  );
};

//styled components

const Background = styled.img``;
const ClientSection = styled.section`
  background: var(
    --linear-2,
    linear-gradient(
      123deg,
      #2f25a5 0%,
      #2934ae 14%,
      #1a5ec8 40%,
      #03a1f2 77%,
      #00acf9 83%
    )
  );
`;

const MoreSection = styled.section`
  background: #0d1b2a;
`;

const MoreLeftImg = styled.div`
  width: 320px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 320px;
  opacity: 0.699999988079071;
  background: var(
    --linear-2,
    linear-gradient(
      123deg,
      #2f25a5 0%,
      #2934ae 14%,
      #1a5ec8 40%,
      #03a1f2 77%,
      #00acf9 83%
    )
  );
  filter: blur(110.5px);

  @media (max-width: 699px) {
    display: none;
  }
`;

const MoreRightImg = styled.div`
  width: 320px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 320px;
  opacity: 0.699999988079071;
  background: var(
    --linear-2,
    linear-gradient(
      123deg,
      #2f25a5 0%,
      #2934ae 14%,
      #1a5ec8 40%,
      #03a1f2 77%,
      #00acf9 83%
    )
  );
  filter: blur(110.5px);

  @media (max-width: 699px) {
    display: none;
  }
`;

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
