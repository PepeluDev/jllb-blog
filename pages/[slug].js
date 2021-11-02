import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx"
import {
  Container,
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';

import { texts } from '../texts/texts';

const components = {
  h1: (props) => <Heading as='h1' marginY='2' fontSize='4xl' {...props} />,
  h2: (props) => <Heading as='h2' marginY='2' fontSize='2xl' {...props} />,
  p: (props) => <Text fontSize='md' align='justify' {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  ol: (props) => <OrderedList {...props} />,
  img: (props) => <Image mt='3' mb='3' {...props} />,
};

export default function Post({ source, frontmatter, languaje }) {
  return (
    <Container maxWidth='container.md' padding='6' background='gray.50'>
      <Text fontSize='xs' align='right'>
        {frontmatter.date}
      </Text>
      <Heading as='h1' fontSize='6xl'>
        {frontmatter.tittle}
      </Heading>
      <MDXRemote {...source} components={components} />
    </Container>
  );
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