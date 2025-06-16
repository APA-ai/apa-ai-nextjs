'use client';

import styled from 'styled-components';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Courses from '@/components/Courses/Courses';
import Features from '@/components/Features/Features';
import Benefits from '@/components/Benefits/Benefits';
import Testimonials from '@/components/Testimonials/Testimonials';
import Newsletter from '@/components/Newsletter/Newsletter';
import FooterLinks from '@/components/FooterLinks/FooterLinks';
import Footer from '@/components/Footer/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Benefits />
        <Testimonials />
        <Newsletter />
        <FooterLinks />
      </main>
      <Footer />
    </AppContainer>
  );
} 