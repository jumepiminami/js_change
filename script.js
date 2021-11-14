// input要素オブジェクト
const change = document.getElementById("example-id");
// 値を埋め込む先
const currentLength = document.getElementById("current-length");

change.addEventListener('change', (event) => {
  currentLength.innerText = event.target.value.length;
});