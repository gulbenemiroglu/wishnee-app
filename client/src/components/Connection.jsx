



const commonStyles = "min-h-[70px] p-2 sm:min-w-[120px] flex justify-start items-center border-l-[5px] border-[#5C913B] text-md font-light";


const Connection = () => {

    const connetcWallet = () => {

    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-15 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10 mt-4">
                    <h1 className="text-3xl sm:text-5xl  text-gradient py-1">
                    NFTs are more fun  <br /> thanks to WISHNee
                    </h1>
                    <p className="text-left mt-5 font-light  text-base">
                        Explore the Cryptocurrencies and NFTs world. <br /> Make your NFTs fun with your own message on Wishnee.
                    </p>
                    <button className="flex flex-row justify-center items-center my-5 bg-[#BE1931] p-3 rounded-full cursor-pointer hover:bg-[#CE1931]" type="button" onClick={connetcWallet}>
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full ">
                        <div className={` ${commonStyles} m-3`}>
                            <img src="./images/logo2.png" alt="" />
                            <p className="pl-2">Blockchain</p>
                        </div>
                        <div className={`${commonStyles} m-3`}>
                            <img src="./images/logo2.png" alt="" />
                            <p className="pl-2">Ethereum</p>

                        </div>
                        <div className={` ${commonStyles} m-3`}>
                            <img src="./images/logo2.png" alt="" />
                            <p className="pl-2">DApp</p>

                        </div>
                        <div className={` ${commonStyles} m-3`}>
                            <img src="./images/logo2.png" alt="" />
                            <p className="pl-2">Transaction</p>

                        </div>
                        <div className={`${commonStyles} m-3`}>
                            <img src="./images/logo2.png" alt="" />
                            <p className="pl-2">Message</p>

                        </div>
                        <div className={` ${commonStyles} m-3`}>
                            <img src="./images/logo2.png" alt="" />
                            <p className="pl-2">Gift</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Connection;
