$("#query-form").on('submit', function(e){
    e.preventDefault();
})

$('.btn-search').on('click', function(){
    $.ajax({
        url:'/api/imagesearch',
        type: 'POST',
        dataType: 'JSON',
        data: {url: $("#image-query").val()},
        success: function(list){
       $('.results').removeClass('hidden');
     $('#json-results').html(JSON.stringify(list, null, 4));
        }
    })
})