$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereco_imagem_nova = $('#endereco-imagem-nova').val();
        const novo_item = $('<li style="display: none"></li>');
        $(`<img src="${endereco_imagem_nova}" />`).appendTo(novo_item);
        $(`
            <div class="overlay-image-link">
                <a href="${endereco_imagem_nova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novo_item);
        $(novo_item).appendTo('ul');
        $(novo_item).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})