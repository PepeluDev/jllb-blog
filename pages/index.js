import { Container, Heading, Text, Image } from '@chakra-ui/react';

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
      <Heading marginTop='3' marginBottom='4' fontSize='5xl' align='center'>
        {texts.index.greetings[languaje]}
      </Heading>
      <Heading fontSize='md' color='red.300' align='center' marginBottom='4'>
        UNDER CONSTRUCTION
      </Heading>
      <Text fontSize='md' marginBottom='3' align='center'>
        {texts.index.description[languaje]}
      </Text>
      <Image
        borderRadius='full'
        src={texts.authorpicture}
        alt='Picture of the author'
        boxSize='250px'
        mt='3'
        mb='3'
      />
      <Container maxWidth='container.lg' padding='3' centerContent>
        <Text align='justify'>{texts.index.aboutme[languaje]}</Text>
      </Container>
      <MyPostList posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllfilesMetadata();
  return {
    props: { posts },
  };
}
