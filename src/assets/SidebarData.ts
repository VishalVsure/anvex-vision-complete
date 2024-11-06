import {
    AudioWaveform,
    BookOpen,
    Bot,
    Frame,
    GalleryVerticalEnd,
    PieChart,
    Settings2,
    SquareTerminal,
  } from "lucide-react"

const data = {
    user: {
      name: "VCS",
      email: "team@vcs.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Anvex Vision",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "VICS",
        logo: AudioWaveform,
        plan: "Startup",
      },
    ],
    navMain: [
      {
        title: "People Management",
        url: "/manage",
        icon: SquareTerminal,
        isActive: true,
        items:[]
      },
      {
        title: "Video",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Add Source",
            url: "/mgmt",
          },
          {
            title: "Source Ruleset",
            url: "#",
          },
        ],
      },
      {
        title: "Realtime Video Preview",
        url: "#",
        icon: BookOpen,
        items:[]
      },
      {
        title: "Alarm Management",
        url: "#",
        icon: Settings2,
        items:[]
      },
    ],
    projects: [
      {
        name: "Preferences",
        url: "#",
        icon: Frame,
      },
      {
        name: "Network",
        url: "#",
        icon: PieChart,
      },
    ],
  }
  
export default data