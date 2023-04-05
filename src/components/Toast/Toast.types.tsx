import { TranslationKey } from "@types";

export type ToastType = "success" | "warning" | "danger" | "info";

export interface ToastInfo {
  type: ToastType;
  title: TranslationKey;
  message: TranslationKey;
  onClose: () => void;
}

export type ToastProps = ToastInfo;
