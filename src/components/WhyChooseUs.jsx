import { WhyChoseUsText } from "../assets/text-contents/myText";

function WhyChoseUs() {
    return (
        <div className='py-10 text-white text-center '>

            <div className='flex flex-wrap mb-16'>
                <h1 className='text-4xl w-full mb-5'>Why Choose Us?</h1>
                <p className='text-xl w-full mx-10 lg:mx-96 '>
                    {WhyChoseUsText}
                    {WhyChoseUsText}
                    {WhyChoseUsText}
                    {WhyChoseUsText}
                    {WhyChoseUsText}
                    {WhyChoseUsText}
                </p>
            </div>

            <div className="flex flex-wrap mx-10 justify-between lg:mx-16">

                <div className="border w-full lg:w-1/2">
                    text
                </div>

                <div className="border w-full lg:w-1/2">
                    text
                </div>

                <div className="border w-full lg:w-1/2">
                    text
                </div>

                <div className="border w-full lg:w-1/2">
                    text
                </div>

            </div>
        </div>

    );
}
export default WhyChoseUs