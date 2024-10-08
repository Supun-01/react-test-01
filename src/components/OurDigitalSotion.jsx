import { IoIosOptions } from "react-icons/io";
import { AboutOption } from "../assets/text-contents/myText";

function OurDigitalSolution() {
    return (
        <div className="text-white py-10 flex flex-wrap text-center mb-10">

            <div className="lg:w-1/2 pb-5">
                <div className="flex flex-wrap items-center justify-center">
                    <IoIosOptions className="text-6xl" />
                </div>
                <h1 className="text-2xl">Option 1</h1>
                <p className="w-1/2 mx-auto">{AboutOption}</p>
            </div>

            <div className="lg:w-1/2 pb-5">
                <div className="flex flex-wrap items-center justify-center">
                    <IoIosOptions className="text-6xl" />
                </div>
                <h1 className="text-2xl">Option 1</h1>
                <p className="w-1/2 mx-auto">{AboutOption}</p>
            </div>

            <div className="lg:w-1/2 pb-5">
                <div className="flex flex-wrap items-center justify-center">
                    <IoIosOptions className="text-6xl" />
                </div>
                <h1 className="text-2xl">Option 1</h1>
                <p className="w-1/2 mx-auto">{AboutOption}</p>
            </div>

            <div className="lg:w-1/2 pb-5">
                <div className="flex flex-wrap items-center justify-center">
                    <IoIosOptions className="text-6xl" />
                </div>
                <h1 className="text-2xl">Option 1</h1>
                <p className="w-1/2 mx-auto">{AboutOption}</p>
            </div>
        </div>
    )
}

export default OurDigitalSolution