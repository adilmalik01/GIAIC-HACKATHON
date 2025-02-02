import Image from "next/image";

const BlogCard = ({ imageUrl }: { imageUrl: string }) => {
    return (<>
        <div className="lg:col-span-2">
            <div className="max-w-4xl mx-auto p-4">
                <div className="  overflow-hidden bg-white">
                    <Image
                        className=" object-cover"
                        src={imageUrl}
                        alt="Blog Post"
                        width={800}
                        height={500}
                    />
                    <div className="p-4">
                        <div className="text-favColor text-xs font-semibold uppercase mb-2">
                            Feb 14
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 mb-3">
                            10 Reasons To Do A Digital Detox Challenge
                        </h2>
                        <p className="text-gray-600 text-sm mb-4">
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est lorem ipsum
                            dolor sit amet...
                        </p>
                        <a
                            href="#"
                            className="text-favColor text-sm font-semibold hover:underline"
                        >
                            Read More →
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default BlogCard;