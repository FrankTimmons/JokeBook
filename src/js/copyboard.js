export default function CopyToClipboard(output) {
  var r = document.createRange();
  r.selectNode(document.getElementById(output));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}