<!--
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2022-01-19 14:41:20
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-02-07 09:21:30
-->
<template>
  <view class="render">
    <textarea
      class="render_textarea"
      :auto-height="autoHeight"
      value=""
      :placeholder="widgetItem.config.widgetConfig.placeholder"
    />

    <!-- <view class="Number">
      <input class="answer"  type="number" placeholder="保留2位小数" />
      <u-line color="info" border-style="solid" direction="row" length="100%"></u-line>
    </view> -->
  </view>
</template>

<script>
export default {
  components: {},

  data() {
    return {
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
    childSetList() {},
  },
};
</script>

<style lang="scss" scoped>
.render {
  .render_textarea {
    width: 100%;
    min-height: 50px;
    padding: 4rpx 10rpx;
    border: 1rpx solid rgba(198, 195, 195, 1);
    border-radius: 6px;
    font-size: 24rpx;
    font-weight: 500;
  }

  .Number {
    width: 100%;
    height: auto;
    .answer {
      width: 100%;
      font-size: 24rpx;
      font-weight: 500;
      margin-bottom: 10rpx;
    }
  }

  .Radio {
    width: 100%;
    height: auto;
    .Radio_select {
      width: 100%;
      height: 60rpx;
      background-color: #e7f8fe;
      border-radius: 30rpx;
      margin-top: 20rpx;
      padding-left: 20rpx;
      border: 1rpx solid #97dcfc;
      display: flex;
      align-items: center;
      justify-content: center;
      .radio_list {
        width: 100%;
        display: flex;
        align-items: center;
        .list_radio {
          transform: scale(0.7);
        }
        .answer {
          width: 100%;
          font-size: 24rpx;
          font-weight: 500;
        }
      }
    }
  }
}
</style>