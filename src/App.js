import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Loader from "./components/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);
  return (
    <div className="bg-gradient-to-r from-pink-500 via-gray-100 to-yellow-400	 container mx-auto px-3 py-1">
      <ImageSearch searchText={text => setTerm(text)}></ImageSearch>
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <Loader></Loader>
      ) : (
        // <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        <div className="grid grid-cols-3 gap-5">
          {images.map(image => (
            <ImageCard key={image.id} image={image}></ImageCard>
          ))}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
