export type ToastType = "success" | "warning" | "danger" | "info";

export interface ToastInfo {
  type: ToastType;
  title: FormatjsIntl.Message["ids"];
  message: FormatjsIntl.Message["ids"];
  onClose: () => void;
}

export type ToastProps = ToastInfo;
