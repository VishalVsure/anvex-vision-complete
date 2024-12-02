import { SetStateAction, useState } from "react";

export default function VideoPreview() {
  const [mainVideo, setMainVideo] = useState("vehicle_detection_2.mp4");
  const [otherVideos, setOtherVideos] = useState([
    "Object_Detection.mp4",
    "fire_detection.mp4",
    "http://localhost:5000/video_feed",
  ]);

  const swapVideo = (clickedVideo: SetStateAction<string>) => {
    setOtherVideos((prevVideos) =>
      prevVideos.map((video) => (video === clickedVideo ? mainVideo : video))
    );
    setMainVideo(clickedVideo);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <div className="video">
        {mainVideo.endsWith(".mp4") ? (
          <video
            key={mainVideo} // Use `mainVideo` as the key
            autoPlay
            loop
            muted
            className="w-full h-[500px] object-fill rounded-lg shadow"
          >
            <source src={mainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={mainVideo}
            alt="Thumbnail"
            className="w-full h-[500px] aspect-[16/9] rounded-lg shadow"
          />
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {otherVideos.map((video, index) => (
          <div key={index} className="video cursor-pointer">
            {video.endsWith(".mp4") ? (
              <video
                key={video} // Use `video` as the key
                autoPlay
                loop
                muted
                className="w-full h-[150px] object-fill rounded-lg shadow"
                onClick={() => swapVideo(video)}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={video}
                alt="Thumbnail"
                className="w-full h-[150px] object-fill rounded-lg shadow"
                onClick={() => swapVideo(video)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
