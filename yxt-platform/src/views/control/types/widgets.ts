// 问题公共配置
export interface CommonConfig<T> {
  questionName: string;
  questionDescription: string;
  required: boolean;
  widgetConfig: T;
}

// 问答题
export interface AnswerWidgetBaseConfig {
  placeholder: string;
}

export type AnswerWidgetConfig = CommonConfig<AnswerWidgetBaseConfig>;

// 数字题
export interface NumberWidgetBaseConfig {
  placeholder: string;
}

export type NumberWidgetConfig = CommonConfig<NumberWidgetBaseConfig>;

// 问题组件配置
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
