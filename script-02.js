$(document).ready(function() {

	// PRIDAVANI UKOLU
	// pri kliknuti na tlacitko pridame do seznamu obsah inputu
	$('#add-new-task').on('click', function() {

		// do promenne ukol si ulozime obsah textoveho pole
		ukol = $('#new-task').val();

		// pokud neni pole prazdne...
		if (ukol) {
			// pridame jeho hodnotu do seznamu
			$('#tasks').append('<li>' + ukol + '</li>');

			// vymazeme textove pole, abychom mohli zadavat dalsi ukol
			$('#new-task').val('');
		}
	
	});

});