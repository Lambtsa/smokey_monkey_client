import { Toast } from "@components/Toast";
import { ToastInfo } from "@components/Toast/Toast.types";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ToastsWrapper } from "./ToastContext.styles";
import { v4 as uuid } from "uuid";

interface ToastContextProviderProps {
  children: ReactNode;
}

interface ToastContextShape {
  addToast: (toast: ToastType) => void;
}

const ToastContext = createContext<ToastContextShape | undefined>(undefined);

type ToastType = Pick<ToastInfo, "message" | "type" | "title">;

type ToastTypeExtended = ToastType & {
  id: string;
};

const ToastProvider = ({ children }: ToastContextProviderProps) => {
  const [toasts, setToasts] = useState<ToastTypeExtended[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        4000
      );
      return () => clearTimeout(timer);
    }
    return;
  }, [toasts.length]);

  const handleOnClose = useCallback((id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((toast: ToastType) => {
    const extendedToast: ToastTypeExtended = {
      ...toast,
      id: uuid(),
    };
    setToasts((toasts) => [...toasts, extendedToast]);
  }, []);

  const toastValue: ToastContextShape = {
    addToast,
  };

  const hasToasts = !!toasts.length;

  return (
    <ToastContext.Provider value={toastValue}>
      <>
        {children}
        <ToastsWrapper>
          {hasToasts &&
            toasts.map((toast) => (
              <Toast
                key={toast.id}
                type={toast.type}
                title={toast.title}
                message={toast.message}
                onClose={() => handleOnClose(toast.id)}
              />
            ))}
        </ToastsWrapper>
      </>
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };

export function useToast(): ToastContextShape {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
