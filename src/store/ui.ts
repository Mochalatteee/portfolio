import { model } from "../util/model";

export type RouterType = "Home" | "About" | "Works";

export interface UIModel {
  page: RouterType;
}

export const $UI = model<UIModel>("UI", {
  page: "Home",
});
