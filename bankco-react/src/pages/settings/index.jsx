import React from "react";
import ProtoTypes from "prop-types";
import SettingsSidebar from "../../component/settings/SettingsSidebar";
import { Outlet } from "react-router-dom";

function Settings({ children }) {
  return (
    <main className="w-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] pt-[100px]">
      <div className="grid grid-cols-1 xl:grid-cols-12 bg-white dark:bg-darkblack-600 rounded-xl">
        <SettingsSidebar />
        <div className="py-8 px-10 col-span-9 tab-content">
          <Outlet />
          {children}
        </div>
      </div>
    </main>
  );
}

Settings.propTypes = {
  children: ProtoTypes.node,
};

export default Settings;
