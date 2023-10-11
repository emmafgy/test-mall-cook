<template>
  <div class="wrap">
    <div class="h-100% w-100% bg-white p16px" of-auto>
      <ul>
        <li
          v-for="item of widgets"
          :key="item?.component"
          class="item"
          :data-component="item?.component"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="dragEnd"
        >
          <!-- <i class="icon" :class="item?.icon"></i> -->
          <el-icon :size="20">
            <Star />
          </el-icon>
          <span>{{ item?.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Widgets } from "../types/widgets";
import { ControlContext } from "../types/controlContext";
import { getRandomCode } from "@/utils";
import { Star } from "@element-plus/icons-vue";
import { McTest01, McTest02, McAnswer, McRadio, McCheckbox, McNumber, McUpload } from "./widgetList";

const controlContext: ControlContext = inject("controlContext") as ControlContext;

const widgets: Ref<Widgets[]> = ref<Widgets[]>([McTest01, McTest02, McAnswer, McRadio, McCheckbox, McNumber, McUpload]);

// 获取组件对象
const getNewComponent = (componentName: string): Widgets => {
  let component: Widgets = widgets.value.find((item) => item?.component === componentName)!;
  component.id = getRandomCode();
  return component;
};

// 拖拽开始
const handleDragStart = (e: DragEvent) => {
  const target: HTMLElement = e.target as HTMLElement;
  controlContext.dragWidget.value = getNewComponent(target?.dataset?.component as string);
  controlContext.dragstatus.value = true;
};

// 拖拽结束
const dragEnd = (e: DragEvent) => {
  console.log({
    e,
  });
  controlContext.h5Iframe.value?.contentWindow?.postMessage(
    {
      even: "drop",
      params: JSON.parse(JSON.stringify(controlContext.dragWidget.value)),
    },
    "*"
  );
  controlContext.dragstatus.value = false;
};
</script>

<style lang="css" scoped>
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 176px;
  overflow: hidden;
}

.wrap .item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 72px; no */
  margin-bottom: 8px; /*no*/
  padding: 10px 0; /*no*/
  font-size: 12px; /*no*/
  color: #666;
}

.wrap .item i {
  font-size: 29px; /*no*/
  margin-top: 5px; /*no*/
  margin-bottom: 10px; /*no*/
}

.wrap .item:hover {
  color: #fff;
  background: var(--el-color-primary);
}
</style>
./widgetList
