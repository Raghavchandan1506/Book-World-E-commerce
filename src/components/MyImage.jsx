import { useState } from "react";

const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="flex flex-col md:flex-row gap-5 items-center">
      {/* Thumbnail Images */}
      <div className="flex md:flex-col gap-3">
        {imgs.map((curEle, index) => (
          <figure key={index}>
            <img
              src={curEle}
              alt={`image-${index}`}
              onClick={() => setMainImage(curEle)}
              className="w-24 md:w-48 lg:w-64 cursor-pointer hover:drop-shadow-2xl transition-transform transform hover:scale-105"
            />
          </figure>
        ))}
      </div>

      {/* Main Image */}
      <div>
        <img
          src={mainImage}
          alt="Main"
          className="w-full md:w-[600px] lg:w-[900px] xl:w-[1100px] object-contain transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default MyImage;
