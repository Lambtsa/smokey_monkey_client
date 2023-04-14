import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const ContainerFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  left: 0;
  z-index: 80;
  background-color: ${(props) => props.theme.colors.eerieBlack50};
`;

export const ImgContainer = styled.div<{
  imgPosition: number;
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.5s;
  transform: ${(props) => `translateX(${props.imgPosition * 100}%)`};
`;

export const ImgBtn = styled.button<{
  btnType: "previous" | "next";
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white40};
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
  transition: all 0.5s;

  svg {
    path {
      fill: ${(props) => props.theme.colors.eerieBlack};
    }
  }

  /* @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover */
  @media (hover: hover) {
    /* when hover is supported */
    :hover {
      background-color: ${(props) => props.theme.colors.white60};
      transition: all 0.5s;
    }
  }

  :disabled {
    background-color: ${(props) => props.theme.colors.white20};

    svg {
      path {
        fill: ${(props) => props.theme.colors.eerieBlack70};
      }
    }
  }

  ${(props) => {
    switch (props.btnType) {
      case "next": {
        return css`
          right: 32px;

          svg {
            transform: rotate(0);
          }
        `;
      }
      case "previous": {
        return css`
          left: 32px;

          svg {
            transform: rotate(180deg);
          }
        `;
      }
    }
  }};
`;

export const DotBtnContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
  z-index: 100;
  backdrop-filter: blur(2px);
`;

export const DotBtn = styled.button<{
  active: boolean;
}>`
  width: 5px;
  height: 5px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  border: 1.5px solid
    ${(props) =>
      props.active ? props.theme.colors.white80 : props.theme.colors.white50};
  background-color: ${(props) =>
    props.active ? props.theme.colors.white80 : props.theme.colors.white30};
  z-index: 20;
`;
