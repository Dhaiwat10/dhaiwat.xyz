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
          21 year old frontend engineer and content creator. Currently working
          as a frontend engineer at{' '}
          <MyLink href='https://mazury.xyz'>mazury.xyz</MyLink>.<br />
          <MyLink href='https://twitter.com/developer_dao'>
            Developer DAO
          </MyLink>{' '}
          core contributor &amp; Development Guild co-lead.
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
          <br />
          On average, my tweets get around <b>~700k impressions</b> each month
          and each of my articles get around <b>~10k reads</b>.
        </Text>

        <Text>
          As a devrel I want to continue creating quality content and helping
          people get into web3. I have already done this through my articles &
          tweets. I want to continue doing so on a more regular basis. With a
          strong technical background in the Javascript/TypeScript ecosystem,
          I&apos;m confident that I will add a new valuable dimension to your
          devrel team.
        </Text>

        <Divider />

        <Heading size='lg'>Written content</Heading>

        <UnorderedList>
          <ListItem>
            <MyLink href='https://mirror.xyz/dhaiwat.eth/O5CK6Tjfv8uhl6FPbjT0yZ8LUwViDPWGYHdu9khRWpM'>
              A guide to web3 for web2 frontend devs
            </MyLink>
            : This is my best written content to date. This article got
            RT&apos;d by many &apos;big&apos; accounts including @ethereum and
            Brendan Eich (creator of JavaScript). I&apos;m extremely proud of
            this one.
            <br />
            Some numbers: <b>180k</b> tweet impressions, <b>10k</b> reads
            <br />
            <br />
          </ListItem>

          <ListItem>
            <MyLink href='https://web3cheatsheet.xyz'>
              web3cheatsheet.xyz
            </MyLink>
            : A set of useful code snippets and mini-guides to help you build
            web3 apps. I wrote all the content on this site and published it
            very recently.
          </ListItem>
        </UnorderedList>

        <Text>Some other written content that I&apos;ve published:</Text>
        <UnorderedList>
          <ListItem>
            <MyLink href='https://dev.to/dhaiwat10/develop-test-react-components-in-isolation-3714'>
              Develop &amp; test React components in isolation
            </MyLink>
            : This article kickstarted my journey as a &apos;writer&apos;.
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
            <MyLink href='https://youtu.be/_JuLIGeXsxI?t=9721'>
              Shipping robust &amp; maintainable React packages to npm - talk at
              React India 2021
            </MyLink>
          </ListItem>

          <ListItem>
            <MyLink href='https://www.youtube.com/watch?v=lk02X2vfUnQ'>
              How I started my web3 OSS journey with D_D - talk at web3con 2022
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
            : This is my current job. Mazury has indexed the blockchain so that
            recruiters can find talent easily based on their on-chain
            credentials. I joined Mazury in January &apos;22 and basically
            created this from scratch. I designed the entire architecture and am
            now leading our frontend team.
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
