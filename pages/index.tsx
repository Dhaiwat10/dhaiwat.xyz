import type { NextPage, NextPageContext } from 'next';
import {
  Button,
  Container,
  Divider,
  Heading,
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
    <Container>
      <VStack>
        <Heading>Dhaiwat Pandya</Heading>
        <Button onClick={onOpen}>Sign my guestbook</Button>
        <Web3Modal isOpen={isOpen} onClose={onClose} />
        <Divider />
        <Heading>Entries</Heading>
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
