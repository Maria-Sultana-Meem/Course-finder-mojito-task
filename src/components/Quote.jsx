import { useEffect, useState } from "react";

const Quote = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // dynamic random image
    setImageUrl(`https://picsum.photos/900/250?random=${Math.floor(Math.random() * 1000)}`);
  }, []);

  return (
    <div className="mb-4">
      <img
        src={imageUrl}
        alt="Random Learning"
        className="w-full h-[400px] rounded-lg shadow"
      />
      <p className="text-center text-sm text-gray-500 mt-2">
        📸 Random image from Picsum Public API
      </p>
    </div>
  );
};

export default Quote;
