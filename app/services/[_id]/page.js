import dbConnect from "@/app/lib/page";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const serviceData = async ({ params }) => {
  const data = dbConnect("serviceData");
  const service = await data.findOne({ _id: new ObjectId(params._id) });
  const serviceData = dbConnect("serviceData");
  const serviceCategory = await serviceData.find({}).toArray();
  return (
    <section>
      {/* banner section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        {/* Background Image */}
        <Image
          src={"/assets/images/banner/4.jpg"}
          alt="Banner background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Black Shadow Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* Headline */}
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 z-20">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Service Details
          </h1>
        </div>
      </div>
      {/* Service Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-start gap-8">
        {/* left side service details */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <Image
            src={service.img}
            alt={service.title}
            className="w-full h-48 object-cover rounded-t-lg"
            width={400}
            height={208}
          />
          <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
          <p className="text-gray-600 mt-2">{service.description}</p>
          <div className="text-gray-600 mt-2 flex">
            <p className="text-lg font-bold mt-2">${service.price}</p>
            <button className="ml-auto bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Service Categories</h3>
          <ul className="space-y-2">
            {serviceCategory.map((category) => (
              <div
                key={category._id}
                className="text-gray-700 flex justify-between items-center bg-gray-300 shadow-md p-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300"
              >
                <p>{category.title}</p>
                <Link href={`/services/${category._id}`}>
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default serviceData;
