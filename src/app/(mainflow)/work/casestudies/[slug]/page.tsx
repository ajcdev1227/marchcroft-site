import CaseStudiesClient from "../CaseStudiesClient";
import { Metadata } from "next";

interface CaseStudies {
  img1: string;
  img2: string;
  title: string;
  title1: string;
  content1: string;
  title2: string;
  content2: string;
  title3: string;
  content3: string;
  title4: string;
  content4: string;
  content4_1?: string;
  title5: string;
  content5: string;
  title6: string;
  content6: string;
  title7?: string;
  content7?: string;
}

interface OurWork {
  src: string;
  blogTitle: string;
  content: string;
}

async function fetchCaseStudyData(slug: string) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(
    `${baseUrl}/api/blogs?filters[slug]=${slug}&populate=image&populate=blogContent`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await res.json();
  return data[0]?.attributes || {};
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudyData = await fetchCaseStudyData(params.slug);

  const caseStudiesData: CaseStudies[] = caseStudyData || [];
  const workData: OurWork = caseStudyData || {};
  const pageTitle = workData.blogTitle || "Case Study";
  const pageDescription = workData.content || "Read our latest case study.";
  const img = caseStudyData?.image?.data?.attributes?.url;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      images: img ? [{ url: img.split('?')[0] }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: img ? [img.split('?')[0]]: undefined,
    },
    icons: {
      icon: "/img/alpha.png", // Specify the path to your favicon here
    },
  };
}

const CaseStudiesPage = async ({ params }: { params: { slug: string } }) => {
  const caseStudyData = await fetchCaseStudyData(params.slug);

  const caseStudiesData: CaseStudies[] = caseStudyData || [];
  const workData: OurWork = caseStudyData || {};

  return (
    <section>
      <CaseStudiesClient caseStudiesData={caseStudiesData} workData={workData} />
    </section>
  );
};

export default CaseStudiesPage;
