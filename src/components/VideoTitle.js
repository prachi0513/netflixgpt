const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white">
      <h1 className="mt-36 ml-12 text-6xl mb-2 font-bold">{title}</h1>
      <h1 className="ml-12 w-1/4">{overview}</h1>

      <div className="ml-12 ">
        <button className="p-4 m-2 bg-white text-black rounded-lg">
          ▶️ Play
        </button>
        <button className="p-4 m-2 bg-gray-300 opacity-80 text-black rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
