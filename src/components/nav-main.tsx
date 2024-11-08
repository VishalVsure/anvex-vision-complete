"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const storedState = localStorage.getItem("collapsibleState");
    if (storedState) {
      setOpenItems(new Set(JSON.parse(storedState)));
    }
  }, []);
  useEffect(() => {
    if (openItems.size > 0) {
      localStorage.setItem(
        "collapsibleState",
        JSON.stringify(Array.from(openItems))
      );
    } else {
      localStorage.removeItem("collapsibleState");
    }
  }, [openItems]);

  const handleToggle = (title: string) => {
    setOpenItems((prevState) => {
      const newState = new Set(prevState);
      if (newState.has(title)) {
        newState.delete(title);
      } else {
        newState.add(title);
      }
      return newState;
    });
  };

  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            open={openItems.has(item.title)}
            onOpenChange={() => handleToggle(item.title)}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              {item.items?.length !== 0 ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem
                          key={subItem.title}
                          onClick={() => navigate(subItem.url)}
                          className="cursor-pointer"
                        >
                          <SidebarMenuSubButton asChild>
                            <span>{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : (
                <>
                  <SidebarMenuButton onClick={() => navigate(item.url)}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
export default NavMain;
