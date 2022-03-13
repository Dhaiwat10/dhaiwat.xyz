import type { NextPage } from 'next';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Web3Modal } from '../components/Web3Modal';
import { Entry, getEntries } from './api/entries';
import { Account } from '../components/Account';
import { useState } from 'react';

const MyLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} target='_blank' color='green.300'>
    {children}
  </Link>
);

const useEntries = () => {
  const [entries, setEntries] = useState<Entry[]>();

  const fetchEntries = async () => {
    const data = await fetch('/api/entries').then((r) => r.json());
    setEntries(data.entries as Entry[]);
  };

  return {
    entries,
    fetchEntries,
  };
};

interface HomeProps {
  entries: Entry[];
}

const Home: NextPage<HomeProps> = ({ entries }) => {
  const { entries: latestEntries, fetchEntries } = useEntries();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = latestEntries || entries;

  return (
    <Container py={20}>
      <Web3Modal
        isOpen={isOpen}
        onClose={onClose}
        fetchEntries={fetchEntries}
      />
      <VStack spacing={8}>
        <Box
          textAlign='center'
          display='flex'
          flexDirection='column'
          gap='20px'
        >
          <Avatar src='/avi_cropped.jpeg' mx='auto' size='2xl' />
          <Heading as='h1' size='xl'>
            Dhaiwat Pandya 🚀
          </Heading>
          <Heading
            as='a'
            size='sm'
            textDecoration='underline'
            href='https://etherscan.io/address/0xD933A3Ec19065dfAEc5CCaA4bfD6cd1dd370D9F3'
            target='_blank'
          >
            dhaiwat.eth
          </Heading>
          <HStack marginX='auto'>
            <Button
              variant='outline'
              as='a'
              href='https://twitter.com/dhaiwat10'
              target='_blank'
            >
              Twitter
            </Button>
            <Button
              variant='outline'
              as='a'
              href='https://github.com/dhaiwat10'
              target='_blank'
            >
              Github
            </Button>
            <Button
              variant='outline'
              as='a'
              href='https://mirror.xyz/dhaiwat.eth'
              target='_blank'
            >
              Mirror
            </Button>
          </HStack>
          <Text>
            Web3 frontend engineer at{' '}
            <MyLink href='https://mazury.xyz'>Mazury.</MyLink> Building free,
            open-source software with{' '}
            <MyLink href='https://twitter.com/developer_dao'>
              Developer DAO
            </MyLink>{' '}
            and{' '}
            <MyLink href='https://twitter.com/moonshotcollect'>
              the Moonshot Collective.
            </MyLink>
          </Text>

          <VStack>
            <Heading as='h3' size='md'>
              My best work
            </Heading>
            <List>
              <ListItem>
                <MyLink href='https://github.com/developer-dao/web3-ui'>
                  web3-ui
                </MyLink>
              </ListItem>
              <ListItem>
                <MyLink href='https://mirror.xyz/dhaiwat.eth/O5CK6Tjfv8uhl6FPbjT0yZ8LUwViDPWGYHdu9khRWpM'>
                  A guide to Web3 for Web2 frontend devs
                </MyLink>
              </ListItem>
              <ListItem>
                <MyLink href='https://github.com/dhaiwat10/react-link-preview'>
                  react-link-preview
                </MyLink>
              </ListItem>
            </List>
          </VStack>
        </Box>
        <Divider />
        <Box textAlign='center'>
          <Heading size='lg'>📓 Guestbook entries</Heading>
          <Heading as='h2' size='xs'>
            These kind people said gm.
          </Heading>
        </Box>
        <Button onClick={onOpen}>Sign my guestbook</Button>
        <VStack
          width={{
            sm: '100%',
            md: '50%',
            lg: '33%',
            xl: '25%',
          }}
          height='20vh'
        >
          {data.map((entry) => (
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
