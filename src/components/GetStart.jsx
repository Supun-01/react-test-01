import React from 'react';
import { HowToGetStartText } from '../assets/text-contents/myText';


const BlockStructure = () => {
    return (
        <div className='border-t border-b py-10 text-white text-center '>
            <div className='flex flex-wrap'>
                <h1 className='text-4xl w-full'>How To Get Start</h1>
                <p className='text-xl w-full'>{HowToGetStartText}</p>
            </div>

            <div className="flex items-center justify-center">
                {/* First Circle */}
                <div className="flex items-center">
                    <div className="bg-sky-500 w-32 h-32 rounded-full flex justify-center items-center">
                        <span className="text-black">TEXT</span>
                    </div>
                    {/* Equal space on both sides of the line */}
                    <div className="mx-4 w-48 h-1 bg-black"></div>
                </div>

                {/* Second Circle */}
                <div className="flex items-center">
                    <div className="bg-sky-500 w-32 h-32 rounded-full flex justify-center items-center">
                        <span className="text-black">TEXT</span>
                    </div>
                    {/* Equal space on both sides of the line */}
                    <div className="mx-4 w-48 h-1 bg-black"></div>
                </div>

                {/* Third Circle */}
                <div className="flex items-center">
                    <div className="bg-sky-500 w-32 h-32 rounded-full flex justify-center items-center">
                        <span className="text-black">TEXT</span>
                    </div>
                    {/* Equal space on both sides of the line */}
                    <div className="mx-4 w-48 h-1 bg-black"></div>
                </div>

                {/* Fourth Circle */}
                <div className="bg-sky-500 w-32 h-32 rounded-full flex justify-center items-center">
                    <span className="text-black">TEXT</span>
                </div>
            </div>

        </div>

    );
};

export default BlockStructure;
