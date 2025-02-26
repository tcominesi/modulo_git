//$(document).ready(function(){
	//alert('Olá Mundo!');
	//console.log(document.querySelector('header button'));
	//console.log($('#botao-cancelar'));

	//função botão adiciona imagem
	//document.querySelector('header button').addEventListener('click', function() {

	//})

	$('header button').click(function(){
		//alert("Expandir formulário")
		$('form').slideDown();

	})

	$('#botao-cancelar').click(function(){
		$('form').slideUp();
	})

	$('form').on('submit', function(e){
		//console.log("submit");
		e.preventDefault();
		const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
		//console.log(enderecoDaNovaImagem);
		
		 const novoItem =$('<li style= display:none></li>');
    $(`<img src = "${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    
    $(`<div class = "overlay-imagem-link">
    <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
    Ver imagem em tamanho real
    </a>
    </div>
    `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#url-imagem-nova').val(' ');
	})
//})