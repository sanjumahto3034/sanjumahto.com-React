import React, { useEffect, useState } from "react";
import "./WebsiteLoader.css";

const WebsiteLoader = ({ OnLoadSuccess }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleProgress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        setLoadingProgress(progress);
        console.log("Process : ", progress);
      }
    };

    const handleLoad = () => {
      // Entire page has loaded, you can perform any additional actions here
      setLoadingProgress(100);
      OnLoadSuccess();
      console.log("Load Success : ", 100);
    };

    // Attach event listeners
    window.addEventListener("progress", handleProgress);
    window.addEventListener("load", handleLoad);

    // Remove event listeners on component unmount
    return () => {
      window.removeEventListener("progress", handleProgress);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="loader-container">
      <div className="loading-content">
        <p className="loading-progress">
          Loading Progress: {loadingProgress.toFixed(2)}%
        </p>
        {/* <div className="loader"></div> */}
      </div>
      {/* Render your main content here */}
    </div>
  );
};

export default WebsiteLoader;
