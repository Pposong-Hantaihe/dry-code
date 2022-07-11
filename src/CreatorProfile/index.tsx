import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import SummaryBoard from "../../components/SummaryBoard";
import Title from "../../components/Title";
import CreatorProfileWrapper from "./CreatorProfileWrapper";
import TabPanel from "./TabPanel";
import AudienceTab from "./Tabs/AudienceTab";
import BrandAffinityTab from "./Tabs/BrandAffinityTab";
import CampaignHistoryTab from "./Tabs/CampaignHistoryTab";
import ChannelTab from "./Tabs/ChannelTab";

const CreatorProfile = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChange = (event: any, newTab: any) => {
    setCurrentTab(newTab);
  };
  const a11yProps = (index: number) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <CreatorProfileWrapper>
      <Title title="GRAZY GRACE" />
      <SummaryBoard
        profileImgUrl="https://dl.airtable.com/.attachmentThumbnails/f03cab2c67aa9cdbacdcc50753b7cc71/d5c3a07d"
        tagList={["K-pop", "BTS", "Korean idol", "South Korean music", "Jimin (singer, born 1995)", "South Korean styles of music", "Music", "Korean music", "South Korea", "Black swan (song)", "Entertainment", "AOA (group)", "Culture", "Jisoo", "Popular music"]}
        mentionedBrandList={["yesstyle", "spotify", "cosrx", "canon", "Simple Health", "pink", "skillshare", "galaxy", "vanity planet", "drop", "Skinnymint", "audible", "sephora", "lounge", "pokemon", "keeps", "Prinker"]}
        sponsorsList={["WellsCare", "Live Duck", "Rosetta Stone", "yesstyle", "casetify", "raycon", "Grammarly", "meebak", "skillshare", "Orangejuicethebrand", "bokksu", "HelloFresh", "Wix", "Skinnymint", "vodana", "Fashionnova", "oasisjoy", "Stylevana", "Simple Health", "SweetRing", "teami", "Glam Up", "Italo", "audible", "yoins", "AMIclubwear"]}
        basicInformation={{
          country: "US",
          ageAndSex: "female 18-24",
        }}
        socialChannelList={[
          {
            platform: "Youtube",
            channelUrl:
              "https://youtube.com/channel/UC6dCQkOCDAcisZsFXE6bGVg",
            channelName: "GRAZY GRACE",
            followerCount: 422000,
          },
          {
            platform: "Instagram",
            channelUrl: "https://www.instagram.com/gebabyk/",
            channelName: "gebabyk",
            followerCount: 138000,
          },
          {
            platform: "Tiktok",
            channelUrl: "https://www.tiktok.com/@iamgrazygrace",
            channelName: "iamgrazygrace",
            followerCount: 142300,
          },
        ]}
      />
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: "30px" }}>
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab label="Channels" {...a11yProps(0)} />
          <Tab label="Audience" {...a11yProps(1)} />
          <Tab label="Brand Affinity" {...a11yProps(2)} />
          <Tab label="Campaign History" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={currentTab} index={0}>
        <ChannelTab />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <AudienceTab />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <BrandAffinityTab />
      </TabPanel>
      <TabPanel value={currentTab} index={2}>
        <CampaignHistoryTab />
      </TabPanel>
    </CreatorProfileWrapper>
  );
};

export default CreatorProfile;
