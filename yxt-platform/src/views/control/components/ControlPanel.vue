<template>
  <div class="panel">
    <div class="page">
      <iframe
        v-if="initIframe"
        ref="iframe"
        class="page-iframe"
        frameborder="no"
        :style="{
            height: iframeHeight + 'px',
            pointerEvents: controlContext.dragstatus.value ? 'none' : 'auto',
          }"
        :src="iframeUrl"
        @load="init"
      ></iframe>

      <!-- 拖拽与iframe交互蒙层 -->
      <div
        class="page-layer"
        type="page"
        :style="{
            height: iframeHeight + 'px',
            zIndex: controlContext.dragstatus.value ? '20' : '1',
          }"
        @dragover="layerMove"
      >
        <control-widget-shape
          v-for="item in widgetInfoList"
          :key="item?.id"
          :data="item"
          @changeCurrWidget="changeCurrWidget"
        >
          <div class="page-layer-widget" type="widget" :id="item?.id" :style="{ height: item?.height + 'px' }"></div>
          <!-- <div
            ref="layerWidget"
            class="page-layer-widget"
            type="widget"
            :id="item?.id"
            :style="{ height: item?.height + 'px' }"
          ></div> -->
        </control-widget-shape>
      </div>
    </div>

    <!-- 页面设置 -->
    <!-- <el-tooltip effect="light" content="页面设置" placement="bottom">
        <div class="panel-set flex-center" @click="control.curWidget = undefined">
          <i class="el-icon-setting"></i>
        </div>
      </el-tooltip> -->
  </div>
</template>

<script setup lang="ts">
import ControlWidgetShape from "./ControlWidgetShape.vue";
import CONFIG from "@/config"
import { Widgets } from "../types/widgets";
import { ControlContext } from "../types/controlContext";

const controlContext: ControlContext = inject("controlContext") as ControlContext;

/**
 * data
 */

const widgetInfoList: Ref<Widgets[]> = ref<Widgets[]>([]);
const iframeHeight: Ref<number> = ref<number>(667);
const initIframe: Ref<boolean> = ref<boolean>(false);
const iframe: Ref<HTMLIFrameElement | undefined> = ref<HTMLIFrameElement>();
const iframeUrl: Ref<string> = ref<string>(CONFIG.h5IframeUrl);

/**
 * methods
 */

// 发送信息，同步初始化iframe
const init = () => {
  console.log("初始化...");
  messageInit();
  messageList();
};

// 设置页面高度
const setHeight = (params: Widgets[]) => {
  widgetInfoList.value = params;
  iframeHeight.value = widgetInfoList.value.reduce((a, b: Widgets) => a + b.height, 0);
  // console.log(`当前高度：${this.iframeHeight}`);
};

// iframe内物料列表发生变化，同步更新
const setList = (params) => {
  console.log(" iframe内物料列表发生变化，同步更新");
  console.log(params);
  let { list } = params;
  controlContext.widgetsList.value = list;
};

// 设置选中物料
const setCurrWidget = (params: Widgets) => {
  let { id } = params!;
  controlContext.curWidget.value = controlContext.widgetsList.value.find((item) => id == item?.id);
  console.log({
    setCurrWidget: params,
    value: controlContext.curWidget.value,
  });
};

const getMessageHandle = (e: MessageEvent) => {
  let { type, params } = e.data;
  switch (type) {
    case "setList":
      setList(params);
      break;
    case "setHeight":
      setHeight(params);
      break;
    case "setCurrWidget":
      setCurrWidget(params);
      break;
  }
};

// 接收iframe信息
const getMessage = () => {
  window.addEventListener("message", getMessageHandle);
};

// 修改选中物料，并通知iframe，同步更新
const changeCurrWidget = (widget: Widgets) => {
  setCurrWidget(widget);
  iframe.value?.contentWindow?.postMessage(
    {
      even: "changeCurrWidget",
      params: { id: widget?.id },
    },
    "*"
  );
};

// 物料拖拽移动,控制waiting移动
const layerMoveFun = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();

  console.log("物料拖拽移动,控制waiting移动");

  if (!controlContext.dragstatus.value) return;

  let type = e.target?.getAttribute("type");
  let params = {
    type: "page",
  };

  if (type == "widget") {
    let [y, h] = [e.offsetY, e.target?.offsetHeight];
    params = {
      id: e.target?.getAttribute("id"),
      type: "widget",
      direction: y < h / 2,
    };
  }

  iframe.value?.contentWindow?.postMessage(
    {
      even: "move",
      params,
    },
    "*"
  );
};

// 调用物料拖拽移动(节流)
const layerMove = (e: DragEvent) => {
  throttle(layerMoveFun, 1)(e);
};

// 发送信息，当前商城配置数据
const messageInit = () => {
  // iframe.value.contentWindow?.postMessage(
  //   {
  //     even: "init",
  //     params: { project: this.project },
  //   },
  //   "*"
  // );
};

// 发送信息，同步iframe种物料数组
const messageList = () => {
  console.log("发送信息，同步iframe种物料数组");
  console.log(controlContext.widgetsList.value);

  iframe.value?.contentWindow?.postMessage(
    {
      even: "list",
      params: JSON.parse(JSON.stringify(controlContext.widgetsList.value)),
    },
    "*"
  );
};

// 节流
const throttle = (func, wait) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
};

/**
 * watch
 */
watch(
  controlContext.widgetsList,
  () => {
    messageList();
  },
  { deep: true }
);

/**
 * 生命周期
 */
onBeforeMount(() => {
  initIframe.value = true;
});

onMounted(() => {
  controlContext.h5Iframe = iframe;
  getMessage();
});

onUnmounted(() => {
  console.log("注销页面");

  initIframe.value = false;
  window.removeEventListener("message", getMessageHandle);
});
</script>

<style lang="css" scoped>
.panel {
  position: absolute;
  left: 176px; /*no*/
  right: 360px; /*no*/
  height: 100%; /*no*/
  overflow: auto;
  background: #f7f8fa;
}

.panel::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.panel .panel-set {
  position: absolute;
  top: 10px;
  left: -70px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.panel .panel-set i {
  font-size: 22px;
  color: #b0afb2;
}

.panel .page {
  position: relative;
  font-size: 0;
  width: 50%;
  margin: 20px auto;
  /* padding: 20px 0; */
  height: 100%;
  /* overflow: auto; */
  background-color: #ffffff;
}

.panel .page .page-iframe {
  position: relative;
  width: 100%;
  z-index: 10;
}

.panel .page .page-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 667px;
}

.panel .page .page-layer .page-layer-widget {
  width: 100%;
  z-index: 99999;
}
</style>
