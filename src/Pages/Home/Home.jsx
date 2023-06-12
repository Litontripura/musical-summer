import { motion, useScroll } from "framer-motion"
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import BottomBanner from './PopularInstructor/BottomBanner';

// function Component() {
//     const { scrollYProgress } = useScroll();
    
//     return (
//       <motion.div style={{ scaleX: scrollYProgress }} />  
//     )
//   }

const Home = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
        style={{ scalex: scrollYProgress }}
        >
            <motion.div
            initial={{x: 1000}}
            animate={{x:0}}
            transition={{type:'spring', stiffness:300}}
            >
            <Banner></Banner>
            </motion.div>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
          <BottomBanner></BottomBanner>
            
        </motion.div>
    );
};

export default Home;