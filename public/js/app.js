$("#query-form").on('submit', function(e){
    e.preventDefault();
})

$('.btn-search').on('click', function(){
    $.ajax({
        url:'/api/imagesearch',
        type: 'POST',
        dataType: 'JSON',
        data: {url: $("#image-query").val()},
        success: function(data){
     $('#json-results').text(JSON.stringify(data, null, 4));
        }
    })
})