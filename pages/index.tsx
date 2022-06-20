import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Login from './login';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Landing from '../components/landing';
import { CtxOrReq } from 'next-auth/client/_utils';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Energy Dashboard</title>
        <meta name="description" content="Energy Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Landing />
      </main>
    </div>
  );
};

export async function getServerSideProps(context: CtxOrReq | undefined) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Home;
