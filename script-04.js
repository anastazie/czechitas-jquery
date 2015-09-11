$(document).ready(function() {

	// PRIDAVANI UKOLU
	// pri kliknuti na tlacitko pridame do seznamu obsah inputu
	$('#add-new-task').on('click', function() {

		// do promenne ukol si ulozime obsah textoveho pole
		ukol = $('#new-task').val();

		// pokud neni pole prazdne...
		if (ukol) {
			// pridame jeho hodnotu do seznamu
			$('#tasks').append('<li class="task">' + ukol + ' <span class="delete">[x]</span></li>');

			// vymazeme textove pole, abychom mohli zadavat dalsi ukol
			$('#new-task').val('');
		}
	
	});



	// MAZANI UKOLU
	// skoro stejne jako driv, jen "click" ted navazujeme na krizek
	// a jako element musime smazat ne "this", ale jeho rodice
	$(document).on('click', '.delete', function() {
		$(this).parent().remove();
	});

});