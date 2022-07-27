import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Typography } from "@mui/material";

type TabData = {
  tabName: string;
  tabData: string;
};

interface Props {
  data?: TabData[];
  onTabChange?: any;
  value?: any;
}
const SecondaryTabs = ({ data, value, onTabChange }: Props) => {
  return (
    <TabContext value={value}>
      <TabList onChange={onTabChange}>
        {data?.map((eachTab: TabData, index: number) => {
          return (
            <>
              <Tab
                label={<Typography>{eachTab.tabName}</Typography>}
                value={index}
              />
              <TabPanel value="1">
                <Typography>{eachTab.tabData}</Typography>
              </TabPanel>
            </>
          );
        })}
      </TabList>
    </TabContext>
  );
};

export default SecondaryTabs;
