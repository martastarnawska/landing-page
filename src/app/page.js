
"use client";
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';
import OurServices from '@/components/OurServices';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import OurOffices from '@/components/OurOffices';
import useClientSideTranslation from '@/hooks/useClientSideTranslation';
import "./page.scss";
import '../i18n/i18n';

const Home = () => {
  const loaded = useClientSideTranslation();

  if (!loaded) {
    return null;
  }

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
