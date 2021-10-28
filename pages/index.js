import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import {
  Container,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Image,
  StackDivider,
  VStack,
  Box,
} from '@chakra-ui/react';

import { texts } from '../texts/texts';

import { getAllfilesMetadata } from '../lib/mdx';

export default function Home({ posts, languaje }) {
  return (
    <Container
      maxWidth='container.md'
      padding='6'
      background='gray.50'
      centerContent
    >
      <Text fontSize='6xl' align='justify'>
        {texts.index.greetings[languaje]}
      </Text>
      <Text color='red' align='justify'>
        DISCLAIMER: This website is currently UNDER CONSTRUCTION.
      </Text>
      <Text align='justify'>{texts.index.description[languaje]}</Text>
      <Image
        borderRadius='full'
        src='https://media-exp1.licdn.com/dms/image/C4D03AQE_TZR7ksE3Aw/profile-displayphoto-shrink_800_800/0/1625553620807?e=1640822400&v=beta&t=hNmvVQf6pqtVUSs6rbK1FHrk69RMfqZCDMZdxTnAUe0'
        alt='Picture of the author'
        boxSize='250px'
        mt='3'
        mb='3'
      />
      <Container maxWidth='container.lg' padding='6' centerContent>
        <Text align='justify'>{texts.index.aboutme[languaje]}</Text>
      </Container>
      <Container maxWidth='container.lg' padding='4'>
        <Text fontSize='4xl'>Posts:</Text>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          {posts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`}>
              <Box
                as='button'
                borderRadius='md'
                p='3'
                bg='#DBF5F0'
                _hover={{
                  background: 'white',
                }}
              >
                <Text fontSize='xl'>{post.tittle}</Text>
                <Text fontSize='xs'>{post.date}</Text>
                <Text align='left'>{post.description}</Text>
              </Box>
            </Link>
          ))}
        </VStack>
      </Container>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllfilesMetadata();
  return {
    props: {posts},
  };
}
