import DigitalSolutionImage from '../assets/DigitalSolution.jpg'
import { DigitalSolutionText } from '../assets/text-contents/myText'
import { motion } from "framer-motion"

function DigitalSolution() {
    return (
        <div className='text-white flex flex-wrap py-10 mb-10 lg:mx-60 mx-10'>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}

                className='w-full lg:w-1/2'>
                <img className='lg:w-11/12 rounded-3xl mb-5' src={DigitalSolutionImage} alt="DigitalSolutionImage" />
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}

                className='w-full lg:w-1/2 px-10'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl mb-5'>Digital Solution Digital Solution</h1>
                <p className='lg:text-xl'>
                    {DigitalSolutionText}
                </p>
            </motion.div>

        </div>
    )
}

export default DigitalSolution