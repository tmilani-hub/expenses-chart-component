// ALL queryselector
const $inp_spend = document.querySelector("#depense");
const $form = document.querySelector("#form");
const $h2 = document.querySelector("#h2");
const $liste = document.querySelector("#liste")
// ALL variable
let liste = [];
let liste_object = [];
// ALL funcion
function CrateObjecListeDiv(word) {
	const $div = document.createElement("div");
	const $p = document.createElement("p");
	const $btn = document.createElement("button");
	$div.classList.add("listeobject");
	$btn.classList.add("btn-primary");
	$p.textContent = word;
	$btn.textContent = "suprimer";
	$div.appendChild($p);
	$div.appendChild($btn);
	$btn.addEventListener("click", () => {
		$div.remove();
		for (let i = 0; i < liste.length; i++)
	});
	liste_object.appendChild($div)
	return $div;
}
// ALL addeventlistener
$form.addEventListener("submit", (e) => {
	e.preventDefault();

	for (let i = 0; i < liste.length; i++) [
		liste_object[i].remove()
	]
	liste_object = []
	liste.appendChild($inp_spend.value);
	liste.sort();

	for (let i = 0; i < liste.length; i++) {
		let object = CrateObjecListeDiv(liste[i]);

		$liste.appendChild(object);
	}
	if (liste.length < 1) {
		$h2.classList.remove("none");
	}else{
		$h2.classList.add("none");
	}

	$form.reset();
});
