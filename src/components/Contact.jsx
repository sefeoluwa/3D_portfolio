import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [loading, setLoading] = useState(false);
  const [sendButton, setSendButton] = useState('Send');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setIsValidEmail(true); // Reset validation message when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSendButton('Sending...');

    if (!emailRegex.test(form.email)) {
      setIsValidEmail(false);
      setLoading(false);
      setSendButton('Send');
      return;
    }

    emailjs
      .send(
        "service_0dviduv",
        "template_uaevb3s",
        {
          from_name: form.name,
          to_name: 'Sefeoluwa',
          from_email: form.email,
          to_email: 'sefeoluwaakinbeye@gmail.com',
          message: form.message,
        },
        'FCc5GcNwGoR1Dwx7_'
      )
      .then(() => {
        setLoading(false);
        setSendButton('Sent');
        setTimeout(() => {
          setSendButton('Send');
        }, 2000);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        setLoading(false);
        setSendButton('Error');
        setTimeout(() => {
          setSendButton('Send');
        }, 2000);
        console.log(error);
        alert('Snap! Something went wrong. Please resend your message');
      });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10  overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl z--50' >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex  flex-col gap-8'>
      <label htmlFor="name" className="flex flex-col">
        <span className='text-white font-medium mb-4'>Your Name</span>
        <input type="text" name='name' id='name' value={form.name} onChange={handleChange} placeholder="What's your name?" required className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
      </label>

      <label htmlFor="email" className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="text"
              name='email'
              id='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium ${!isValidEmail ? 'border-red-500' : ''}`}
            />
            {!isValidEmail && (
              <span className="text-red-500">Invalid email format</span>
            )}
          </label>

      <label htmlFor="" className="flex flex-col">
        <span className='text-white font-medium mb-4'>Your Message</span>
        <textarea rows='7' name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" required className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
      </label>

        <button type='submit' className='bg-tertiary py-3 px-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Sending...' : sendButton}</button>
      </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")