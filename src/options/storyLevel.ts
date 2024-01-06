import { EnumToListItem } from "./type";

export type StoryLevelType = typeof storyLevelEnum;

export const storyLevelList: Array<EnumToListItem<StoryLevelType>> = [
  { label: "個人資料", value: "PersonalInfo" },
  { label: "我的訂單", value: "MyOrder" },
];

export const storyLevelEnum = {
  PersonalInfo: "個人資料",
  MyOrder: "我的訂單",
} as const;
