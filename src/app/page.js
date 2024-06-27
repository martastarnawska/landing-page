
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Republic of Relations</title>
            </Head>
            <HeroSection />
        </div>
    );
}
