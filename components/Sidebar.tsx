"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";

interface SidebarPros {
          children: React.ReactNode;
}

const Sidebar: React.FC<SidebarPros> = ({
          children
}) => {
          const pathname = usePathname();

          const routes = useMemo(() => [
                    {
                              icon: HiHome,
                              label: "Home",
                              active: pathname !== '/search',
                              href: '/',
                    },
                    {
                              icon: BiSearch,
                              label: "Search",
                              active: pathname === '/search',
                              href: '/search',
                    }
          ], [pathname]);
          return (
                    <div className="flex h-full">
                              <div className="hidden md:flex flex-col gap-y-2 w-[300px] bg-black h-full p-2">
                                        <Box>
                                                  <div className="
                                                            flex
                                                            flex-col
                                                            gap-y-4
                                                            px-5
                                                            py-4
                                                  ">
                                                            {routes.map((item) => (
                                                                      <SideBarItem
                                                                                key={item.label}
                                                                                {...item}
                                                                      />
                                                            ))}
                                                  </div>
                                        </Box>
                                        <Box className="overflow-y-auto h-full">
                                                  <Library />


                                        </Box>
                              </div>
                              <main className="h-full flex-1 overflow-y-auto py-2 ">
                                        {children}
                              </main>
                    </div>

          );

}

export default Sidebar;