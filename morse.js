// 编码
$("#encode").click(function () {
  $("#result").val(xmorse.encode($("#input").val(), getoption()));
  $("#play").show();
});

// 解码
$("#decode").click(function () {
  $("#result").val(
    xmorse.decode($("#input").val(), getoption()) ||
      "解码失败，请确认输入是否正确"
  );
  $("#play").hide();
});

function getoption() {
  return {
    space: " ",
    short: "？",
    long: "哈",
    caseSensitive: true
  };
}
