// ALL queryselector
const $inp_spend = document.querySelector("#depense");
const $form = document.querySelector("#form");
const $liste = document.querySelector("#liste");
const $h2 = document.querySelector("#h2");
// ALL variable
let liste = [];
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
		for (let i = 0; i < liste.length; i++) {
			if ($p.textContent === liste[i]) {
				liste[i].remove;
				break;
			}
		}
	});
	return $div;
}
function ordonerListe() {
	liste.appendChild($inp_spend.value);

	if (liste.length < 1) {
		$h2.classList.remove("none");
	} else {
		$h2.classList.add("none");
	}
	for (let i = 0; i < liste.length; i++) {
		let object = CrateObjecListeDiv(liste[i]);
		$liste.appendChild(object);
	}
}
// ALL addeventlistener
$form.addEventListener("submit", (e) => {
	e.preventDefault();

	ordonerListe();

	$form.reset();
});
