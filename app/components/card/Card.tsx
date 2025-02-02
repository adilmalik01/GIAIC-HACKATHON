import Image from "next/image";
import Stats from "../stats/Stats";


export default function Card() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const menuSections: any = [
        {
            title: "Starter Menu",
            image: "/menu/menu1.png",
            items: [
                {
                    name: "Alder Grilled Chinook Salmon",
                    description: "Toasted French bread topped with romesco, cheddar",
                    calories: "560 Cal.",
                    price: "$32",
                },
                {
                    name: "Berries and creme tart",
                    description: "Gorgonzola, ricotta, mozzarella, brioche",
                    calories: "760 Cal.",
                    price: "$43",
                },
                {
                    name: "Tormentoso Bush Pizza Pintoage",
                    description: "Ground lamb, avocados, roasted red salad",
                    calories: "1020 Cal.",
                    price: "$14",
                },
                {
                    name: "Spicy Vegan Potato Curry",
                    description: "Spectacular cream cheese, crumbled blue cheese",
                    calories: "560 Cal.",
                    price: "$35",
                },
            ],
        },
        {
            title: "Main Course",
            image: "/menu/menu2.png",
            items: [
                {
                    name: "Optic Big Breakfast Combo Menu",
                    description: "Toasted French bread topped with romesco, cheddar",
                    calories: "960 Cal.",
                    price: "$32",
                },
                {
                    name: "Cashew Chicken With Stir-Fry",
                    description: "Gorgonzola, ricotta, mozzarella, brioche",
                    calories: "700 Cal.",
                    price: "$43",
                },
                {
                    name: "Vegetables & Green Salad",
                    description: "Ground lamb, avocados, roasted red salad",
                    calories: "1050 Cal.",
                    price: "$14",
                },
                {
                    name: "Spicy Vegan Potato Curry",
                    description: "Spectacular cream cheese, crumbled blue cheese",
                    calories: "460 Cal.",
                    price: "$35",
                },
            ],
        },
    ]



    return (
        <div className="container min-h-[100vh] mx-auto px-4 py-8">
            <div className="">
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any 
                    menuSections.map((section: any, index: number) => (
                        <div key={index} className="mb-16">

                            <div

                                className={`grid md:grid-cols-2 gap-3 place-items-center   items-start ${index % 2 === 0 ? "" : "md:grid-flow-col-dense"
                                    }`}
                            >

                                <div
                                    className={`relative h-[400px] overflow-hidden mx-auto ${index % 2 === 0 ? "" : "md:order-last"
                                        }`}
                                >
                                    <Image
                                        src={section.image}
                                        alt={section.title}
                                        width={300}
                                        height={400}
                                        className="object-cover"
                                    />
                                </div>

                                <div className="space-y-6 mx-auto">
                                    <h2 className="text-2xl font-bold">{section.title}</h2>
                                    <div className="space-y-4">
                                        {

                                            //  eslint-disable-next-line @typescript-eslint/no-explicit-any 
                                            section.items.map((item: any, itemIndex: number) => (
                                                <div
                                                    key={itemIndex}
                                                    className="flex justify-between items-start border-b border-gray-200 pb-4"
                                                >
                                                    <div className="space-y-1">
                                                        <h3 className="font-medium">{item.name}</h3>
                                                        <p className="text-sm text-gray-600">{item.description}</p>
                                                        <p className="text-xs text-gray-500">{item.calories}</p>
                                                    </div>
                                                    <div className="text-orange-400 font-medium">{item.price}</div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))}
            </div>


            <div className="">
                <>
                    <Stats />
                </>
            </div>


            <div className=" mt-10">
                {
                 // eslint-disable-next-line @typescript-eslint/no-explicit-any 
                menuSections.map((section: any, index: number) => (
                    <div key={index} className="mb-16">

                        <div

                            className={`grid md:grid-cols-2 gap-3 place-items-center   items-start ${index % 2 === 0 ? "" : "md:grid-flow-col-dense"
                                }`}
                        >

                            <div
                                className={`relative h-[400px] overflow-hidden mx-auto ${index % 2 === 0 ? "" : "md:order-last"
                                    }`}
                            >
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    width={300}
                                    height={400}
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-6 mx-auto">
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                                <div className="space-y-4">
                                    {

                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        section.items.map((item: any, itemIndex: number) => (
                                            <div
                                                key={itemIndex}
                                                className="flex justify-between items-start border-b border-gray-200 pb-4"
                                            >
                                                <div className="space-y-1">
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    <p className="text-sm text-gray-600">{item.description}</p>
                                                    <p className="text-xs text-gray-500">{item.calories}</p>
                                                </div>
                                                <div className="text-orange-400 font-medium">{item.price}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>



    );
}
