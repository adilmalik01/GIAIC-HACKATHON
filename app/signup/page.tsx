

import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {



    return (<>
        <Navbar1 />

        <div className="max-w-sm mx-auto mt-14 mb-14 p-6 bg-white shadow-2xl rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <form>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        className="h-4 w-4 text-favColor border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">Remember me?</label>
                </div>

                <button
                    type="button"
                    className="w-full bg-favColor text-white py-2 px-4 rounded-md hover:bg-orange-600"
                >
                    Sign Up
                </button>
            </form>

            <div className="mt-4 text-center">
                <Link href="#" className="text-sm text-favColor hover:underline">
                    Forgot password?
                </Link>
            </div>
            <div className="mt-4 text-center">
                <Link href="/account/login" className="text-sm text-favColor hover:underline">
                    Login?
                </Link>
            </div>

            <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    <Image src="/google.png" alt="Google" width={5} height={5} className="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>
                <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    <Image src="/apple.png" alt="Apple" width={5} height={5} className="w-5 h-5 mr-2" />
                    Sign up with Apple
                </button>
            </div>
        </div>
        < Footer />

    </>);
}

export default Menu;