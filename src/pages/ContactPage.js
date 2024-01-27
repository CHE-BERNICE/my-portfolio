import React, {useRef, useState} from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [mes, setMes] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_85v1ie8', 'template_5bnif2m', form.current, 'p9wklTIAaoT6Cinpc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setMes(true);
  };

  //Hide message
  setTimeout(() => {
    setMes(false)
  }, 5000);

  return (
    <div className='m-0'>
        <Header />
        <div className='grid place-content-center py-12 px-8 md:px-32'>
            <h2 className='font-semibold text-center text-3xl pb-2'>CONTACT</h2>
            <div className='grid justify-items-stretch bg-slate-100 w-72 rounded-xl md:w-96 px-4 py-5'>
                <form className='w-full' ref={form} onSubmit={sendEmail}>
                    <label className="font-semibold my-3">Name</label><br />
                    <input required type="text" name="name" className='outline-none w-full h-8 mb-3 p-2' placeholder='Enter your name' /><br />
                    <label className="font-semibold my-3">Email</label><br />
                    <input required type="email" name="email" className='outline-none w-full h-8 mb-3 p-2' placeholder='Enter your email' /><br />
                    <label className="font-semibold my-3">Purpose</label><br />
                    <textarea required rows="5" cols="50" name="message" className='outline-none w-full mb-3 p-2' placeholder='Message...' >
                      
                    </textarea><br />
                    <div className='grid '>
                      <button className='py-2 px-3 mt-3 bg-blue-500 text-white font-semibold justify-self-center' type='submit'>Send</button>
                      {mes ? <p className='text-blue-500 my-2'>Message successfully sent. I will be in contact with you shortly.</p> : null}
                      </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage;