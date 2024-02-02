import React from "react";
import AppSidebar from "../AppSidebar";
import AppHeader from "../AppHeader";

function AppShell(props: any) {
  const { children } = props;
  return (
    <div className="h-full w-full flex items-start">
      <AppSidebar />
      <div>
        <AppHeader />
        <main aria-labelledby="mainContent">
          <div id="mainContent" className="h-full w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default React.memo(AppShell);
