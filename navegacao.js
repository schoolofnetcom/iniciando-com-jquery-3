$(document).ready(function() {
  $('#conteudo').load('pages/home.html');

  $('#menu a').click(function () {
    let url = $(this).attr('href');
    $.ajax({
        url: url,
        method: 'GET'
      })
      .done(function (response) {
        $('#conteudo').html(response);
      });
    return false;
  })
});