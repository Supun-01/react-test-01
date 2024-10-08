import DigitalSolutionImage from '../assets/DigitalSolution.jpg'
import { DigitalSolutionText } from '../assets/text-contents/myText'

function DigitalSolution() {
    return (
        <div className='text-white border-t border-b flex flex-wrap py-10 mb-10 lg:mx-60 mx-10'>

            <div className='w-full lg:w-1/2'>
                <img className='lg:w-11/12 rounded-3xl mb-5' src={DigitalSolutionImage} alt="DigitalSolutionImage" />
            </div>

            <div className='w-full lg:w-1/2 px-10'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl mb-5'>Digital Solution Digital Solution</h1>
                <p className='lg:text-xl'>
                    {DigitalSolutionText}
                </p>
            </div>

        </div>
    )
}

export default DigitalSolution