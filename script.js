// input要素オブジェクト
const change = document.getElementById("change");
// 値を埋め込む先
const currentLength = document.getElementById("length");

change.addEventListener('change', (event) => {
  currentLength.innerText = event.target.value.length;
});
