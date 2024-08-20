"use client";

import HomeIcon from "@/components/icons/HomeIcon";
import NewsIcon from "@/components/icons/NewsIcon";
import SubscribeIcon from "@/components/icons/SubscribeIcon";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BottomNav = () => {
  const [value, setValue] = useState(null);
  const path = usePathname();

  const getValueFromPath = (path) => {
    if (path === '/main/home') return 0;
    if (path === '/main/news') return 1;
    if (path === '/main/subscribe') return 2;
    return 0;
  };

  useEffect(() => {
    if (path) {
      setValue(getValueFromPath(path));
    }
  }, [path])
  return (
    <div className="sticky bottom-0 p-[10px]">
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
          component={Link}
          href="/main/home"
        />
        <BottomNavigationAction
          label="News"
          icon={<NewsIcon color={value === 1 ? "#014899" : "#CDCDD6"} />}
          classes={{
            root: "text-text-inactive",
            selected: "text-primary",
          }}
          component={Link}
          href="/main/news"
        />
        <BottomNavigationAction
          label="Subscribe"
          icon={<SubscribeIcon color={value === 2 ? "#014899" : "#CDCDD6"} />}
          classes={{
            root: "text-text-inactive",
            selected: "text-primary",
          }}
          component={Link}
          href="/main/subscribe"
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
