$(document).ready(function() {

	// PRIDAVANI UKOLU
	// pri kliknuti na tlacitko pridame do seznamu obsah inputu
	$('#add-new-task').on('click', function() {

		// do promenne ukol si ulozime obsah textoveho pole
		ukol = $('#new-task').val();

		// pokud neni pole prazdne...
		if (ukol) {
			// pridame jeho hodnotu do seznamu
			$('#tasks').append('<li class="task">' + ukol + '</li>');

			// vymazeme textove pole, abychom mohli zadavat dalsi ukol
			$('#new-task').val('');
		}
	
	});



	// MAZANI UKOLU
	/*
	Myslim si, ze je rozumne, ukazat to holkam nejprve takto
	a vysvetlit jim, proc to funguje jen napul. Tj. jdou takto
	mazat polozky, ktere byly v seznamu napsane od zacatku, ale
	nejdou tak mazat nove pridane polozky:

	$('.task').on('click', function() {
		$(this).remove();
	});

	Protoze udalost "click" jsem na polozky navazali ve chvili,
	kdy jeste ty nove ukoly neexistovaly. Ty na sobe tudiz zadny
	"click" nemaji a nejdou tak smazat.

	Spravne to tedy musi byt takto:
	*/
	$(document).on('click', '.task', function() {
		$(this).remove();
	});

});