import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
   
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"> I'm a skilled frontend developer that has worked with ReactJS, JavaScript, CSS3, and HTML5. I've worked with designers to bring their user interfaces to life. I'm a quick learner who works closely with a team and clients to create cross-platform and user-friendly websites. Let's collaborate to create something extraordinary that will make a lasting impact!  </motion.p>

       <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>

  )
}

export default About;