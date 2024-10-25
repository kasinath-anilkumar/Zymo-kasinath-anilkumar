import React from "react";

const Youtube = () => {
  return (
    <div className="items-center justify-center text-center py-10 px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-2">Youtube Video</h1>
      <div className="mt-5 items-center justify-center flex">
        <iframe
          className="rounded-3xl w-full max-w-xs h-48 sm:max-w-md sm:h-60 md:max-w-3xl md:h-96"
          src="https://www.youtube.com/embed/videoseries?list=PLXVSl4ATFd6ZWYy-YnrGvx29t8ZO5kkmK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
