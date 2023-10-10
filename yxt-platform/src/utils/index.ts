import cssPropertyEnum from "@/enums/cssPropertyEnum";

export const isIE = "ActiveXObject" in window;

export const setCssProperty = (name: string, value: string): void => {
  // 获取文档的根元素，即:root
  const root = document.documentElement;
  // 使用setProperty方法来修改--color-primary的值
  root.style.setProperty(name, value);
};

export const getCssProperty = (name: string): string => {
  // 获取根元素的计算样式对象
  const rootStyles = window.getComputedStyle(document.documentElement);
  // 获取--color-primary的值
  return rootStyles.getPropertyValue(name);
};

export const setThemeColor = (color: string): void => {
  setCssProperty(cssPropertyEnum.COLOR_PRIMARY, color);
};

export const getThemeColor = (): string => {
  return getCssProperty(cssPropertyEnum.COLOR_PRIMARY);
};

export const getRandomCode = (num = 8, stamp = true) => {
  const data = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let nums = "";
  const timestamp = parseInt(new Date().getTime() / 1000) + "";
  for (let i = 0; i < num; i++) {
    const r = parseInt(Math.random() * 61);
    nums += data[r];
  }
  return stamp ? timestamp + nums : nums;
};
