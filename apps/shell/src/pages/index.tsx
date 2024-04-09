import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';

const Login = dynamic(
  async () => {
    // @ts-expect-error - This is a dynamic import
    const mod = await import('client/Login');
    return mod.default;
  },
  {
    ssr: true,
    force: true,
  },
);

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Horologium Shell</title>
        <meta name="description" content="Horologium Shell Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h2>Horologium Shell</h2>
        </div>

        <div className={styles.grid}>
          <Login />
        </div>
      </main>
    </>
  );
}
