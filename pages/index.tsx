import Head from 'next/head';
import Header from '../components/Header/Header';
import MainContent from '../components/Main/MainContent';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
