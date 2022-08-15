import {
  Container,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { MyLink } from '../components/MyLink';

const CVPage: NextPage = () => {
  return (
    <Container p='10'>
      <VStack textAlign='left' alignItems='start' spacing='4'>
        <Heading>Dhaiwat Pandya</Heading>
        <Text>
          21 year old devrel and engineer. Currently working as a devrel at{' '}
          <MyLink href='https://ankr.com'>Ankr</MyLink>. Prev frontend engineer
          at <MyLink href='https://mazury.xyz'>Mazury</MyLink>.
          <br />
          <MyLink href='https://twitter.com/developer_dao'>
            Developer DAO
          </MyLink>{' '}
          core contributor
        </Text>

        <VStack textAlign='left' alignItems='start'>
          <MyLink href='https://github.com/dhaiwat10'>GitHub</MyLink>
          <MyLink href='https://twitter.com/dhaiwat10'>Twitter</MyLink>
          <MyLink href='https://dhaiwat.xyz'>
            Personal website - dhaiwat.xyz
          </MyLink>
        </VStack>

        <Divider />

        <Text>
          I have a very technical background but creating content has always
          been a crucial part of my career &amp; work. I have always created
          content to supplement my dev work and that&apos;s why it&apos;s very
          natural to me by now. I basically got all of my gigs because of the
          technical content I created around React and web3. This includes my
          articles, my tweets and my talks.
          <br />
        </Text>

        <Text>
          As a devrel, I want to continue creating quality content and helping
          people get into web3. I have already done this through my articles &
          tweets. I want to continue doing so on a more regular basis. With a
          strong technical background in the Javascript/TypeScript ecosystem,
          I&apos;m confident that I will add a new valuable dimension to your
          devrel team. I am also extremely passionate about high-quality, free &
          accessible education for developers which I believe is key to doing
          good devrel work.
        </Text>

        <Divider />

        <Heading size='lg'>Written content</Heading>

        <UnorderedList>
          <ListItem>
            <MyLink href='https://mirror.xyz/dhaiwat.eth/O5CK6Tjfv8uhl6FPbjT0yZ8LUwViDPWGYHdu9khRWpM'>
              A guide to web3 for web2 frontend devs
            </MyLink>
            : This article helped thousands of people. Also RT&apos;d by many
            &apos;major&apos; accounts including the official Ethereum account.
            I&apos;m extremely proud of this one.
            <br />
          </ListItem>

          <ListItem>
            <MyLink href='https://ankr.hashnode.dev/build-and-deploy-a-rentable-nft-smart-contract-on-optimism'>
              Build and Deploy A Rentable NFT collection
            </MyLink>
            : The first piece of content around ERC4907 - a recently accepted
            standard for rentable NFTs.
            <br />
          </ListItem>

          <ListItem>
            <MyLink href='https://web3cheatsheet.xyz'>
              web3cheatsheet.xyz
            </MyLink>
            : A set of useful code snippets and mini-guides to help you build
            web3 apps. I wrote all the content on this site.
          </ListItem>

          <ListItem>
            <MyLink href='https://ankr.hashnode.dev/build-an-nft-minting-page-with-rainbowkit-wagmi'>
              Build an NFT Minting Page with Rainbowkit &amp; wagmi
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://mirror.xyz/dhaiwat.eth/NV--7dv8CO0NCcFCvRjDCxBe3VuxdB2_KggwFEfLGRc'>
              Permanently deploy decentralized React frontends to Arweave
            </MyLink>
          </ListItem>
        </UnorderedList>

        <Text>Some other written content that I&apos;ve published:</Text>
        <UnorderedList>
          <ListItem>
            <MyLink href='https://dev.to/dhaiwat10/develop-test-react-components-in-isolation-3714'>
              Develop &amp; test React components in isolation
            </MyLink>
            : This article kickstarted my writing journey.
          </ListItem>

          <ListItem>
            <MyLink href='https://dev.to/dhaiwat10/a-magical-way-to-fetch-data-in-react-52m6'>
              A magical way to fetch data in React
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://dev.to/dhaiwat10/become-a-better-writer-as-a-developer-46oc'>
              Become a better writer as a developer
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://dev.to/dhaiwat10/understanding-react-testing-library-406e'>
              Understanding React Testing Library
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://mirror.xyz/dhaiwat.eth/xUMM5-YjrVqqvpyD2e7bbUoQuVarHYAZuXc559GybwE'>
              How my DAO experience changed my life - leaving home for the first
              time ever with Developer DAO
            </MyLink>
          </ListItem>
        </UnorderedList>

        <Divider />

        <Heading size='lg'>Talks/video content</Heading>

        <UnorderedList>
          <ListItem>
            <MyLink href='https://www.youtube.com/watch?v=3QgqoHggwhg'>
              Sign-in with Ethereum Tutorial w/ React &amp; wagmi
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://www.youtube.com/watch?v=CaODHRnFgBw'>
              The Easiest Way To Deploy Smart Contracts
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://www.youtube.com/watch?v=lk02X2vfUnQ'>
              How I started my web3 OSS journey with D_D - talk at web3con 2022
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://twitter.com/dhaiwat10/status/1558813322266480640?s=20&t=LETYN5mfhJmP4vvby2ptjA'>
              The state of web3 frontends - keynote at Web3Conf India 2022
              (video not available yet)
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://youtu.be/_JuLIGeXsxI?t=9721'>
              Shipping robust &amp; maintainable React packages to npm - talk at
              React India 2021
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://www.youtube.com/watch?v=rZZItYsH8qg'>
              Developing &amp; testing React components in isolation - talk at
              Reactify
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://www.youtube.com/watch?v=dHwFpMteous'>
              A guide to web3 for frontend devs - talk at Reactify
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://www.youtube.com/watch?v=PVg8MgnohMM'>
              web3-ui walkthrough with Austin Griffith
            </MyLink>
          </ListItem>
        </UnorderedList>

        <Divider />

        <Text>
          I have also been regularly traveling whenever I can and hosting
          meetups/events wherever I go. That&apos;s something I love doing.
        </Text>

        <Divider />

        <Heading size='lg'>Development work</Heading>

        <Text>
          I have been working as a frontend engineer in the JavaScript/TS
          ecosystem since 2019. I&apos;m particularly proud of these projects:
        </Text>

        <UnorderedList>
          <ListItem>
            <MyLink href='https://github.com/developer-dao/web3-ui'>
              web3-ui
            </MyLink>
            : A React UI library made for web3 specifc use cases. This project
            changed my life and got me a job in web3. It has around 600 stars
            now. We are extremely proud of this at Developer DAO because this
            was one of our first &amp;projects&amp;.
          </ListItem>

          <ListItem>
            <MyLink href='https://github.com/dhaiwat10/create-web3-frontend'>
              create-web3-frontend
            </MyLink>
            : A CLI tool that gets you up and running with a fully-setup web3
            frontend. Just run <code>npx create-web3-frontend</code>
          </ListItem>

          <ListItem>
            <MyLink href='https://github.com/mazurylabs/mazury-frontend'>
              Mazury
            </MyLink>
            : Mazury has indexed the blockchain so that recruiters can find
            talent easily based on their on-chain credentials. I joined Mazury
            in January &apos;22 and basically created this from scratch. I
            designed the entire architecture and was leading the frontend team
            by the time I left.
          </ListItem>

          <ListItem>
            <MyLink href='https://www.npmjs.com/package/@dhaiwat10/react-link-preview'>
              react-link-preview
            </MyLink>
            : A React library that generates beautiful previews for your links.
            It has around 80k downloads now. One of my first OSS projects. Still
            going strong.
          </ListItem>
        </UnorderedList>
      </VStack>
    </Container>
  );
};

export default CVPage;
