
var selected = null;

function setSelect(nel)
{
	if(selected == null)
	{
		selected = nel;
	}else
	{
		selected.id = "";
		selected = nel;
	}
	
	nel.id = "sel";
}

function trclick(el)
{	
	var toto = el.firstElementChild.innerText;
	
	var titi = document.getElementById("sender");
	
	titi.value = toto;
	setSelect(el);
};