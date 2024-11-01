import React from 'react';
import { Button } from "@/components/ui/button.jsx";
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import IntroSection from './components/IntroSection/IntroSection';
import ConnectSection from './components/ConnectSection/ConnectSection';
import ScrollSection from './components/ScrollSection/ScrollSection';
import AboutSection from './components/AboutSection/AboutSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='text-white w-full bg-black bg-grid-purple-500/[0.2] px-5 md:px-10 '>
      <Navbar/>
      <HeroSection/>
      <IntroSection/>
      <ConnectSection/>
      <ScrollSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;
