/* *************************
 *** POST JOURNAL ***
************************** */
function postJournal() {
    const accessToken = localStorage.getItem('SessionToken')
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let entry = document.getElementById('entry').value;

    let newEntry = {
        journal: {
            title: title,
            date: date,
            entry: entry
        }
    } /* console.log('postJournal Function Called') */

    fetch(`http://localhost:3000/journal/create`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }),
        body: JSON.stringify(newEntry)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayMine()
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    
    
    /* *************************
     *** UPDATE JOURNAL ***
    ************************** */
    function editJournal(postId) {
     console.log('editJournal Function Called')
    }
    
    
    /* *************************
     *** DELETE JOURNAL ***
    ************************** */
    function deleteJournal(postId) {
     console.log('deleteJournal Function Called')
    }