'use client'

import { useState } from "react";
import HomeIcon from "@/components/icons/HomeIcon";
import NewsIcon from "@/components/icons/NewsIcon";
import SubscribeIcon from "@/components/icons/SubscribeIcon";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Home from '@/components/Home'
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";

const HomePage = () => {
    const [value, setValue] = useState(0);
    return (
      <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-auto bg-bg-secondary">
          {value === 0 && <Home />}
          {value === 1 && <News />}
          {value === 2 && <Subscribe />}
        </div>
        <div className="sticky bottom-0">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon color={value === 0 ? "#014899" : "#CDCDD6"} />}
              classes={{
                root: "text-text-inactive",
                selected: "text-primary",
              }}
            />
            <BottomNavigationAction
              label="News"
              icon={
                <NewsIcon color={value === 1 ? "#014899" : "#CDCDD6"} />
              }
              classes={{
                root: "text-text-inactive",
                selected: "text-primary",
              }}
            />
            <BottomNavigationAction
              label="Subscribe"
              icon={<SubscribeIcon color={value === 2 ? "#014899" : "#CDCDD6"} />}
              classes={{
                root: "text-text-inactive",
                selected: "text-primary",
              }}
            />
          </BottomNavigation>
        </div>
      </div>
    );
};

export default HomePage;
