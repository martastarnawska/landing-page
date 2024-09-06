
import Head from 'next/head'
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import OurServices from '@/components/OurServices';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import OurOffices from '@/components/OurOffices';
import "./page.scss";


const Home = () => {
  const CalendlyWidget = dynamic(
    () => {
      return import("@/components/CalendlyWidget")
    },
    { ssr: false }
  );

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
          <CalendlyWidget/>
        </main>
    </>
)};

export default Home;
