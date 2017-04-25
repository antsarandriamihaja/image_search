$('.btn-search').on('click', function(){
    $.ajax({
        url:'/search/image',
        type: 'POST',
        dataType: 'JSON',
        data: {url: $("#image-query").val()},
        success: function(data){
            var result = 'json results here';
            $('#json-results').html(result);
        }
    })
})