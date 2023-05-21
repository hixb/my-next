import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <div className={"color-red text-12px"}>hello</div>
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
