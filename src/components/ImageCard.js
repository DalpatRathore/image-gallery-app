import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(", ");

  return (
    <div className="max-w-sm font-mono rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />

      <div className="px-6 py-4 bg-yellow-100">
        <div className="font-bold text-lg mb-1">
          Photo By:
          <span className="font-bold font-sans text-purple-800">
            {" "}
            {image.user}
          </span>
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            <span className="bg-black text-white px-3 py-0.5 rounded-full">
              {image.views}
            </span>
          </li>
          <li>
            <strong>Downloads: </strong>
            <span className="bg-black text-white px-3 py-0.5 mx-1 rounded-full">
              {image.downloads}
            </span>
          </li>
          <li>
            <strong>Likes: </strong>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            <span className="bg-black text-white px-3 py-0.5 mx-1 rounded-full">
              {image.likes}
            </span>
          </li>
          <li>
            <strong>Comments: </strong>
            <i class="fa fa-comments" aria-hidden="true"></i>
            <span className="bg-black text-white px-3 py-0.5 mx-1 rounded-full">
              {image.comments}
            </span>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 bg-yellow-100">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="underline inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2 cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
