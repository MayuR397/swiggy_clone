import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //   console.log('Online Hook', onlineStatus)

  useEffect(() => {
    // console.log("online status useeffect");
    window.addEventListener("online", () => {
      setOnlineStatus(true);
      //   console.log('Online EventListner')
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      //   console.log('Offline EventListner')
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
