import type React from "react"

interface VideoBackgroundProps {
  videoSrc: string
  fallbackImageSrc: string
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, fallbackImageSrc }) => {
  return (
    <div className="video-container absolute inset-0 overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </div>
  )
}

export default VideoBackground

