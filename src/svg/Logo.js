import { motion } from 'framer-motion'

const Logo = () => {
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      }
    return (
        <div className="flex"><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeLinecap="square"
            strokeMiterlimit="10"
            viewBox="0 0 146.808 146.808"
            className="w-[30px] animate-pulse duration-500"
        >
           
  </div>
        
    );
};

export default Logo;
