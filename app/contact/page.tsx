import Navbar1 from "../components/navbar/Navbar1";
import Footer from "../components/footer/Footer";
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
   

    return (
        <>
            <Navbar1 title={"Contact Us"} />
            
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-favColor w-8 h-8" />
                                <div>
                                    <h3 className="font-semibold text-gray-700">Our Address</h3>
                                    <p className="text-gray-600">123 Foodtuck Street, Culinary District, Food City</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <Phone className="text-favColor w-8 h-8" />
                                <div>
                                    <h3 className="font-semibold text-gray-700">Phone Number</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <Mail className="text-favColor w-8 h-8" />
                                <div>
                                    <h3 className="font-semibold text-gray-700">Email Address</h3>
                                    <p className="text-gray-600">contact@foodtuck.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                        <form  className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    name="message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-favColor focus:border-favColor"
                                    rows={4}
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full bg-favColor text-white py-3 px-4 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center"
                            >
                                <Send className="mr-2 w-5 h-5" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
                    <div className="w-full h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1623164983123!5m2!1sen!2sus"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ContactPage;