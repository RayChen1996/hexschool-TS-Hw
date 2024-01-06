export type EnumToListItem<T> = {
  label: T[keyof T];
  value: keyof T;
};
