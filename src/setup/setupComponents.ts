import type { App } from "vue";
import { Dropdown, Menu, Tooltip, VClosePopper, VTooltip } from "floating-vue";
import "floating-vue/dist/style.css";
// @ts-ignore
import VueGridLayout from "vue-grid-layout";
import Widgets from "@/views/dashboard/widgets";

export function setupComponents(app: App) {
  app.use(VueGridLayout);
  app.use(Widgets);

  app.directive("tooltip", VTooltip);
  app.directive("close-popper", VClosePopper);
  app.component("FloatingDropdown", Dropdown);
  app.component("FloatingTooltip", Tooltip);
  app.component("FloatingMenu", Menu);
}
