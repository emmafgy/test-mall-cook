<template>
  <div class="widget-conifg">
    <template v-if="controlContext.curWidget.value">
      <div>{{controlContext.curWidget.value?.name }}</div>
      <div>
        <el-input
          :model-value="controlContext.curWidget.value?.config?.questionName"
          @update:model-value="onUpdateQuestionName"
        ></el-input>
      </div>
      <div>
        <el-input
          type="textarea"
          :model-value="controlContext.curWidget.value?.config?.questionDescription"
          @update:model-value="onUpdateQuestionDescription"
        ></el-input>
      </div>
      <div>
        <el-switch
          :model-value="controlContext.curWidget.value?.config?.required"
          @update:model-value="onUpdateQuestionRequired"
        />
      </div>
      <div class="widget-conifg-wrapper">
        <answer-widget-config v-if="controlContext.curWidget.value.component === 'McAnswer'"></answer-widget-config>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ControlContext } from "../types/controlContext";
import AnswerWidgetConfig from "./widgetsConfig/AnswerConfig.vue"

const controlContext: ControlContext = inject("controlContext") as ControlContext;

const onUpdateQuestionName = (val: string) => {
  controlContext.curWidget.value.config.questionName = val;
};

const onUpdateQuestionDescription = (val: string) => {
  controlContext.curWidget.value.config.questionDescription = val;
};

const onUpdateQuestionRequired = (val: boolean) => {
  controlContext.curWidget.value.config.required = val;
};

// watch(controlContext.curWidget, (newVal) => {
//   console.log({
//     curWidget: newVal,
//   });
// });

// onMounted(()=>{
//   console.error({
//     curWidget: controlContext.curWidget
//   })
// })
</script>

<style lang="css" scoped>
.widget-conifg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  background: #fff;
}
</style>
