$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()
        const novaTarefa = $('#tarefa').val()

        $(`<li>${novaTarefa}</li>`).appendTo('ul')

        $('li').click(function() {
            $(this).toggleClass('item_completado');
        });

    })

})