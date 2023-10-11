import { Widgets } from "../types/widgets";

/**
 * 测试组件01
 */
export const McTest01: Widgets = {
  component: "McTest01",
  name: "测试组件01",
  icon: "",
};

/**
 * 测试组件02
 */
export const McTest02: Widgets = {
  component: "McTest02",
  name: "测试组件02",
  icon: "",
};

/**
 * 问答题
 */
export const McAnswer: Widgets = {
  component: "McAnswer",
  name: "问答题",
  icon: "",
  config: {
    questionName: "我是问答题",
    questionDescription: "请按照要求填写问答题",
    required: true,
    placeholder: "请按照要求填写问答题",
  },
};

/**
 * 图片上传
 */
export const McUpload: Widgets = {
  component: "McUpload",
  name: "图片上传",
  icon: "",
  config: {
    questionName: "我是图片上传",
    questionDescription: "请按照要求填写",
    required: true,
    placeholder: "请按照要求上传",
    // 是否只能通过拍照上传，默认通过手机相册选择
    onlyPhotograph: false,
  },
};

/**
 * 数字题
 */
export const McNumber: Widgets = {
  component: "McNumber",
  name: "数字题",
  icon: "",
  config: {
    questionName: "我是数字题",
    questionDescription: "请按照要求填写",
    required: true,
    placeholder: "请按照要求填写",
  },
};

/**
 * 单选题
 */
export const McRadio: Widgets = {
  component: "McRadio",
  name: "单选题",
  icon: "",
  config: {
    questionName: "我是单选题",
    questionDescription: "请按照要求选择",
    required: true,
    placeholder: "请按照要求填写",
    options: [
      {
        type: "text",
        label: "选项1",
      },
      {
        type: "text",
        label: "选项2",
      },
      {
        type: "text",
        label: "选项3",
      },
      // 其他类型的单选，用户选择后可以输入补充内容
      // {
      //   type: "other",
      // },
      // 当前版本不支持
      // {
      //   type: "image",
      //   imageUrl: "",
      // },
    ],
  },
};

/**
 * 多选题
 */
export const McCheckbox: Widgets = {
  component: "McCheckbox",
  name: "多选题",
  icon: "",
  config: {
    questionName: "我是多选题",
    questionDescription: "请按照要求选择",
    required: true,
    placeholder: "请按照要求填写",
    options: [
      {
        type: "text",
        label: "选项1",
      },
      {
        type: "text",
        label: "选项2",
      },
      {
        type: "text",
        label: "选项3",
      },
      // 其他类型的单选，用户选择后可以输入补充内容
      // {
      //   type: "other",
      // },
      // 当前版本不支持
      // {
      //   type: "image",
      //   imageUrl: "",
      // },
    ],
  },
};
