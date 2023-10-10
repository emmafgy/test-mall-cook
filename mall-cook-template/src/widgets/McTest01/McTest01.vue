<template>
    <div class="waiting flex-center">
      <div class="waiting-text">测试组件01</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "McTest01",
  };
  </script>
  
  <style lang='scss'>
  .waiting {
    width: 100%;
    height: 60px /*no*/;
    // background-image: url("./waiting.jpg");
    background-color: #6124BC;
  
    .waiting-text {
      padding: 8px 30px /*no*/;
      background: #5487df;
      font-size: 12px /*no*/;
      color: #fff;
      pointer-events: none;
    }
  }
  </style>