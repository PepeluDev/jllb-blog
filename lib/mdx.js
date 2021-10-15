import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const rootDir = process.cwd();

const postsDir = path.join(rootDir, "posts");

export const getFiles = () => fs.readdirSync(postsDir);

const getFileMdxSource = ( slug ) => fs.readFileSync(path.join(rootDir, "posts", `${slug}.mdx`,"."), "utf-8");

export const getFileBySlug = async (slug) => {
  const mdxSource = getFileMdxSource(slug);

  const { data, content } = matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontmatter: {
      slug: slug,
      ...data,
    },
  };
};

export const getAllfilesMetadata = async () => {
  const files = getFiles();
  const allfilesMetaData = files.reduce((allposts, currentslug) => {
    const slug = currentslug.replace(".mdx", "")
    const mdxSource = getFileMdxSource( slug);
    const { data } = matter(mdxSource);
    return [
      { ...data, slug: slug },
      ...allposts,
    ];
  }, []);

  // sort 
  allfilesMetaData.sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  });

  return allfilesMetaData;
};
