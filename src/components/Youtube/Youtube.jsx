import React from "react";

const Youtube = () => {
  return (
    <div className="items-center justify-center text-center py-10">
      <h1 className="text-5xl font-bold py-2">Youtube Video</h1>
      <div className="mt-5 items-center justify-center flex">
        <iframe
          className="rounded-3xl w-80 h-48 md:w-3/5 md:h-96"
         
          src="https://www.youtube.com/embed/videoseries?list=PLXVSl4ATFd6ZWYy-YnrGvx29t8ZO5kkmK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
