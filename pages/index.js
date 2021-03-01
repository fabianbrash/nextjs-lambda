import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App - Lambda Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Next.js AWS Lambda Demo!!
        </h2>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
          >
            <h3>App Name: {data.application}</h3>
            <h3>App Version:{data.version}</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}


export const getStaticProps = async () => {

  const API_URI = 'https://z0loqdaqbg.execute-api.us-east-1.amazonaws.com/dev/api/info';

  //Let's fetch data from our API

  const res = await fetch(API_URI);
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      data,
    },
  };
};