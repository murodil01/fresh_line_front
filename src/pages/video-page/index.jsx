const VideoPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.bilibili.tv/en/video/4797436618348032"
          title="Bilibili Video"
          width="100%"
          height="100%"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;
