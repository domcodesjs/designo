import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://unpkg.com/sanitize.css' rel='stylesheet' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
