import { BaseComponent } from "@/types/baseComponent";
import { TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export interface TabPanelComponentProps extends BaseComponent {}

export default function TabPanelComponent({
  children,
}: TabPanelComponentProps) {
  return <TabPanel>{children}</TabPanel>;
}
