const YouTube = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-[90%] aspect-video">
        <iframe
          className="w-[80%] h-[80%] m-auto rounded-[50px] shadow-lg"
          src="https://www.youtube.com/embed/iwj5gmrhK0M"
          title="Eldor Shomurodov podkast"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTube;
