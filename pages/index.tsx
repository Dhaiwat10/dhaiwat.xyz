import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="font-default text-center align-center">
      <h1 className="text-5xl font-bold mt-24">Dhaiwat Pandya</h1>
      <p className="mt-4">
        Software engineer working at the intersection of React, web3 and UIs
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold">My best work</h2>
        <ul>
          <li>
            <a
              href="https://github.com/developer-dao/web3-ui"
              className="underline"
            >
              web3-ui
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dhaiwat10/react-link-preview"
              className="underline"
            >
              react-link-preview
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold">Profiles</h2>
        <ul>
          <li>
            <a href="https://github.com/dhaiwat10" className="underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dhaiwat10" className="underline">
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
