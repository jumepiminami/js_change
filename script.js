// input要素オブジェクト
const change = document.getElementById("change");
// 値を埋め込む先
const length = document.getElementById("length");

change.addEventListener('change', (event) => {
  length.innerText = event.target.value.length;
});
