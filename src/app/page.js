
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import OurOffices from '@/components/OurOffices';
import "./page.scss";

const Home = () => (
    <>
        <Head>
            <title>Republic of Relations</title>
        </Head>
        <main className='main'>
          <HeroSection />
          <AboutUs />
          <OurOffices />
        </main>
    </>
);

export default Home;
