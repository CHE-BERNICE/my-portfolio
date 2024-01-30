import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className='m-0'>
        <Header />
        <div className='py-12 px-8 md:px-32'>
            <section className='pb-3'>
                <h2 className='font-semibold text-center text-3xl'>SKILLS</h2>
                <div className='grid sm:grid-cols-2 place-content-center px-6 py-4'>
                    <article className='justify-self-center'>
                        <h4 className='font-bold text-xl'>Technical skills</h4>
                        <ul>
                            <li>Figma</li>
                            <li>HTML and CSS</li>
                            <li>Javascript</li>
                            <li>React JS, React Native and Redux</li>
                            <li>Node JS, Express JS</li>
                            <li>Tailwind and Bulma CSS</li>
                            <li>PHP</li>
                            <li>Git and Github</li>
                        </ul>
                    </article>
                    <article className='justify-self-start sm:justify-self-center mt-3 sm:mt-0'>
                        <h4 className='font-bold text-xl'>Interpersonal skills</h4>
                        <ul>
                            <li>Communication</li>
                            <li>Collaboration</li>
                            <li>Critical thinker</li>
                            <li>Problem solver</li>
                            <li>Team player</li>
                            <li>As well as Independent</li>
                            <li>Persistent</li>
                            <li>Work well under pressure</li>
                            
                        </ul>
                    </article>
                </div>
            </section>
            <section className='border-t-2 border-t-slate-100 pt-5'>
                <h2 className='font-semibold text-center text-3xl mb-4'>EXPERIENCE</h2>
                <div>
                    <div className='grid grid-cols-2 content-center gap-x-0 bg-slate-100 px-2 md:px-5'>
                    
                        <div className='place-self-center h-18 w-40 rotate-90 md:rotate-0 font-bold text-4xl text-white text-center p-3 py-3 rounded-full bg-blue-300 my-0'>2021</div>
                        <ul className='p-3'>
                            <li>I worked as a Web Developer Intern for about 2 months at Zepstra Ltd, Buea, Cameroon.</li>
                            <li>I made use of HTML, CSS, Javascript, JQuery, PHP, XAMP and MySQL to build a Hostel Management System.</li>
                            <li>I Continuously studied and improved abilities with a wide range of web technologies, design tools, and programming practices.</li>
                        </ul>
                            
                    </div>
                    <div className='grid grid-cols-2 content-center gap-x-0 bg-slate-200 px-2 md:px-5'>
                            
                        <div className='place-self-center h-18 w-40 rotate-90 md:rotate-0 font-bold text-4xl text-white text-center p-3 py-3 rounded-full bg-blue-400'>2022</div>
                        <ul className='p-3'>
                            <li>I worked as a Software Developer Intern for about 2 months at LOOP Technologies, Buea, Cameroon.</li>
                            <li>I worked on a team where we made use of Figma, React JS, Node JS, Express JS, Mongo DB, Git and Github; to build a School Management System.</li>
                            <li>We collected and defined customer requirements to create successful systems meeting the unique needs of each client.</li>
                        </ul>
                            
                    </div>
                    <div className='grid grid-cols-2 content-center gap-x-0 bg-slate-300 px-2 md:px-5'>
                            
                        <div className='place-self-center h-18 w-40 rotate-90 md:rotate-0 font-bold text-4xl text-white text-center p-3 py-3 rounded-full bg-blue-500'>2023</div>
                        <ul className='p-3'>
                            <li>I worked as a Mobile Application Developer Intern for about 6 months at Mickmaq Ltd, remotely.</li>
                            <li>I worked on a team where we were trained and worked on various mini-projects with React Native, Express JS, Mongo DB, Git and Github.</li>
                            <li>We practiced daily standup meetings with development team.</li>
                        </ul>
                            
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default AboutPage;