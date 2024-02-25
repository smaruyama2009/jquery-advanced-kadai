$(function () {
  $('#fadeOut').on('click', function() {
    // 透明度を尾にする(フェードアウトする)
    $('.box').css('opacity', 0);
  });
  $('#fadeIn').on('click', function() {
    // 透明度を１にする(フェードインする)
$('.box').css('opacity', 1);
  });
  $('#slideUp').on('click', function() {
    // 高さを０にする(スライドアップする)
    $('.box').css('height', 0);
  });
  $('#slideDown').on('click', function() {
    // 高さを200にする(スライドダウンする)
    $('.box').css('height', 200);
  });
});