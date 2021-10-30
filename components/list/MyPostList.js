import Link from 'next/link';

import { Container, Text, StackDivider, VStack, Box } from '@chakra-ui/react';

function MyPostList({ posts }) {
  return (
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
              <Text align='left' fontSize='xl'>
                {post.tittle}
              </Text>
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
