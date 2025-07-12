import Link from "next/link";
import dbConnect, { collectionNameObj } from "../lib/dbConnect";
import Image from "next/image";

const Services = async () => {
  const serviceData = dbConnect(collectionNameObj.serviceData);
  const data = await serviceData.find({}).toArray();
  return (
    <section className="my-14 px-5 md:px-16 lg:px-24">
      {/* service section header */}
      <div>
        <h1 className="text-3xl text-left font-bold">Our Services</h1>
      </div>
      {/* Service cart */}
      <div className="grid col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((service) => (
          <div key={service._id} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
              width={314}
              height={208}
            />
            <h2 className="text-xl font-semibold mt-4">{service.title}</h2>

            <div className="text-gray-600 mt-2 flex ">
              <p className="text-lg font-bold mt-2">${service.price}</p>
              <Link
                href={`/services/${service._id}`}
                className="ml-auto text-blue-500 hover:underline"
              >
                <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
