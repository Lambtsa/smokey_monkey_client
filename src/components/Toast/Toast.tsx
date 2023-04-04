import {
  ToastCloseBtn,
  ToastContainer,
  ToastSubtitle,
  ToastTextWrapper,
  ToastTitle,
} from "./Toast.styles";
import { ReactComponent as Danger } from "@assets/danger.svg";
import { ReactComponent as Info } from "@assets/info.svg";
import { ReactComponent as Valid } from "@assets/valid.svg";
import { ReactComponent as Close } from "@assets/close.svg";
import { ToastProps } from "./Toast.types";
import { ReactNode, useMemo } from "react";
import { useTranslation } from "@hooks/useTranslation";

export const Toast = ({
  type,
  title,
  message,
  onClose,
}: ToastProps): JSX.Element => {
  const { t } = useTranslation();

  const determineToastSvg: ReactNode = useMemo(() => {
    switch (type) {
      case "danger": {
        return <Danger />;
      }
      case "info": {
        return <Info />;
      }
      case "success": {
        return <Valid />;
      }
      case "warning": {
        return <Info />;
      }
    }
  }, [type]);

  return (
    <ToastContainer type={type}>
      <ToastCloseBtn onClick={onClose}>
        <Close />
      </ToastCloseBtn>
      {determineToastSvg}
      <ToastTextWrapper>
        <ToastTitle>{t({ id: title })}</ToastTitle>
        <ToastSubtitle>{t({ id: message })}</ToastSubtitle>
      </ToastTextWrapper>
    </ToastContainer>
  );
};
