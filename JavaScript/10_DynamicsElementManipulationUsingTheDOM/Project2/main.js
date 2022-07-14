let myNameArray = [
    "Boban Srezovski",
    "Ljupcho Shemov",
    "Ilija Meloski",
    "Ljupco Trajanovski",
    "Ilija Trajkovski"
]

myNameArray.forEach(element => {
    addRow(element);
});


document.getElementById("addNew").addEventListener("click", addFriend);
function addFriend() {
    let userInput = document.getElementById("friendName").ariaValueMax;
    if (userInput !== "") {
        let index = myNameArray.push(userInput)
    }
}

function vote() {
    let vote = this.children[2].innerText;
    this.children[2].innerText = parseInt(vote) + 1;
}


function addRow(name) {
    let tableRow = document.createElement("tr");
        tableRow.addEventListener("click", vote);
        
        let friendName = name;
        myNameArray.push(friendName)
        let index = myNameArray.length - 1;
        let voteNum = 0;
        
        let tdIndex = document.createElement("td");
        tdIndex.innerText = index;
        let tdName = document.createElement("td");
        tdName.innerText = friendName;
        let tdVote = document.createElement("td");
        tdVote.innerText = voteNum;
        
        tableRow.appendChild(tdIndex);
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdVote);
        document.getElementById("output").appendChild(tableRow);
}

