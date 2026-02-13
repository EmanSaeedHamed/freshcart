import { getAllCategories } from "@/features/categories/server/categories.actions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default async function OurCategories() {
    const response = await getAllCategories();
  

  return <>
   <section className="container py-15">
    {/* heading */}
    <div className="md:flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="h-8 w-1.5 rounded-full bg-linear-to-b from-emerald-500 to-emerald-700"></div>
            <h2
             className="text-2xl md:text-3xl font-bold text-gray-800">Shop By <span className="text-emerald-600">Category</span>
             </h2>
            </div>
      {/* to categories*/}
            <Link className="flex items-center gap-1 mt-2 ml-5 md:m-0 text-primary-600 hover:text-primary-700" href="/categories">
                <span>
                    View All Categories
                </span>
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    {/* categories cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8">
        {
            response?.data.map((card)=><div key={card._id} className="bg-primary-500 flex flex-col items-center justify-center gap-2 rounded-b-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer pb-5 overflow-hidden">
            <div className="relative w-full h-52 rounded-b-full bg-white">
                <Image fill className="object-cover" src={card.image} alt="category item"/>
            </div>
             <h3 className="text-white font-semibold text-sm">
            {card.name}
             </h3>
        </div>
            )
        }
       
    </div>
   </section>
  </>
}
