import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Membership from '../components/Membership';
import Trainers from '../components/Trainers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scrollProgress');
    const onScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = scrolled + '%';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>FitForge Gym – Sports Center</title>
        <meta name="description" content="Elite fitness training, world-class equipment, and certified coaches. Join FitForge Sports Center today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;600;700&family=Barlow+Condensed:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Scroll Progress Bar */}
      <div id="scrollProgress" style={{
        position: 'fixed', top: 0, left: 0, height: '2px',
        background: 'var(--gold)', zIndex: 200, transition: 'width 0.1s', width: '0%'
      }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Membership />
        <Trainers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}