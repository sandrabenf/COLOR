import './style.css';

const input = document.querySelector('#lettre');
const form = document.querySelector('form');
const resultat = document.querySelector('#resultat');
console.log(form);

const nom = [
    "Acharya", "Bhatt", "Chatterjee", "Desai", "Elango", "Farooqi",
    "Ghosh", "Hegde", "Iyer", "Joshi", "Kapoor", "Lamba", "Mehta",
    "Nair", "Oberoi", "Patel", "Qureshi", "Rao", "Sharma", "Thakur",
    "Upadhyay", "Verma", "Wadia", "Yadav", "Zaidi"
];

const prenom = [
    "Aarav", "Bharat", "Chetan", "Dev", "Esha", "Farhan", "Gaurav",
    "Hari", "Isha", "Jai", "Kiran", "Laksh", "Mohan", "Neel", "Om",
    "Priya", "Qadir", "Raj", "Suman", "Tara", "Uday", "Veer", "Waman", "Yash", "Zoya"
];

form.addEventListener('submit', nomAleatoire);

function nomAleatoire(event) {
    event.preventDefault();
    const lettre = input.value.charAt(0).toUpperCase();
    console.log(`Lettre choisie : ${lettre}`);

    const prenomsFiltres = prenom.filter(p => p.startsWith(lettre));
    const nomsFiltres = nom.filter(n => n.startsWith(lettre));

    if (prenomsFiltres.length === 0 || nomsFiltres.length === 0) {
        resultat.textContent = `Aucun nom trouvé commençant par "${lettre}".`;
        return;
    }

    const prenomAleatoire = prenomsFiltres[Math.floor(Math.random() * prenomsFiltres.length)];
    console.log(prenomAleatoire);

    const nomAleatoire = nomsFiltres[Math.floor(Math.random() * nomsFiltres.length)];
    console.log(nomAleatoire);

    const nomComplet = `${prenomAleatoire} ${nomAleatoire}`;
    console.log(nomComplet);

    input.value = nomComplet;
    resultat.textContent = `Proposition : ${nomComplet}`;
}
