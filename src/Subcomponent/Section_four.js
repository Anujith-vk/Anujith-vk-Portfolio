import React from 'react';
import {motion} from 'framer-motion'
import { findme } from '../animation';
import Swal from 'sweetalert2'

const Section_four = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "963943f5-c17f-4805-8dbc-df34f497baec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message Sent Successfull!y",
        icon: "success"
      });
      event.target.reset()
    }
  };
  return (
    <div className='text-white font-bold flex flex-col items-center p-2'>
      <h1 className='text-center pt-2 md:pt-0 text-[30px]'>CONTACT ME</h1>
      <motion.div variants={findme(0.8)} initial='hidden' whileInView='visible' className='mx-2 border-[2px] border-[#9595de] max-w-[700px] w-full p-5 rounded-md mt-6'>
       <form className='flex flex-col gap-3' onSubmit={onSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='font-bigstyle '>Full Name</label>
          <input type="text" required id='name' className='font-bigstyle rounded px-2 h-[40px] bg-transparent border-[2px]' name='Name' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="Mob" className='font-bigstyle'>Mobile Number</label>
          <input 
  type="number" 
  id="Mob" 
  className="font-bigstyle rounded px-2 h-[40px]  no-spinner bg-transparent border-[2px]"
  name='Mobile_Number' 
  required
/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="mail" className='font-bigstyle'>Email</label>
          <input type='email' id='mail' required className='font-bigstyle rounded px-2 h-[40px] bg-transparent border-[2px]' name='Email' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="cont" className='font-bigstyle'>Your Content</label>
          <textarea type="text" id='cont' required className='font-bigstyle rounded p-3 h-[250px] bg-transparent border-[2px] resize-none' name='Content' />
        </div>
        <button className='bg-slate-800 h-[50px] rounded-full font-subhead text-[20px]'>Send Message</button>
       </form>
      </motion.div>
    </div>
  );
}

export default Section_four;