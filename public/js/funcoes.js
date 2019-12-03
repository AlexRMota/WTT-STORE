$(document).ready(function() {
	$("#livro1").click(function(){
		vardataLivro = $(this).attr("data-livro");
		alert ("oi");
		document.getElementById('fotoLivro').innerHTML = '<img className="img-responsive" src={require("../../assets/images/'+vardataLivro+'")} />';
	});

});


