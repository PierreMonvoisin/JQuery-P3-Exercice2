$(function() {
  var i = 0;
  $('#plus').click(function() {
    // let i = $('input').val();
    i = i + 1;
    $('input').attr('value', i );
  });
  $('#moins').click(function() {
    // let i = $('input').val();
    i = i - 1;
    $('input').attr('value', i );
  });
});
