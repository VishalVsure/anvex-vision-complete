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
        name: "VCS",
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
        url: "#",
        icon: SquareTerminal,
        isActive: true,
      },
      {
        title: "Video",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Add Source",
            url: "#",
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
      },
      {
        title: "Alarm Management",
        url: "#",
        icon: Settings2,
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