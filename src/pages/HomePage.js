import React from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import Bernice from '../files/Bernice.jpeg';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='m-0'>
        <Header />
        <div className='py-2 px-8 md:px-32'>
            <section className='grid md:grid-cols-2 md:gap-5 my-14 pt-1 lg:mx-10'>
                <img src={Bernice} alt='Che Bernice Bih Afanwi' className='justify-self-center h-80 w-80' />
                <div className='grid content-center px-5 mt-4 md:mt-0'>
                    <h2 className='font-bold text-2xl text-center mb-3'>Hi! I am CHE BERNICE BIH AFANWI</h2>
                    <h4 className='font-semibold text-xl text-center'>A Software Developer, Full Stack Developer and a Mobile Application Developer. I am also an AI Data Science enthusiast</h4>
                </div>
            </section>
            <section className='py-3 px-7 md:px-16 bg-slate-50 mb-14'>
                <h3 className='font-semibold text-center text-3xl mb-2'>About Me</h3>
                <div className='grid gap-2 content-center'>
                    <p>I'm a passionate Full Stack Developer with 3+ years of experience in building web and mobile applications. I love working with cutting-edge technologies and solving complex problems to create robust and scalable solutions.</p>
                    <p>I'm proficient with modern Javascript frameworks as shown <Link to='/about'>here. </Link>. In addition to my technical skills, I'm experienced in the full software development lifecycle, from gathering requirements and designing 
                        system architecture to testing, deployment, and maintenance. I'm comfortable working in agile development environments, collaborating with cross-functional teams, and adhering to coding best practices and version control (Git).</p>
                    <p>I'm excited to work on meaningful projects, contributing my expertise to drive innovation and create impactful applications. If you're looking for a dedicated Full Stack Developer who can bring your ideas to life, feel free to reach out!</p>
                    <Link to='/contact' className='py-2 px-3 mt-3 bg-black text-white font-semibold justify-self-center'>Get in touch</Link>
                </div>
            </section>
            <section className='mb-14'>
                <h3 className='font-semibold text-center text-3xl mb-3'>Stats</h3>
                <div className='grid grid-cols-2 content-center gap-6'>
                    <div className='justify-self-center'>
                        <div className='h-36 w-36 font-bold text-4xl text-white text-center p-3 py-12 rounded-full bg-blue-300'>8+</div>
                        <p className='text-center mt-2'>Projects done</p>
                    </div>
                    <div className='justify-self-center'>
                        <div className='h-36 w-36 font-bold text-4xl text-white text-center p-3 py-12 rounded-full bg-blue-300'>3+</div>
                        <p className='text-center mt-2'>Years of experience</p>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage;