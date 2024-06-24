
import Image from "next/image";
import marqueeImage from '/public/images/marquee.svg'
import { motion } from "framer-motion";


const Marquee= ()=>{
    const marqueeVariants = {
        animate: {
          x: [0, -1000], // Adjust this value to control the speed and distance
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 10, // Adjust the duration to control the speed
              ease: 'linear',
            },
          },
        },
      };

return(
    <div className="marqueeSection">
        <motion.div 
        variants={marqueeVariants}
        animate="animate"
        className="marqueeInner">
        <Image className="marqueeText" src={marqueeImage} alt="Mercato urbano."/>
        <Image className="marqueeText" src={marqueeImage} alt="Mercato urbano."/>
        </motion.div>
      </div>
)

}

export default Marquee;