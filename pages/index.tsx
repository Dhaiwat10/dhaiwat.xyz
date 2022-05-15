import type { NextPage } from 'next';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
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
import { useEffect, useMemo, useRef, useState } from 'react';
import { Photo } from '../components/Photo';
import { confetti } from '../confetti';
import { MyLink } from '../components/MyLink';
import { WallOfLove } from '../components/WallOfLove';
import { useRouter } from 'next/router';
import { places } from '../places';

const useEntries = () => {
  const [entries, setEntries] = useState<Entry[]>();

  const fetchEntries = async () => {
    const data = await fetch('/api/entries').then((r) => r.json());
    setEntries(data.entries as Entry[]);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return {
    entries,
    fetchEntries,
  };
};

interface HomeProps {
  entries: Entry[];
}

const importAll = (r: any) => r.keys().map(r);

const Home: NextPage<HomeProps> = () => {
  const router = useRouter();

  const { entries: data, fetchEntries } = useEntries();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [guestbookExpanded, setGuestbookExpanded] = useState(false);
  const [galleryExpanded, setGalleryExpanded] = useState(false);

  const entriesToBeShown = useMemo(() => {
    return data?.reverse().slice(0, guestbookExpanded ? data.length : 10);
  }, [data, guestbookExpanded]);

  const collapseGuestbook = () => setGuestbookExpanded(false);
  const expandGuestbook = () => setGuestbookExpanded(true);

  const collapseGallery = () => setGalleryExpanded(false);
  const expandGallery = () => setGalleryExpanded(true);

  const [photos, setPhotos] = useState<any[]>();

  const photosToBeShown = useMemo(() => {
    return photos?.slice(0, galleryExpanded ? photos.length : 5);
  }, [photos, galleryExpanded]);

  useEffect(() => {
    setPhotos(
      importAll(
        // @ts-ignore
        require.context('../public/memories/', false, /\.(png|jpe?g|svg)$/)
      )
    );
  }, []);

  const rainbowLinkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (rainbowLinkRef.current) {
      rainbowLinkRef.current.addEventListener('mouseover', () => {
        interval = setInterval(() => {
          confetti(rainbowLinkRef.current, {
            image: '/rocket.svg',
            width: `${Math.floor(Math.random() * 25) + 20}px`,
            height: `${Math.floor(Math.random() * 25) + 20}px`,
            elementCount: 7,
            duration: 3000,
            angle: 90,
            spread: 360,
            startVelocity: 20,
            stagger: 3,
            perspective: '500px',
            dragFriction: 0.12,
          });
          confetti(rainbowLinkRef.current, {
            image: '/fire.svg',
            width: `${Math.floor(Math.random() * 25) + 20}px`,
            height: `${Math.floor(Math.random() * 25) + 20}px`,
            elementCount: 7,
            duration: 3000,
            angle: 90,
            spread: 360,
            startVelocity: 20,
            stagger: 3,
            perspective: '500px',
            dragFriction: 0.12,
          });
        }, 160);
      });
      rainbowLinkRef.current.addEventListener('mouseout', () => {
        clearInterval(interval);
      });
    }
    return () => clearInterval(interval);
  }, [rainbowLinkRef]);

  const goToWallOfLove = () => router.push('/wall-of-love');

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
          <Avatar src='/avi_cropped.jpeg' mx='auto' size='xl' />
          <Heading as='h1' size='xl' ref={rainbowLinkRef}>
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
              Blog
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

          <Divider />

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
                  A guide to web3 for frontend devs
                </MyLink>
              </ListItem>
              <ListItem>
                <MyLink href='https://web3cheatsheet.xyz'>
                  web3cheatsheet.xyz
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

        <Text>
          When I&apos;m not writing code, I like to write about all things life.
          My weekends are reserved for the F1 races...unless there&apos;s a
          really nice party happening. Then that.
        </Text>

        <Divider />

        <Box textAlign='center'>
          <Heading size='lg'>📓 Guestbook entries</Heading>
          <Heading as='h2' size='xs'>
            These kind people said gm.
          </Heading>
        </Box>
        <Button onClick={onOpen} backgroundColor='teal.900'>
          Sign my guestbook! ✍️
        </Button>
        <VStack
          width={{
            sm: '100%',
            md: '50%',
            lg: '33%',
            xl: '25%',
          }}
        >
          {entriesToBeShown?.map((entry) => (
            <Account key={entry.address} address={entry.address} />
          ))}
        </VStack>
        {guestbookExpanded ? (
          <Button onClick={collapseGuestbook}>Collapse</Button>
        ) : (
          <Button onClick={expandGuestbook}>Expand Guestbook</Button>
        )}

        <Divider />

        <VStack textAlign='center'>
          <Heading size='lg'>❤️ Wall of love</Heading>
          <Heading as='h2' size='xs'>
            Some very nice things ppl have said about me!
          </Heading>

          <WallOfLove colCount={2} showFull={false} />

          <Button onClick={goToWallOfLove}>See more</Button>
        </VStack>

        <Divider />

        <Text>
          Travelling the world is a dream of mine. I love meeting people from
          different places &amp; backgrounds. I love hearing their stories. I
          love making new friends. I love partying with them!
        </Text>

        <Text>
          This year, I left my home in India to travel overseas to Dubai for the
          first time ever and that experience has changed my life forever.
        </Text>

        <Divider />

        <Box textAlign='center'>
          <Heading size='lg'>📍 Places I&apos;ve visited this year</Heading>
          <Heading as='h2' size='xs'>
            Traveling is my fav thing!
          </Heading>
        </Box>

        <SimpleGrid columns={4} gap={4}>
          {places.map((place) => (
            <Text key={place.name}>
              {place.name} {place.flag}
            </Text>
          ))}
        </SimpleGrid>

        <Divider />

        <Box textAlign='center'>
          <Heading size='lg'>📸 Some memories</Heading>
          <Heading as='h2' size='xs'>
            Places I&apos;ve been to and the people I&apos;ve met
          </Heading>
        </Box>

        <SimpleGrid columns={1} gap={12} justifyItems='center'>
          {photosToBeShown?.map((photo, idx) => {
            return <Photo src={photo.default.src} alt='frens' key={idx} />;
          })}
        </SimpleGrid>

        {galleryExpanded ? (
          <Button onClick={collapseGallery}>Collapse</Button>
        ) : (
          <Button onClick={expandGallery}>Expand Gallery</Button>
        )}

        <Divider />

        <Text>
          This site is{' '}
          <MyLink href='https://github.com/dhaiwat10/dhaiwat.xyz'>
            open source
          </MyLink>
        </Text>
      </VStack>
    </Container>
  );
};

export default Home;
