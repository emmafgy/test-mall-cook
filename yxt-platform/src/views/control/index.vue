<template>
  <div class="h-100%" pos-relative of-hidden>
    <control-widgets />
    <control-panel />
    <control-config />
  </div>
</template>

<route>
  {
    meta: {
      layout: 'empty'
    }
  }
</route>

<script setup lang="ts">
import ControlConfig from "./components/ControlConfig.vue"
import ControlWidgets from "./components/ControlWidgets.vue";
import ControlPanel from "./components/ControlPanel.vue";
import { Widgets } from "./types/widgets";
import { ControlContext } from "./types/controlContext";

/**
 * data
 */
const dragstatus: Ref<boolean> = ref<boolean>(false);
const curWidget: Ref<Widgets> = ref<Widgets>(null);
const dragWidget: Ref<Widgets> = ref<Widgets>(null);
const widgetsList: Ref<Widgets[]> = ref<Widgets[]>([]);
const h5Iframe: Ref<HTMLIFrameElement | undefined> = ref<HTMLIFrameElement>();

/**
 * provide
 */
const controlContext: ControlContext = {
  dragstatus,
  curWidget,
  dragWidget,
  widgetsList,
  h5Iframe
};
provide("controlContext", controlContext);
</script>
