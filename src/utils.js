export default function openUrlInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
