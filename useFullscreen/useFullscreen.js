import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      // 브라우저마다 메서드 이름이 달라서 나눠줌
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    // 전체화면이 아닐 때 "Exit fullscreen"버튼을 누르면 생기는 오류 해결
    // 전체화면인지 체크한 후 아닐 경우에만 document.exitFullscreen()을 실행
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    }
  };
  return { element, triggerFull, exitFull };
};
