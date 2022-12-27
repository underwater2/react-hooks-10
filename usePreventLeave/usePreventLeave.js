export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault(); // 표준에 따라 기본 동작 방지
    event.returnValue = ""; // 크롬에서만 추가해준다.
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
