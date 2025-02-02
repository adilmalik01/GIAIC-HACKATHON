import Image from "next/image";
import Footer from "../components/footer/Footer";
import Navbar1 from "../components/navbar/Navbar1";
import BlogCard from "../components/blogCard/blogCard";

export default function Home() {
    return (
        <>
            <Navbar1 title={"Blogs"} />
            <div className="bg-gray-100 min-h-screen p-6">
                <div className="container mx-auto grid  grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 ">
                        <BlogCard imageUrl={"/blog/blog1.png"} />
                        <BlogCard imageUrl={"/blog/blog2.png"} />
                        <BlogCard imageUrl={"/blog/blog3.png"} />
                    </div>


                    <div className="p-4 space-y-8 ">
                        <div className="bg-white p-4 rounded-lg ">
                            <Image
                                src="/mainImages/client.png"
                                alt="Profile"
                                className="rounded-full w-24 h-24 mx-auto"
                                width={100}
                                height={100}
                            />
                            <h3 className="text-center text-lg font-semibold mt-4">
                                Prince Miyako
                            </h3>
                            <p className="text-center text-gray-600 text-sm">
                                Blogger/Photographer
                            </p>
                            <div className="flex justify-center space-x-2 mt-3">
                                <a href="#" className="text-blue-600">
                                    FB
                                </a>
                                <a href="#" className="text-blue-400">
                                    Tw
                                </a>
                                <a href="#" className="text-pink-500">
                                    In
                                </a>
                            </div>
                        </div>



                        <div className="bg-white p-4 rounded-lg ">
                            <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="flex items-center space-x-2">
                                        <Image
                                            src="/blog/post1.png"
                                            alt="Post"
                                            className="w-12 h-12 rounded-lg object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span className="text-sm text-gray-700">
                                            Lorem ipsum dolor sit...
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center space-x-2">
                                        <Image
                                            src="/blog/post4.png"
                                            alt="Post"
                                            className="w-12 h-12 rounded-lg object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span className="text-sm text-gray-700">
                                            Lorem ipsum dolor sit...
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center space-x-2">
                                        <Image
                                            src="/blog/post2.png"
                                            alt="Post"
                                            className="w-12 h-12 rounded-lg object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span className="text-sm text-gray-700">
                                            Lorem ipsum dolor sit...
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center space-x-2">
                                        <Image
                                            src="/blog/post3.png"
                                            alt="Post"
                                            className="w-12 h-12 rounded-lg object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span className="text-sm text-gray-700">
                                            Lorem ipsum dolor sit...
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center space-x-2">
                                        <Image
                                            src="/blog/post4.png"
                                            alt="Post"
                                            className="w-12 h-12 rounded-lg object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span className="text-sm text-gray-700">
                                            Lorem ipsum dolor sit...
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center space-x-2">
                                        <Image
                                            src="/blog/post2.png"
                                            alt="Post"
                                            className="w-12 h-12 rounded-lg object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span className="text-sm text-gray-700">
                                            Lorem ipsum dolor sit...
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center space-x-2">
                                        <Image
                                            src="/blog/post1.png"
                                            alt="Post"
                                            className="w-12 h-12 rounded-lg object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <span className="text-sm text-gray-700">
                                            Lorem ipsum dolor sit...
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>


            <Footer />
        </>
    );
}
