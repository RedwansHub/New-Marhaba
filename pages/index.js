import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marhaba Investment</title>
        <meta name='description' content='' />
        <link rel='icon' href='/Logo.png' />
      </Head>
      <Hero heading='Invest in the Future Generation' 
            message='Marhaba Investment is the leading investment company specializing in general
            trading investment, real states investment, industries investment.' />
      <Main />
      <Footer />
    </div>
  );
}
