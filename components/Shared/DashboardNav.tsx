import React from "react";
import { Logo } from "../icons";
import { User } from "@nextui-org/user";
import { ThemeSwitch } from "../theme-switch";

const DashboardNav = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-700">
      <div className="flex justify-between items-center py-5 px-12">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <User
            name="Md Mohiuddin"
            description="Admin"
            avatarProps={{
              src: "/images/1.jpg",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
