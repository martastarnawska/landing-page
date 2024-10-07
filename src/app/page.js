
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';
import OurServices from '@/components/OurServices';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import OurOffices from '@/components/OurOffices';
import "./page.scss";


const Home = () => {
  return (
    <>
        <Head>
            <title>Republic of Relations</title>
        </Head>
        <main id="root" className='main'>
          <HeroSection />
          <OurServices />
          <AboutUs />
          <ContactUs />
          <OurOffices />
        </main>
    </>
)};

export default Home;
