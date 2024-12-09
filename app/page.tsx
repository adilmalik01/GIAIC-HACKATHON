import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { Facebook, Pinterest, Twitter } from 'react-bootstrap-icons';
import { HandThumbsUp, ChatDots, Share } from "react-bootstrap-icons";
import Footer from "./components/footer/Footer";
import Stats from "./components/stats/Stats";


export default function Home() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const menuItems: any = [
    {
      title: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/mainImages/lettuce-leaf.png",
    },
    {
      title: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "12.55",
      image: "/mainImages/glow-chees.png",
    },
    {
      title: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/mainImages/fresh-breakfast.png",
    },
    {
      title: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/mainImages/new.png",
    },
    {
      title: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/mainImages/new.png",
    },
    {
      title: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/mainImages/new.png",
    },
    {
      title: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/mainImages/new.png",
    },
    {
      title: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: "14.55",
      image: "/mainImages/new.png",
    }, ,
  ];

  const chefs = [
    {
      name: "D. Estwood",
      role: "Chief Chef",
      image: "/mainImages/chef1.png",
    },
    {
      name: "D. Scoriesh",
      role: "Assistant Chef",
      image: "/mainImages/chef2.png",
    },
    {
      name: "M. William",
      role: "Advertising Chef",
      image: "/mainImages/chef3.png",
    },
    {
      name: "W. Readfroad",
      role: "Chef",
      image: "/mainImages/chef4.png",
    },
  ];


  const blogs = [
    {
      id: 1,
      image: "/mainImages/burger.png",
      date: "10 February 2022",
      title: "Pellentesque Non Effictur Mi Aliquam Convallis Mi Quis",
    },
    {
      id: 2,
      image: "/mainImages/pizza.png",
      date: "10 February 2022",
      title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    },
    {
      id: 3,
      image: "/mainImages/tacos.png",
      date: "10 February 2022",
      title: "Curabitur rutrum velit ac congue malesuada",
    },
  ];



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
    <div className="App ">
      <div className="main">
        <Navbar />

        <section className="grid grid-cols-2 max-lg:grid-cols-1 min-h-screen w-full   place-items-center">
          <div className="content max-md:px-4  h-[100%]  flex justify-center items-center gap-4">
            <div className="icon-line h-[100%] w-4 grid gap-3 place-items-center  grid-rows-3 px-1">
              <div className="topLine bg-white w-[2px] h-[80%]">

              </div>
              <div className="icons flex  flex-col justify-center items-center gap-5">
                <Facebook size={25} color="white" />
                <Twitter size={25} color="#FF9F0D" />
                <Pinterest size={25} color="white" />
              </div>
              <div className="bottomLine  bg-white h-[80%] w-[2px]">

              </div>
            </div>
            <div className="text-content px-5 max-md:mt-5  flex  flex-col gap-5">
              <h2 className="text-[32px]  font-great text-[#FF9F0D]">
                Its Quick & Amusing!
              </h2>
              <h1 className="text-[60px] font-ha  max-md:text-2xl  text-white"> <span className="text-[#FF9F0D]">Th</span>e Art of speed <br /> food Quality</h1>
              <p className="font-inter text-white text-[16px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque <br /> minus et ad magni minus et ad magni.
              </p>
              <button className=" w-[190px] text-[16px] font-inter  rounded-3xl h-[60px] text-white bg-[#FF9F0D]">See Menu</button>
            </div>

          </div>
          <div className="image grid-cols-3">
            <Image
              src={"/mainImages/Image.png"}
              alt="Dish"
              width={600}
              height={600}
            />
          </div>
        </section>

        <section className="grid grid-cols-2 max-md:py-4 max-lg:grid-cols-1 min-h-screen w-full   container   place-items-center">
          <div className="content  h-[100%]  flex justify-center items-center gap-2">
            <div className="text-content px-5  flex  flex-col">
              <p className="text-[32px]  font-great text-[#FF9F0D]">
                About us
              </p>
              <p className="text-[48px] font-hal max-md:text-3xl text-white mt-2">
                <span className="text-[#FF9F0D] ">We </span> Create the best <br /> foody product </p>
              <p className="font-inter text-white text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br /> consequat.
              </p>

              <ul className="check-list flex flex-col gap-3 px-4 py-5">
                <li> Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
                <li> Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
              <button className=" w-[190px] text-[16px] font-inter  rounded-3xl h-[60px] text-white bg-[#FF9F0D]">Read More</button>
            </div>

          </div>
          <div className="image">
            <div className="grid grid-cols-1 max-md:px-5 place-items-center lg:grid-cols-2 gap-4 max-w-4xl w-full">
              <div className=" col-span-2">
                <Image
                  src={"/mainImages/1.png"}
                  alt="Dish"
                  width={1000}
                  height={600}
                />
              </div>

              <div className="">
                <Image
                  src={"/mainImages/2.png"}
                  alt="Dish"
                  width={500}
                  height={600}
                />
              </div>

              <div className="">
                <Image
                  src={"/mainImages/3.png"}
                  alt="Dish"
                  width={600}
                  height={600}
                />
              </div>

            </div>
          </div>
        </section>


        <section className="min-h-screen w-full py-5">
          <div className="heading w-full text-center">
            <h3 className="font-great text-[#FF9F0D] text-[32px] "> Food Category</h3>
            <h1 className=" font-hal  text-[48px]"><span className="text-[#FF9F0D]">Ch</span>oose Food Iteam </h1>
          </div>

          <div className="dishes  max-lg:py-8  w-full gap-2 max-md:grid-cols-1    place-items-center min-h-[50%] max-lg:grid-cols-2 max-sm:grid-col-1 py-7 grid grid-cols-4 ">
            <Image
              src={"/mainImages/dish1.png"}
              alt="Dish"
              width={300}
              height={300}
            />

            <Image
              src={"/mainImages/dish2.png"}
              alt="Dish"
              width={300}
              height={300}
            />


            <Image
              src={"/mainImages/dish3.png"}
              alt="Dish"
              width={300}
              height={300}
            />

            <Image
              src={"/mainImages/dish4.png"}
              alt="Dish"
              width={300}
              height={300}
            />
          </div>
        </section>


        <section className="grid grid-cols-2 container mx-auto max-lg:grid-cols-1 min-h-screen w-full   place-items-center">

          <div className="image grid-cols-3">
            <div className="grid grid-cols-2 max-md:px-5 max-md:grid-cols-2 max-lg:grid-cols-2  max-md:place-items-center gap-4  w-full">
              <div className="  col-span-1">
                <Image
                  src="/mainImages/1.png"
                  alt="Dish"
                  width={900}
                  height={900}
                  className=" object-cover rounded-lg"
                  priority
                />
              </div>


              <div>
                <Image
                  src="/mainImages/2.png"
                  alt="Dish"
                  width={600}
                  height={800}
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/mainImages/dish4.png"
                  alt="Dish"
                  width={600}
                  height={400}
                  className=" object-cover rounded-lg"
                />
              </div>
              <div>
                <Image
                  src="/mainImages/3.png"
                  alt="Dish"
                  width={600}
                  height={800}
                  className=" object-cover rounded-lg"
                />
              </div>

              <div>
                <Image
                  src="/mainImages/1.png"
                  alt="Dish"
                  width={600}
                  height={800}
                  className=" object-cover rounded-lg"
                />
              </div>



            </div>
          </div>

          <div className="text-content min-md:px-5  h-[100%]  max-md:py-10 justify-center gap-2 px-5  flex  flex-col">
            <p className="text-[32px]  font-great text-[#FF9F0D]">
              Why Choose us
            </p>
            <p className="text-[48px] max-md:text-2xl  font-hal text-white mt-2">

              <span className="text-[#FF9F0D] max-md:text-2xl  font-hal text-[48px]">Ex</span>rta ordinary taste <br /> And Experienced  </p>
            <p className="font-inter text-white text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam <br /> pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br /> augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br /> consequat.
            </p>

            <div className="boxes flex flex-wrap gap-5">
              <div className="box flex justify-center items-center flex-col gap-2">
                <div className="w-[70px] p-3 h-[56px] flex justify-center items-center rounded bg-[#FF9F0D] ">
                  <Image
                    src="/mainImages/Hamburger.png"
                    alt="Dish"
                    width={100}
                    height={100}
                    className="w-[50% ] h-auto object-cover  rounded-lg"
                  />
                </div>
                <p className="text-[13px] font-inter">Fast Food</p>
              </div>
              <div className="box flex justify-center items-center flex-col gap-2">
                <div className="w-[70px] p-3 h-[56px] rounded flex justify-center items-center bg-[#FF9F0D] ">

                  <Image
                    src="/mainImages/Cookie.png"
                    alt="Dish"
                    width={100}
                    height={100}
                    className="w-[50% ] h-auto object-cover rounded-lg"
                  />

                </div>
                <p className="text-[13px] font-inter">Fast Food</p>
              </div>
              <div className="box flex justify-center items-center flex-col gap-2">
                <div className="w-[70px] p-3 h-[56px] rounded flex justify-center items-center bg-[#FF9F0D] ">

                  <Image
                    src="/mainImages/dinner.png"
                    alt="Dish"
                    width={100}
                    height={100}
                    className="w-[50% ] h-auto object-cover rounded-lg"
                  />

                </div>
                <p className="text-[13px] font-inter">Fast Food</p>
              </div>
            </div>

            <div className="w-[80%] h-[93px] flex max-lg:w-[200px]   rounded-md  items-center bg-white justify-between">
              <div className="w-4 rounded h-full bg-[#FF9F0D]"></div>
              <div className="flex   items-center  w-[80%] justify-around">
                <p className="text-[#FF9F0D] text-[48px]  max-md:text-[23px] font-bold">30+</p>
                <p className=" text-black">Year of <br /> <span className="text-[24px] max-md:text-[23px]  font-hal">Experienced</span></p>
              </div>
            </div>

          </div>

        </section>


        <>
          <Stats />
        </>

        <section className="min-h-screen w-full py-7">
          <div className="heading w-full text-center">
            <h3 className="font-great text-[#FF9F0D] text-[32px] "> Choose & pick</h3>
            <h1 className=" font-hal  text-[48px]"><span className="text-[#FF9F0D]">Fr</span>om Our Menu</h1>
          </div>
          <div className="links w-[70%] max-md:w-[100%] py-5">
            <ul className="flex max-md:flex-wrap max-md:gap-2 max-md:text-center items-center px-8  font-inter font-medium justify-around">
              <li className="text-[#FF9F0D]">Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Dessert</li>
              <li>Drink</li>
              <li>Snack</li>
              <li>Suops</li>
            </ul>
          </div>

          <div className=" text-white p-6">
            <div className="flex flex-col max-lg:flex-col max-lg:justify-center md:flex-row items-center gap-6">
              <div className=" w-[30%]">
                <Image
                  src="/mainImages/salaad.png"
                  alt="Salad"
                  width={500}
                  height={500}
                  className="rounded-xl  object-cover"
                />
              </div>
              <div className="flex-1 grid w-[50%] py-4  max-md:grid-cols-1 grid-cols-2 grid-rows-4 gap-4">
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
                  menuItems.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center max-md:flex-col text-center gap-4 rounded-lg p-1"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                        <p className="text-yellow-500 font-bold">${item.price}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>



        </section>


        <section className="min-h-screen w-full bg py-7">
          <div className="heading w-full  text-center">
            <h3 className="font-great text-[#FF9F0D] text-[32px] ">Chefs</h3>
            <h1 className=" font-hal  text-[48px]"><span className="text-[#FF9F0D]">Me</span>et Our Chef</h1>
          </div>

          <div className="">
            <div className=" text-white py-10">
              <div className="max-w-6xl mx-auto grid   max-lg:px-8  max-lg:grid-col-1 lg:grid-cols-4 gap-6">
                {chefs.map((chef, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-800  overflow-hidden shadow-lg"
                  >
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 bg-white bg-opacity-90 flex flex-col justify-center items-center w-[150px]  ">
                      <h3 className="text-lg font-bold text-black">{chef.name}</h3>
                      <p className="text-sm text-gray-700">{chef.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center mt-6 py-5">
                <button className=" w-[150px] text-[16px] font-inter  rounded-3xl h-[50px] text-white border border-[#FF9F0D]">See Menu</button>
              </div>

            </div>
          </div>


        </section>



        <section className="min-h-screen w-full bg py-7">
          <div className=" text-white py-12">
            <div className="text-left px-14 ">
              <p className="text-yellow-500  font-great text-lg">{testimonial.subtitle}</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{testimonial.title}</h2>
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





        <section className="bg-[url('/mainImages/section.png')]  bg-no-repeat  bg-center bg-cover w-full mt-5 py-5 flex justify-center items-center  min-h-[50vh]">
          <div className=" w-[80%] flex flex-col gap-2 text-right">
            <p className="text-[#FF9F0D] font-great text-[19px]">Restaurant Active Process</p>
            <p className=" font-hal  text-[38px]  max-md:text-[19px] max-lg:text-center"><span className="text-[#FF9F0D]">We</span>
              Document Every Food <br /> Bean Process untile it is saved </p>
            <p className=" font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br /> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>

            <div className="btn-div justify-end flex items-center gap-2">
              <button className=" w-[150px] text-[16px] font-inter  rounded-3xl h-[50px] text-white border border-[#FF9F0D]">See Menu</button>
              <button className=" w-[150px] text-[16px] font-inter  rounded-3xl h-[50px] text-white border border-[#FF9F0D]">See Menu</button>

            </div>
          </div>
        </section>



        <section className="w-full   mt-5 min-h-[100vh]">
          <div className="heading w-full py-10  text-center">
            <h3 className="font-great text-[#FF9F0D] text-[32px] ">Blog Post</h3>
            <h1 className=" font-hal  text-[48px]"><span className="text-[#FF9F0D]">Me</span>et Our Chef</h1>
          </div>

          <div className="container mx-auto">
            <div className="grid  gap-3 place-items-center max-md:grid-cols-1 grid-cols-3  max-lg:grid-cols-2">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-gray-900 w-[350px] text-white min-h-max shadow-lg"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={350}
                    height={200}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-5  flex flex-col min-h-[50%]">
                    <p className="text-sm text-yellow-500 mb-2">{blog.date}</p>
                    <h3 className="text-lg font-semibold mb-4">{blog.title}</h3>
                    <div className="flex justify-between items-center mt-auto">
                      <a href="#" className="text-yellow-500 text-sm">
                        Learn More
                      </a>
                      <div className="flex space-x-4">
                        <HandThumbsUp className="text-yellow-500 cursor-pointer" />
                        <ChatDots className="text-yellow-500 cursor-pointer" />
                        <Share className="text-yellow-500 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <Footer />


      </div>
    </div>

  </>
  );
}
