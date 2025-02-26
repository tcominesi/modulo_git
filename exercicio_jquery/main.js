$(document).ready(function() {
    $('#formTarefa').submit(function(event) {
        event.preventDefault();

        var textoTarefa = $('#textoTarefa').val();

        if (textoTarefa.trim() !== "") {
            var tarefaItem = $('<li><span>' + textoTarefa + '</span> <input type="checkbox" class="checkbox-tarefa"> <button class="btn-apagar">Apagar</button></li>');
            $('#TarefaList').append(tarefaItem);
            $('#textoTarefa').val('');
        }
    });

    $(document).on('click', '.btn-apagar', function() {
        var checkbox = $(this).siblings('.checkbox-tarefa');
        if (checkbox.prop('checked')) {
            $(this).parent().remove();
        }
    });

    $(document).on('click', '.checkbox-tarefa', function() {
        var span = $(this).siblings('span');
        if ($(this).prop('checked')) {
            span.addClass('completed');
        } else {
            span.removeClass('completed');
        }
    });
});
