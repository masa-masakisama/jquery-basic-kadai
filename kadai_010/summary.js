$(function() {
  // change-colorボタンがクリックされたらテキストの色が変わる
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

  // change-textボタンがクリックされたら「Hello!」に変わる
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });

  // fade-outボタンがクリックされたらテキストがフェードアウトする
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // fade-inボタンがクリックされたらテキストがフェードインする
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});