import Image from "next/image";

const Stats = () => {
    return (<>
        <section className="client bg-cover bg-center relative w-full text-white max-lg:py-5 max-lg:gap-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 ga-3   bg bg-[url('/mainImages/2.png')]  grid mt-5 grid-cols-4 min-h-[50vh]">
            <div className="absolute inset-0 bg-[#0D0D0D]/50" ></div>


            <div className="flex flex-col items-center  relative z-[9999] justify-center gap-2">
                <Image
                    src="/mainImages/cheif1.png"
                    alt="Dish"
                    width={100}
                    height={100}
                    className="object-cover"
                    priority
                />
                <h2 className="text-[20px] font-hal">Professional Chefs</h2>
                <h2 className="text-[24px] font-hal">420</h2>
            </div>
            <div className="flex flex-col items-center relative z-[9999] justify-center gap-2">
                <Image
                    src="/mainImages/cheif2.png"
                    alt="Dish"
                    width={100}
                    height={100}
                    className="object-cover"
                    priority
                />
                <h2 className="text-[20px] font-hal">Items Of Food</h2>
                <h2 className="text-[24px] font-hal">320</h2>
            </div>
            <div className="flex flex-col items-center relative z-[9999] justify-center gap-2">
                <Image
                    src="/mainImages/cheif3.png"
                    alt="Dish"
                    width={100}
                    height={100}
                    className="object-cover"
                    priority
                />
                <h2 className="text-[20px] font-hal">Years Of Experienced</h2>
                <h2 className="text-[24px] font-hal">30+</h2>
            </div>

            <div className="flex flex-col items-center relative z-[9999] justify-center gap-2">
                <Image
                    src="/mainImages/cheif4.png"
                    alt="Dish"
                    width={100}
                    height={100}
                    className="object-cover"
                    priority
                />
                <h2 className="text-[20px] font-hal">Happy Customers</h2>
                <h2 className="text-[24px] font-hal">220</h2>
            </div>
        </section>
    </>);
}

export default Stats;