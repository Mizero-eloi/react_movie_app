import { BiHomeAlt, BiStar, BiBookmark, BiHelpCircle } from "react-icons/bi";
import { RiCompassDiscoverLine, RiSettings3Line } from "react-icons/ri";
import { MdOutlinePrivacyTip } from "react-icons/md";

export const menu = [
  {
    name: "home",
    icon: <BiHomeAlt />,
  },
  {
    name: "Discover",
    icon: <RiCompassDiscoverLine />,
  },
  {
    name: "Favorites",
    icon: <BiStar />,
  },
  {
    name: "Bookmarks",
    icon: <BiBookmark />,
  },
];
export const general = [
  {
    name: "settings",
    icon: <RiSettings3Line />,
  },
  {
    name: "help",
    icon: <BiHelpCircle />,
  },
  {
    name: "Privacy & safety",
    icon: <MdOutlinePrivacyTip />,
  },
];
