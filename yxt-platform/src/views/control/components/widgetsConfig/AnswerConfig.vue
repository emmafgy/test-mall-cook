<template>
  <el-form :model="controlContext.curWidget.value?.config" label-width="80px" label-position="top">
    <el-form-item label="占位符" prop="placeholder">
      <el-input
        :model-value="controlContext.curWidget.value?.config?.placeholder"
        @update:model-value="onUpdatePlaceholder"
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ControlContext } from "../../types/controlContext";

const controlContext: ControlContext = inject("controlContext") as ControlContext;

const onUpdatePlaceholder = (val: string) => {
  controlContext.curWidget.value!.config!.placeholder = val;
};
</script>
