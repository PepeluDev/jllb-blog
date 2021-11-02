import Link from 'next/link';

import {
  Container,
  Heading,
  Text,
  StackDivider,
  VStack,
  Box,
} from '@chakra-ui/react';

function MyPostList({ posts }) {
  return (
    <Container maxWidth='container.lg' padding='3'>
      <Heading id='latestposts' align='left' marginBottom='2'>
        Posts:
      </Heading>
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
              bg='gray.200'
              _hover={{
                background: 'white',
              }}
            >
              <Heading align='left' marginBottom='1' fontSize='xl'>
                {post.tittle}
              </Heading>
              <Text align='left' fontSize='xs'>
                {post.date}
              </Text>
              <Text align='left'>{post.description}</Text>
            </Box>
          </Link>
        ))}
      </VStack>
    </Container>
  );
}

export default MyPostList;
