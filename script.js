// Addition de nombre 1 et nombre 2
function somme()
{
    var a = parseFloat(document.getElementById("t1").value);
    var b = parseFloat(document.getElementById("t2").value);

    if (isNaN(a) || isNaN(b))
    {
        document.getElementById("resultat").value = "Erreur : saisissez deux nombres";
    }
    else
    {
        document.getElementById("resultat").value = a + b;
    }
}

// Nombre 1 - Nombre 2
function soustraction()
{
    var a = parseFloat(document.getElementById("t1").value);
    var b = parseFloat(document.getElementById("t2").value);

    if (isNaN(a) || isNaN(b))
    {
        document.getElementById("resultat").value = "Erreur : saisissez deux nombres";
    }
    else
    {
        document.getElementById("resultat").value = a - b;
    }
}

// Nombre 1 x Nombre 2
function produit()
{
    var a = parseFloat(document.getElementById("t1").value);
    var b = parseFloat(document.getElementById("t2").value);

    if (isNaN(a) || isNaN(b))
    {
        document.getElementById("resultat").value = "Erreur : saisissez deux nombres";
    }
    else
    {
        document.getElementById("resultat").value = a * b;
    }
}

// Nombre 1 / Nombre 2 (avec test de la division par zéro)
function division()
{
    var a = parseFloat(document.getElementById("t1").value);
    var b = parseFloat(document.getElementById("t2").value);

    if (isNaN(a) || isNaN(b))
    {
        document.getElementById("resultat").value = "Erreur : saisissez deux nombres";
    }
    else if (b == 0)
    {
        document.getElementById("resultat").value = "Erreur : division par zéro impossible";
    }
    else
    {
        document.getElementById("resultat").value = a / b;
    }
}

// Échange les valeurs des deux zones de saisie
function permutation()
{
    var n1 = document.getElementById("t1").value;
    var n2 = document.getElementById("t2").value;
    var temp;

    temp = n1;
    n1 = n2;
    n2 = temp;

    document.getElementById("t1").value = n1;
    document.getElementById("t2").value = n2;
}

// Indique si le nombre 1 est pair ou impair
function parite()
{
    var a = parseFloat(document.getElementById("t1").value);

    if (isNaN(a))
    {
        document.getElementById("resultat").value = "Erreur : saisissez un nombre";
    }
    else if (a % 1 != 0)
    {
        document.getElementById("resultat").value = "Ce nombre n'est pas un entier";
    }
    else if (a % 2 == 0)
    {
        document.getElementById("resultat").value = "Pair";
    }
    else
    {
        document.getElementById("resultat").value = "Impair";
    }
}

// Vide les deux zones de saisie et le résultat
function effacer()
{
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
}