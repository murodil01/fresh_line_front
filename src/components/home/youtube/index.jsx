const YouTube = () => {
  return (
    <div className="flex flex-col items-center gap-6 mb-20">
      <div className="w-[95%] sm:w-[85%] md:w-[75%] aspect-video">
        <iframe
          className="w-full h-full rounded-[12px] sm:rounded-[24px] md:rounded-[20px] shadow-lg"
          src="https://www.youtube.com/embed/qyXiKGiGBCo"
          title="Fresh Line video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTube;
