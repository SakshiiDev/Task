import React from 'react';

const VideoSection = () => {
  return (
    // Section container. Background aur vertical padding yahaan apply ki gayi hai.
    // Horizontal padding (px) hata di gayi hai.
    <section className="bg-white py-6 sm:py-6 w-full overflow-hidden">
      
      {/*
        Pehle yahaan do div the jo "container" aur "max-w-5xl" classes ke saath the.
        Unko hata diya gaya hai taaki video poori width le sake.
      */}

      <video
        // Local video ka path (public folder se).
        src="/preview-with-sound-10-mb (1).mp4" 
        
        // `w-full` -> Video ko poori screen ki width dega.
        // `h-auto` -> Video ki height ko aspect ratio ke hisaab se adjust karega.
        // Rounded corners aur padding hata di gayi hai.
        className="w-full h-auto"
        
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

    </section>
  );
};

export default VideoSection;