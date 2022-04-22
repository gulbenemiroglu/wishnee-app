import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"

import { Loader } from ".";


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glass-style placeholder-white placeholder:opacity-50"
    />
);
const Main = () => {


    const handleSubmit = () => {

    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-center justify-between md:px-10 py-12 px-4">
                

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-5">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card ">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    Address
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center red-glass-style">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => { }} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => { }} />
                        <Input placeholder="NFT's ID" name="keyword" type="text" handleChange={() => { }} />
                        <Input placeholder="Enter Your Message" name="message" type="text" handleChange={() => { }} />

                        <div className="h-[1px] w-full bg-[#BE1931] my-2" />

                        {false ? (<Loader />)
                            : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="text-white w-full mt-2 p-2 bg-[#BE1931] hover:bg-[#CE1931] rounded-full cursor-pointer"
                                >
                                    Send now
                                </button>
                            )}
                    </div>
                </div>
                <div className="flex flex-1 justify-start flex-col mf:m-5 mf:mr-10 items-center">
                    <img src="./images/img1.svg" alt="" className="m-5 max-w-[75%]" />
                </div>
            </div>
        </div>

    );
}

export default Main;
