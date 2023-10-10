import { Widgets } from "./widgets";

export interface ControlContext {
  dragstatus: Ref<boolean>;
  curWidget: Ref<Widgets>;
  dragWidget: Ref<Widgets>;
  widgetsList: Ref<Widgets[]>;
  h5Iframe: Ref<HTMLIFrameElement | undefined>;
}
