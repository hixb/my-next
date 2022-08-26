import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import pageIndex from "../styles/pages/index.module.scss";

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <div className={pageIndex.hello}>hello</div>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
