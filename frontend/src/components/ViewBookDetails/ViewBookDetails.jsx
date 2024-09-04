import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { GrLanguage } from "react-icons/gr";

const ViewBookDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        // Ensure the protocol matches the backend server setup
        const response = await axios.get(
          `http://localhost:3000/app/v1//get-book-by-id/${id}`
        ); // Use http if backend does not have SSL
        console.log(response);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetch();
  }, []);

  return (
    <>
        {!Data && (<div className="h-screen bg-zinc-800 flex justify-center  items-center text-xl"><Loader/></div>) }
      {Data && (
        <div className="px-8 md:px-12 py-8 bg-zinc-900 flex gap-4 flex-col md:flex-row">
          <div className="bg-zinc-800 rounded p-4 h-[70vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center">
            <img src={Data.url} alt="image" className="h-[50vh] lg:h-[70vh]" />
          </div>
          <div className="p-4 w-full lg:w-3/6 ">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 mt-1">by {Data.author}</p>
            <p className="text-zinc-500 mt-4 text-xl">{Data.desc}</p>
            <p className="text-zinc-400 mt-4 flex items-center">
            <GrLanguage className="me-3"/>{Data.language}
            </p>
            <p className="text-zinc-100 mt-4 text-3xl font-semibold">
              Price: ₹{Data.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
