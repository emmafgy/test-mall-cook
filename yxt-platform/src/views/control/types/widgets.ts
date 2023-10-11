/**
 * 问题公共配置
 */
export interface CommonConfig {
  questionName: string;
  questionDescription: string;
  required: boolean;
}

/**
 * 问答题配置
 */
export interface AnswerWidgetConfig extends CommonConfig {
  placeholder: string;
}

/**
 * 数字题配置
 */
export interface NumberWidgetConfig extends CommonConfig {
  placeholder: string;
}

/**
 * 图片上传
 */
export interface UploadWidgetConfig extends CommonConfig {
  placeholder: string;
  onlyPhotograph: boolean;
}

/**
 * 单选和多选
 */
interface Option {
  type: string;
  label: string;
}

export interface RadioWidgetConfig extends CommonConfig {
  placeholder: string;
  options: Option[];
}

export interface CheckboxWidgetConfig extends CommonConfig {
  placeholder: string;
  options: Option[];
}

/**
 * 所有问题组件类型配置
 */
export type AllWidgetsConfigTypes =
  | CheckboxWidgetConfig
  | RadioWidgetConfig
  | AnswerWidgetConfig
  | NumberWidgetConfig
  | UploadWidgetConfig;

export interface BaseWidgets {
  component: string;
  name: string;
  icon: string;
  id?: string;
  height?: number;
  config?: AllWidgetsConfigTypes;
}

export type Widgets = BaseWidgets | null | undefined;
