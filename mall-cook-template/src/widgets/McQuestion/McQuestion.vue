<!--
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2022-01-19 14:41:20
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-02-07 09:21:30
-->
<template>
  <view class="render">
    <view class="render_top">
      <u-icon
        class="render_conten"
        name="more-dot-fill"
        color="rgba(198, 195, 195, 1)"
        size="16"
      ></u-icon>
      <view class="render_left">
        <switch :checked="widgetItem.config.required" color="rgba(198, 195, 195, 1)" class="render_switch" />
        <!-- <u-line
          color="info"
          border-style="solid"
          direction="col"
          length="32rpx"
          margin="6rpx"
        ></u-line>
        <u-icon
          class="render_icon"
          name="file-text"
          color="rgba(198, 195, 195, 1)"
          size="32"
        ></u-icon>
        <u-icon
          class="render_icon"
          name="trash-fill"
          color="rgba(198, 195, 195, 1)"
          size="32"
        ></u-icon> -->
      </view>
    </view>
    <!-- 标题 -->
    <view class="title">
      <input
        class="title"
        :value="widgetItem.config.questionName"
        type="text"
        placeholder="请填写标题"
      />
    </view>
    <!-- 描述 -->
    <view class="describe">
      <textarea
        class="describe_text"
        @blur="bindTextAreaBlur"
        :auto-height="autoHeight"
        :value="widgetItem.config.questionDescription"
        :disabled="bled"
      />
    </view>

    <slot></slot>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bled: false,
      autoHeight: true,
      height: 60,
    };
  },
  props: {
    widgetItem: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    //失去焦点
    bindTextAreaBlur() {},
  },
};
</script>

<style lang="scss" scoped>
.render {
  width: 94%;
  height: auto;
  margin: 0 auto;
  padding: 0px 5% 2% 5%;
  border: 1rpx solid #87cefa;
  border-radius: 10rpx;

  .render_top {
    position: relative;
    width: 100%;
    height: 40rpx;
    // border: 1px solid red;
    .render_conten {
      position: relative;
      left: 50%;
      top: 0%;
    }
    .render_left {
      position: absolute;
      right: 20rpx;
      top: 0rpx;
      display: flex;
      // align-items: center;
      .render_switch {
        margin-top: -10rpx;
        transform: scale(0.5);
      }
      .render_icon {
        margin-left: 10rpx;
        margin-top: -10rpx;
      }
    }
  }

  .title {
    width: 100%;
    height: auto;
    font-size: 32rpx;
    font-weight: 600;
    color: grey;
  }
  .describe {
    margin-bottom: 30rpx;
    .describe_text {
      font-size: 24rpx;
      font-weight: 500;
    }
  }
}
</style>