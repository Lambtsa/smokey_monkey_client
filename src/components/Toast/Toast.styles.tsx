import styled, { keyframes } from "styled-components";
import { ToastType } from "./Toast.types";

const ToastInRight = keyframes`
  from {
	  transform: translateX(100%);
	  
	}
	to {
	  transform: translateX(0);
	}
`;

export const ToastContainer = styled.div<{
  type: ToastType;
}>`
  position: relative;
  display: grid;
  grid-template-columns: 30px 1fr;
  justify-content: flex-start;
  align-items: center;
  min-height: 100px;
  width: 100%;
  background-color: ${(props) => {
    switch (props.type) {
      case "danger": {
        return props.theme.colors.englishVermillion;
      }
      case "info": {
        return props.theme.colors.pacificBlue;
      }
      case "success": {
        return props.theme.colors.greenPigment;
      }
      case "warning": {
        return props.theme.colors.persianOrange;
      }
    }
  }};
  border-radius: 10px;
  padding: 16px;
  gap: 12px;

  @supports (transition: transform) {
    transition: transform 0.6s ease-in-out;
    animation: ${ToastInRight} 0.7s;
  }
`;

export const ToastTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

export const ToastCloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ToastTitle = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ToastSubtitle = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  line-height: 18px;
`;
