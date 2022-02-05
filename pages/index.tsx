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
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  return (
    <Container textAlign='center'>
      <VStack>
        <Heading>Welcome</Heading>
        <Button onClick={onOpen}>Sign my guestbook</Button>
        <Web3Modal isOpen={isOpen} onClose={onClose} />
        <Divider />
        <Heading>Entries</Heading>
        <VStack alignItems='start'>
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
