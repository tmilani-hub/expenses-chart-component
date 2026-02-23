const $inp_spend = document.querySelector("#depense");
const $btn_for_spend = document.querySelector("#btnfordepense");
const $liste = document.querySelector("#liste");

function CrateObjecListeDiv(word) {
	const $div = document.createElement("div");
	const $p = document.createElement("p");

	$div.classList.add("listeobject");

	$p.textContent = word;

	$div.appendChild($p);

	return $div;
}

$btn_for_spend.addEventListener("click", () => {
	if ($inp_spend.value === "") {
		console.log("error");
	} else {
		let div = CrateObjecListeDiv($inp_spend.value);
		$liste.appendChild(div);
	}
});
