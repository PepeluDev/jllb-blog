import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx"
import styles from '../styles/Home.module.css'

export default function Post({source,frontmatter}) {
    return (
            <main className={styles.main}>
                <MDXRemote {...source}/>
            </main>
    )
}

export async function getStaticProps({params}){
    const {source, frontmatter} = await getFileBySlug(params.slug);
    return {
        props: {source,frontmatter}
    }
}

export async function getStaticPaths(){
    const posts = getFiles();
    const paths = posts.map((post) => ({
        params : {
            slug: post.replace(/\.mdx/, ""),
        },
    }));
    return {
        paths,
        fallback: false,
    }
}