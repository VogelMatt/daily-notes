/*
    Define a variable named `notes` and assign a value of an empty array
*/
let notes = [
    {
        id: 1,
        text: "sexyTime",
        author: "Semour Butts",
        date: "dec 31st",
        topics: ["romance", "drama", "thriller"]
    },

    {
        id: 88,
        text: "Back To The Future",
        author: "Nike Air-Mags",
        date: "A Future Date",
        topics: ["action", "comedy"]
    }
    
]
notes.push (
    {
        id: 2,
        text: "timeForSex",
        author: "Butt Stuff",
        date: "Feb 14th",
        topics: ["guts", "guns", "kidsMovie"]
    }
)
notes.push (
    {
        id: 3,
        text: "I got Five on it",
        author: "Luniz",
        date: "jan 2, 1995",
        topics: ["Abe Lincoln", "guns", "exchange of funds"]
    }
)
notes.push(
    {
        id: 4,
        text: "Bond, James Bond",
        author: "Ian Flemming",
        date: "1953",
        topics: ["girls", "guns", "espionage" ]
    }
)
notes.push(
    {
        id: 5,
        text: "worst dressed sentient being",
        author: "Zaphod Beeblebrox",
        date: "3031",
        topics: ["two-headed", "three-armed", "irresponsible" ]
    }
)










console.log("***  Note Articles  ***")
    for(const note of notes) {
        console.log(`<article>\n\t${note.text}\n<section>${note.topics[0]}</section>\n<section>${note.topics[1]}</section>\n</article>`)
    }
    
    
    
    // let filteredNotes = []
// const criteria = "guns";
// for(const note of notes) {
    
//         if(note.topics.includes(criteria)) {
//             filteredNotes.push(note);
        
//         }
//     }
//     console.log(filteredNotes)
        
    
       
    



//Create a new variable called filteredNotes with an empty array as its initial value.
// Create a new variable called criteria the contains a string of the topic by which 
// you want to filter the notes.









// console.log(notes)
// console.log("*** Average Topics Per Note ***")
// let totalTopics = 0;
// for (const note of notes) {
//     totalTopics += note.topics.length;
                       //go over this later with nate ---
// }

// let avg = totalTopics / notes.length;
// console.log(avg);

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

//console.log all the notes to terminal

//using a for...of loop iterate the array and use console.log() 
// to display the text property of each object 

