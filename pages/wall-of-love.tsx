import { Box, Button, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { WallOfLove } from '../components/WallOfLove';

const WallOfLovePage: NextPage = () => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <Box textAlign='center' padding={6}>
      <Button onClick={goBack}>go back</Button>
      <Heading my={6}>🤗 nice things ppl have said about me</Heading>

      <WallOfLove />
    </Box>
  );
};

export default WallOfLovePage;
