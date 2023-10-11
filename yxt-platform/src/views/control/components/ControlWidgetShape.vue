<template>
  <div class="shape" @click="setcurComponent()">
    <!-- 组件工具栏 -->
    <div v-if="props.data?.component != 'waiting'" class="shape-tab">
      <!-- 删除 -->
      <template v-if="controlContext.curWidget && controlContext.curWidget.value?.id == props.data?.id">
        <el-icon :size="20" style="cursor: pointer;" @click.stop="delComponent(props.data?.id)">
          <Delete />
        </el-icon>
      </template>

      <!-- 组件名 -->
      <span v-else>{{ props.data?.name }}</span>
    </div>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { Widgets } from "../types/widgets";
import { ControlContext } from "../types/controlContext";
import { Delete } from "@element-plus/icons-vue";
/**
 * Props
 */
interface Props {
  data: Widgets;
}
const props = withDefaults(defineProps<Props>(), {
  data: null,
});

/**
 * emit
 */
// 3.3+: alternative, more succinct syntax
// const emit = defineEmits<{
//   change: [id: number]
//   update: [value: string]
// }>()

const emit = defineEmits<{
  changeCurrWidget: [value: Widgets];
}>();

const controlContext: ControlContext = inject("controlContext") as ControlContext;

// 修改选中物料
const setcurComponent = () => {
  console.log("click setcurComponent");
  emit("changeCurrWidget", props.data);
};

// 删除物料
const delComponent = (id: string | undefined) => {
  if(!id) return;
  let index = controlContext.widgetsList.value.findIndex((item) => item?.id == id);
  controlContext.widgetsList.value.splice(index, 1);
  controlContext.curWidget.value = undefined;
};
</script>

<style lang="css" scoped>
.shape {
  position: relative;
}

.shape .event-none {
  pointer-events: none;
}

.shape .tab-icon {
  color: #969799;
  cursor: pointer;
}

.shape .tab-icon:hover {
  color: #87888a;
}

.shape .shape-tab {
  position: absolute;
  right: -86px; /*no*/
  top: 0; /*no*/
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px; /*no*/
  height: 24px; /*no*/
  font-size: 12px; /*no*/
  color: #333;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.shape .shape-tab::after {
  content: "";
  position: absolute;
  right: 100%; /*no*/
  top: 7px; /*no*/
  width: 0; /*no*/
  height: 0; /*no*/
  border-width: 5px; /*no*/
  border-style: solid;
  border-color: transparent;
  margin-bottom: -1px; /*no*/
  border-right-width: 5px; /*no*/
  border-right-color: currentColor;
  color: #fff;
}
</style>
