import { Container, Text, Image } from '@chakra-ui/react';

import { texts } from '../texts/texts';
import MyPostList from '../components/list/MyPostList';

import { getAllfilesMetadata } from '../lib/mdx';

export default function Home({ posts, languaje }) {
  return (
    <Container
      maxWidth='container.md'
      padding='6'
      background='gray.50'
      centerContent
    >
      <Text fontSize='6xl' align='center'>
        {texts.index.greetings[languaje]}
      </Text>
      <Text color='red' align='center'>
        DISCLAIMER: This website is currently UNDER CONSTRUCTION.
      </Text>
      <Text align='center'>{texts.index.description[languaje]}</Text>
      <Image
        borderRadius='full'
        src={texts.authorpicture}
        alt='Picture of the author'
        boxSize='250px'
        mt='3'
        mb='3'
      />
      <Container maxWidth='container.lg' padding='6' centerContent>
        <Text align='justify'>{texts.index.aboutme[languaje]}</Text>
      </Container>
      <MyPostList id='latestposts' posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllfilesMetadata();
  return {
    props: { posts },
  };
}
