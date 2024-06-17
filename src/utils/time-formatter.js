function timeFormatter(time = 0) {
  return `${Math.trunc(time / 60)}:${String(time % 60).padStart(2, "0")}`;
}
export { timeFormatter };
