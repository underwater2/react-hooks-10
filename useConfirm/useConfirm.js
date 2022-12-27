export const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  // onCancel은 필수는 아니다
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      // 예 누르면 True, 캔슬이면 False
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};
