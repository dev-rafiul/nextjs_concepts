import React from 'react';


export async function generateMetadata({params}){
  const {id} = await params;

  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
  const {details = {}} = await res.json();
  // console.log(data)
  return {
    title: details.title,
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: ["Next.js", "React.js"]
  }


}


const getSingleFood = async(id) => {
  const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
  const data = await res.json();
  return data.details;
}

const page = async({params}) => {
  const {id} = await params;
  const food = await getSingleFood(id)


  if(!food){
    return <h2>Food Not Found</h2>
  }


   const { title, foodImg, price, video, category, area } = food;
  return (
     <div className="max-w-3xl mx-auto p-6">
      {/* Food Image */}
      <img
        src={foodImg}
        alt={title}
        className="w-full h-72 object-cover rounded-xl shadow"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-5">{title}</h1>

      {/* Category + Area */}
      <div className="flex gap-4 mt-2 text-gray-600">
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{category}</p>
        <p className="bg-gray-100 px-3 py-1 rounded-lg text-sm">{area}</p>
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold mt-4">{price}৳</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <a
          href={video}
          target="_blank"
          className="flex-1 bg-red-600 text-white py-3 rounded-lg text-center hover:bg-red-700"
        >
          Watch Video
        </a>

        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default page;