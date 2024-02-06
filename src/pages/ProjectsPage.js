import React from 'react'
import Header from '../components/Header/Header';
import Project from '../components/Project';
import RegistrationVideo from '../files/RegistrationVideo.mp4';
import ToDoApp from '../files/ToDoApp.mp4';
import Lists from '../files/Lists.mp4';
import ChatApp from '../files/ChatApp.mp4';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div className='m-0'>
        <Header />
        <div className='py-12 px-2 xs:px-10 md:px-32'>
            <h2 className='font-semibold text-center text-3xl pb-2'>PROJECTS</h2>
            <section className='py-5'>
                <h4 className='font-bold text-xl mb-3'>My Projects</h4>
                <div className='grid lg:grid-cols-2 gap-2'>
                    <div className='grid justify-items-stretch bg-slate-50 pb-3'>
                      <Project videoFile={RegistrationVideo} />
                      <h2 className='justify-self-center text-lg font-semibold  my-2'>Multi-step Registration form</h2>
                      <p className='text-black my-2 mx-5 text-center'>This is a multi-step registration form that saves the data entered and then prints it out on the console. It is a Client-side system.</p>
                      <section className='grid mx-20'>
                        <h3 className='text-slate-500 font-semibold'>Technology used:</h3>
                        <ul className='list-disc'>
                          <li>React JS</li>
                          <li>Tailwind CSS</li>
                        </ul>
                        <a href="https://github.com/CHE-BERNICE/QPAY_Technical_Assessment/tree/main/registration_form" className='my-3 p-2 text-blue-700 border border-blue-500 place-self-center'>View code</a>
                      </section>
                    </div>
                    <div className='grid justify-items-stretch bg-slate-50 py-3'>
                      <Project videoFile={ToDoApp}/>
                      <h2 className='justify-self-center text-lg font-semibold  my-2'>A TO DO App</h2>
                      <p className='text-black my-2 mx-5 text-center'>This is a To do List mobile Application. On this app you can: add a task, delete a task, cross out a completed task and delete all tasks </p>
                      <section className='grid mx-20'>
                        <h3 className='text-slate-500 font-semibold'>Technology used:</h3>
                        <ul className='list-disc'>
                          <li>React Native (Expo CLI)</li>
                          <li>CSS</li>
                        </ul>
                        <a href="https://github.com/CHE-BERNICE/React-native-practice/tree/main/evaluation-3" className='my-3 p-2 text-blue-700 border border-blue-500 place-self-center'>View code</a>
                      </section>
                    </div>
                    <div className='grid justify-items-stretch bg-slate-50 py-3'>
                      <Project videoFile={ChatApp}/>
                      <h2 className='justify-self-center text-lg font-semibold  my-2'>A Chat App</h2>
                      <p className='text-black my-2 mx-5 text-center'>This is a frontend Chat application in which a user can sign up or sign in. Once logged in, one can view the chat forums they are in; and get into a forum to view the messages. </p>
                      <section className='grid mx-20'>
                        <h3 className='text-slate-500 font-semibold'>Technology used:</h3>
                        <ul className='list-disc'>
                          <li>React Native (Expo CLI)</li>
                          <li>CSS</li>
                        </ul>
                        <a href="#" className='disabled my-3 p-2 text-blue-700 border border-blue-500 place-self-center'>View code</a>
                      </section>
                    </div>
                    <div className='grid justify-items-stretch bg-slate-50 py-3'>
                      <Project videoFile={Lists}/>
                      <h2 className='justify-self-center text-lg font-semibold  my-2'>Multiple Lists</h2>
                      <p className='text-black my-2 mx-5 text-center'>This is a mobile application that displays various lists with varying styles, including Flex box.</p>
                      <section className='grid mx-20'>
                        <h3 className='text-slate-500 font-semibold'>Technology used:</h3>
                        <ul className='list-disc'>
                          <li>React Native (Expo CLI)</li>
                          <li>CSS</li>
                        </ul>
                        <a href="https://github.com/CHE-BERNICE/React-native-practice/tree/main/evaluation-2" className='my-3 p-2 text-blue-700 border border-blue-500 place-self-center'>View code</a>
                      </section>
                    </div>
                </div>
            </section>
            <div className='grid place-content-center'>
              <a href="https://github.com/CHE-BERNICE" className='bg-blue-400 text-white font-semibold p-3'>See more</a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ProjectsPage;