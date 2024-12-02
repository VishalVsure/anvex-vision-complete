// import {
//   BookOpen,
//   Bot,
//   Frame,
//   GalleryVerticalEnd,
//   PieChart,
//   Settings2,
//   SquareTerminal,
// } from "lucide-react";

import {
  faVideo,
  faBell,
  faPlusCircle,
  faCog,
  faUsers,
  faUserCircle,
  IconDefinition,
  faInfoCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

// const data = {
//   user: {
//     name: "VCS",
//     email: "team@vcs.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Anvex Vision",
//       logo: GalleryVerticalEnd,
//       plan: "Enterprise",
//     },
//   ],
//   navMain: [
//     {
//       title: "People Management",
//       url: "/manage",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [],
//     },
//     {
//       title: "Video",
//       url: "#",
//       icon: Bot,
//       items: [
//         {
//           title: "Add Source",
//           url: "/add-source",
//         },
//         {
//           title: "Source Ruleset",
//           url: "/source",
//         },
//       ],
//     },
//     {
//       title: "Realtime Video Preview",
//       url: "/dashboard",
//       icon: BookOpen,
//       items: [],
//     },
//     {
//       title: "Alarm Management",
//       url: "/alarms",
//       icon: Settings2,
//       items: [],
//     },
//   ],
//   projects: [
//     {
//       name: "Preferences",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Network",
//       url: "#",
//       icon: PieChart,
//     },
//   ],
// };

interface SidebarData {
  title: string;
  slug: string;
  icon?: IconDefinition; // Use FontAwesome IconDefinition type here
}

export const sidebarData: SidebarData[] = [
  { title: "People Management", slug: "manage", icon: faUsers },
  { title: "Face IDs", slug: "face-ids", icon: faUserCircle },
  { title: "Add Video Source", slug: "add-source", icon: faPlusCircle },
  { title: "Source Ruleset", slug: "source", icon: faCog },
  { title: "Realtime Video Preview", slug: "dashboard", icon: faVideo },
  { title: "Alarm Management", slug: "alarms", icon: faBell },
];

export const sidebarFoot: SidebarData[] = [
  { title: "About Us", slug: "about-us", icon: faInfoCircle },
  { title: "Logout", slug: "logout", icon: faSignOutAlt },
];

export default sidebarData;
