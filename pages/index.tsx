import type { NextPage, NextPageContext } from 'next';
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Web3Modal } from '../components/Web3Modal';
import { useAccount } from 'wagmi';
import { Entry, getEntries } from './api/entries';
import { Account } from '../components/Account';

interface HomeProps {
  entries: Entry[];
}

const Home: NextPage<HomeProps> = ({ entries }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container pt={20}>
      <VStack spacing={8}>
        <Box textAlign='center'>
          <Heading as='h1' size='xl'>Dhaiwat Pandya</Heading>
          <Heading
            as='a'
            size='sm'
            textDecoration='underline'
            href='https://etherscan.io/address/0xD933A3Ec19065dfAEc5CCaA4bfD6cd1dd370D9F3'
            target='_blank'
          >
            dhaiwat.eth
          </Heading>
        </Box>
        <Button onClick={onOpen}>Sign my guestbook</Button>
        <Web3Modal isOpen={isOpen} onClose={onClose} />
        <Divider />
        <Box textAlign='center'>
          <Heading size='lg'>📓 Guestbook entries</Heading>
          <Heading as='h2' size='xs'>
            These kind people said gm.
          </Heading>
        </Box>
        <VStack
          width={{
            sm: '100%',
            md: '50%',
            lg: '33%',
            xl: '25%',
          }}
        >
          {entries.map((entry) => (
            <Account key={entry.address} address={entry.address} />
          ))}
        </VStack>

        <HStack>
          <Button as='a' href='https://twitter.com/dhaiwat10' target='_blank'>
            Twitter
          </Button>
          <Button as='a' href='https://github.com/dhaiwat10' target='_blank'>
            Github
          </Button>
          <Button as='a' href='https://mirror.xyz/dhaiwat.eth' target='_blank'>
            Mirror
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const { data } = await getEntries();
  return {
    props: { entries: data },
  };
};

export default Home;
