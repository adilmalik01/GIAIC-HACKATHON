"use client"
import Image from "next/image";
import Footer from "../components/footer/Footer";
import Navbar1 from "../components/navbar/Navbar1";

const About = () => {

    const testimonial = {
        title: "What our client are saying",
        subtitle: "Testimonials",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.",
        clientName: "Alamin Hasan",
        clientRole: "Food Specialist",
        clientImage: "/mainImages/client.png",
        rating: 4,
    };

    return (<>

        <Navbar1 title={"about"} />

        <section className="grid grid-cols-2 container mt-10 py-5 mx-auto max-lg:grid-cols-1 min-h-screen w-full   place-items-center">

            <div className="image max-h-auto grid-cols-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl w-full">
                    <div className="lg:col-span-2 row-span-3">
                        <Image
                            src="/mainImages/1.png"
                            alt="Dish"
                            width={1200}
                            height={1200}
                            className="w-full h-auto object-cover rounded-lg"
                            priority
                        />
                    </div>



                    <div>
                        <Image
                            src="/mainImages/3.png"
                            alt="Dish"
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>


                    <div>
                        <Image
                            src="/mainImages/2.png"
                            alt="Dish"
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="text-content max-h-auto  h-[100%]  justify-center gap-2 px-5  flex  flex-col">
                <p className="text-[45px]     font-great text-[#FF9F0D]">
                    About us
                </p>
                <p className="text-[48px] font-hal max-md:text-lg text-black mt-2">Food is an important  <br />
                    part Of a balanced Diet </p>
                <p className="font-inter text-black text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br />
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br />
                    augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br />
                    sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat. <br />
                </p>


                <div className="btn-div justify-end flex items-center gap-2">
                    <button className=" w-[150px] text-[16px] font-inter  rounded-3xl h-[50px] text-black border border-[#FF9F0D]">See Menu</button>
                    <button className=" w-[150px] text-[16px] font-inter  rounded-3xl h-[50px] text-black border border-[#FF9F0D]">See Menu</button>

                </div>
            </div>



        </section>


        <section className="min-h-screen w-full bg py-7">
            <div className="text-center px-14 ">
                <h2 className="text-2xl text-black md:text-3xl  font-hal mb-6">Why Choose us</h2>
                <p className="text-black  font-inter text-[17px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum.
                </p>
            </div >

            <div className="client bg-cover bg-center relative w-full text-white  bg bg-[url('/blog/bg.png')]  grid mt-5 grid-cols-4 min-h-[60vh]">
                <div className="absolute inset-0 bg-[#0D0D0D]/50" ></div>


            </div>
            <div className="client bg-cover bg-center max-sm:grid-cols-1 max-md:grid-cols-2 max-md:gap-5 relative w-full text-black   grid mt-5 grid-cols-3 min-h-[60vh]">
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image
                        src="/blog/Student.png"
                        alt="Dish"
                        width={100}
                        height={100}
                        className="object-cover"
                        priority
                    />
                    <p className="text-center font-inter text-[15px]">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque diam pellentesque <br /> bibendum non dui volutpat
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image
                        src="/blog/Coffee.png"
                        alt="Dish"
                        width={100}
                        height={100}
                        className="object-cover"
                        priority
                    />
                    <p className="text-center font-inter  text-[15px]">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque diam pellentesque <br /> bibendum non dui volutpat
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image
                        src="/blog/Person.png"
                        alt="Dish"
                        width={100}
                        height={100}
                        className="object-cover"
                        priority
                    />
                    <p className="text-center font-inter  text-[15px]">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque diam pellentesque <br /> bibendum non dui volutpat
                    </p>
                </div>

            </div>
            <div className="client bg-cover bg-center relative  text-white  bg bg-[url('/blog/bg.png')]   w-full mt-5 flex justify-center items-center  min-h-[70vh]">
                <div className="absolute inset-0 bg-favColor/75" ></div>

                <div className="text-center px-14 text-white">
                    <h2 className="text-[25]  md:text-3xl text-white relative z-30  font-hal mb-6">Team Membar</h2>
                    <p className="  font-inter relative z-[88888]   text-[17px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum.
                    </p>
                </div >
            </div>
        </section>



        <section className="min-h-screen w-full bg py-7">
            <div className=" text-black py-12">
                <div className="text-left px-14 ">
                    <p className="text-favColor  ont-great text-[34px]">{testimonial.subtitle}</p>
                    <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">{testimonial.title}</h2>
                </div>
                <div className="max-w-3xl mx-auto mt-12 bg-white shadow-lg text-black p-8 relative">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <Image
                            src={testimonial.clientImage}
                            alt={testimonial.clientName}
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                    <div className="mt-12 text-center">
                        <div className="text-yellow-500 text-3xl mb-4">“</div>
                        <p className="text-gray-700">{testimonial.quote}</p>
                        <div className="mt-4">
                            <p className="font-bold text-lg">{testimonial.clientName}</p>
                            <p className="text-sm text-gray-500">{testimonial.clientRole}</p>
                        </div>
                        <div className="mt-4 text-yellow-500 flex justify-center">
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={index < testimonial.rating ? "currentColor" : "none"}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                    />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </>);
}

export default About;

