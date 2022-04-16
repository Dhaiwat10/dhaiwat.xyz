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
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Web3Modal } from '../components/Web3Modal';
import { Entry, getEntries } from './api/entries';
import { Account } from '../components/Account';
import { useEffect, useMemo, useState } from 'react';
import { Photo } from '../components/Photo';

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

const importAll = (r: any) => r.keys().map(r);

const Home: NextPage<HomeProps> = ({ entries }) => {
  const { entries: latestEntries, fetchEntries } = useEntries();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [guestbookExpanded, setGuestbookExpanded] = useState(false);

  const data = latestEntries || entries;

  const entriesToBeShown = useMemo(() => {
    return data.reverse().slice(0, guestbookExpanded ? data.length : 10);
  }, [data, guestbookExpanded]);

  const collapseGuestbook = () => setGuestbookExpanded(false);
  const expandGuestbook = () => setGuestbookExpanded(true);

  const [photos, setPhotos] = useState<any[]>();

  useEffect(() => {
    setPhotos(
      importAll(
        // @ts-ignore
        require.context('../public/memories/', false, /\.(png|jpe?g|svg)$/)
      )
    );
  }, []);

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
            web3 frontend engineer at{' '}
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
                <MyLink href='https://github.com/dhaiwat10/create-web3-frontend'>
                  create-web3-frontend
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
        >
          {entriesToBeShown.map((entry) => (
            <Account key={entry.address} address={entry.address} />
          ))}
        </VStack>
        {guestbookExpanded ? (
          <Button onClick={collapseGuestbook}>Collapse</Button>
        ) : (
          <Button onClick={expandGuestbook}>Expand Guestbook</Button>
        )}

        <Divider />

        <Box textAlign='center'>
          <Heading size='lg'>📸 Some memories</Heading>
          <Heading as='h2' size='xs'>
            Places I&apos;ve been to and the people I&apos;ve met
          </Heading>
        </Box>

        <SimpleGrid columns={1} gap={12} justifyItems='center'>
          {photos?.map((photo, idx) => {
            return <Photo src={photo.default.src} alt='frens' key={idx} />;
          })}
        </SimpleGrid>
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
