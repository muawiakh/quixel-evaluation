$('.btn-shorten').on('click', function(){

  $.ajax({
    url: '/abraCadabra',
    type: 'POST',
    dataType: 'JSON',
    data: {url: $('#myurl').val()},
    success: function(data){
        var resultHTML = '<a class="result" href="' + data.shortUrl + '">'
            + data.shortUrl + '</a>';
        $('#link').html(resultHTML);
    }
  });
});