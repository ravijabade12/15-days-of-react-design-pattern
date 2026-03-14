import React from "react";
import Tabs from "./tabs";

const TabsDemo = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab>Home</Tabs.Tab>
        <Tabs.Tab>Profile</Tabs.Tab>
        <Tabs.Tab>Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panels>
        <Tabs.Panel>
          <p>This is the home tab content.</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>This is the profile tab content.</p>
        </Tabs.Panel>
        <Tabs.Panel>
          <p>This is the settings tab content.</p>
        </Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
};

export default TabsDemo;
