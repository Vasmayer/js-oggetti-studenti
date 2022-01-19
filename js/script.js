/* Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, 
un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!

*/

/* funzione random number */

const rdnNumber = (min,max) => Math.floor(Math.random() * ( max - min )) + min 


    


/* _______________________________ 1 _______________________________ */
/* creo l'oggetto studente */
studente =
{
    nome : 'Bill',
    cognome : 'Gates',
    eta : 67
}
/* _______________________________ 3 _______________________________ */
studenti = [
    {
        nome : 'Bill',
        cognome : 'Gates',
        eta : 67
    },
    {
        nome : 'Elon',
        cognome : 'Musk',
        eta : 50
    },
    {
        nome : 'Jeff',
        cognome : 'Besoz',
        eta : 58
    },
    {
        nome : 'Richard',
        cognome : 'Branson',
        eta : 71
    },
    {
        nome : 'Mark',
        cognome : 'Zuckerberg',
        eta : 37
    }
];

/* prendo gli elementi del DOM che mi servono */
const propertyElement = document.getElementById('property');
const studentsElement = document.getElementById('students');
const insertElement = document.getElementById('insert');
const nameElement = document.getElementById('name');
const surnameElement = document.getElementById('surname');
const etaElement = document.getElementById('eta');

let message = "<div class='my-5'><h5> 2. Le Propietà sono:</h3><br>";
/* _______________________________ 2 _______________________________ */
/* stampo le propietà dell'oggetto */
for(let key in studente)
{
    message += `---------------> ${key}<br>`;
}

message+='</div>';

/* stampo sullo schemrmo */
propertyElement.innerHTML = message;

/* _______________________________ 4 _______________________________ */

/* prendo il numero di studenti */
const numberStudents  = studenti.length;

message = "<h5> 4. Gli studenti sono:</h3><br>";

    for(let i=0;i < numberStudents;i++)
    {
        const currentStudent =  studenti[i];

        message += `Nome:<strong> ${currentStudent.nome}</strong><br>Cognome: <strong> ${currentStudent.cognome} </strong> <br>`;
        message +='-------------------------------------------------<br>';
    }

    studentsElement.innerHTML = message;

/* aggiungo l'evento al bottone inserisci un'ioggetto */
insertElement.addEventListener('click',()=>{

        addstudent =
        {
            nome : '',
            cognome : '',
            eta : 0    
        }

        /* prendo i valori contenuti negli input */
    addstudent.nome = nameElement.value;
    addstudent.cognome = surnameElement.value;
    addstudent.eta = etaElement.value;

    studenti.push(addstudent);
    console.table(studenti);

    /* stampo a video il risultato */
    addedTextStudent = `Nome:<strong> ${addstudent.nome}</strong><br>Cognome: <strong> ${addstudent.cognome} </strong> <br>`;
    addedTextStudent +='-------------------------------------------------<br>';
    studentsElement.innerHTML += addedTextStudent;

});







