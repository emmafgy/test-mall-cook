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
 * 所有问题组件类型配置
 */
export type AllWidgetsConfigTypes = AnswerWidgetConfig | NumberWidgetConfig;

export interface BaseWidgets {
  component: string;
  name: string;
  icon: string;
  id?: string;
  height?: number;
  config?: AllWidgetsConfigTypes;
}

export type Widgets = BaseWidgets | null | undefined;
