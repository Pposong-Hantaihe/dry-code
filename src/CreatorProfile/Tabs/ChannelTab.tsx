import React, { useState } from "react";
import ChannelCarousel from "../../../components/ChannelCarousel";
import Instagram from "../../../components/Instagram";
import RecentVideos from "../../../components/RecentVideos";
import Tiktok from "../../../components/Tiktok";

interface ChannelTabProps {
  channelList: {
    channelType: string;
    channelName: string;
    channelInfo: {
      key: string;
      value: string;
    }[];
  }[];
}

const ChannelTab = () => {
  const [currentChannel, setCurrentChannel] = useState(0);
  return (
    <>
      <ChannelCarousel
        channelList={[
          {
            channelType: "Youtube",
            channelName: "GRAZY GRACE",
            channelInfo: [
              {
                key: "Subs",
                value: "422K",
              },
              {
                key: "Views",
                value: "125.44K",
              },
              {
                key: "ER",
                value: "5.46%",
              },
              {
                key: "Price",
                value: "$1,300.74 ~ $3,902.22",
              },
            ],
          },
          {
            channelType: "Instagram",
            channelName: "gebabyk",
            channelInfo: [
              {
                key: "Followers",
                value: "138K",
              },
              {
                key: "Likes",
                value: "",
              },
              {
                key: "ER",
                value: "%",
              },
              {
                key: "Price",
                value: "$ ~ $",
              },
            ],
          },
          {
            channelType: "Tiktok",
            channelName: "iamgrazygrace",
            channelInfo: [
              {
                key: "Followers",
                value: "142.3K",
              },
              {
                key: "Likes",
                value: "",
              },
              {
                key: "ER",
                value: "",
              },
              {
                key: "Price",
                value: "$ ~ $",
              },
            ],
          },
        ]}
        currentChannel={currentChannel}
        setCurrentChannel={setCurrentChannel}
      />
      {currentChannel === 0 && <RecentVideos />}
      {currentChannel === 1 && <Instagram />}
      {currentChannel === 2 && <Tiktok />}
    </>
  );
};

export default ChannelTab;
