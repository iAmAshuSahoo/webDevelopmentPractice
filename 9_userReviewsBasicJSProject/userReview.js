let users = null;
let reviewer = 0;

loadUsers();
changeUser();

function loadUsers () {

    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();

    // Making our connection  
    var url = 'https://randomuser.me/api/?results=10';
    xhr.open("GET", url, true);

    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            users = (JSON.parse(this.responseText)).results
            // console.table(users);
            displayUser(users);
        }
    }
    // Sending our request 
    xhr.send();
    // jquery
    // $.ajax({
    //     url: 'https://randomuser.me/api/?results=5',
    //     dataType: 'json',
    //     success: function(data) {
    //       console.log(data);
    //     }
    //   });
}

function displayUser (users) {
    if (users.length === 0) {
        console.log("no users")
    }
    let profilePicture = document.querySelector("#profile-picture");
    let name = document.querySelector("#name");
    let designation = document.querySelector("#designation");
    let description = document.querySelector("#description");

    profilePicture.setAttribute("src",users[reviewer].picture.large);
    name.innerText = `${users[reviewer].name.first} ${users[reviewer].name.last}`;
    designation.innerText = formatDate(users[reviewer].registered.date);
}

function formatDate(registeredDate) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
    let date = new Date(registeredDate);
    return `${date.getDate()}-${monthNames[date.getMonth()]}-${date.getFullYear()}`
}

function changeUser () {
    let backward = document.querySelector("#backward");
    let forward = document.querySelector("#forward");
    let btn = document.querySelector("#btn");
    forward.addEventListener('click', function () {
        if (reviewer < users.length-1) {
            reviewer+=1;
            displayUser(users);

        }
    })
    
    backward.addEventListener('click', function () {
        if (reviewer > 0) {
            reviewer-=1
            displayUser(users);
        }
    })
    
    btn.addEventListener('click', function () {
        let prevReviewer = reviewer;
        while(prevReviewer === reviewer) {
            reviewer = Math.floor(Math.random()* (users.length-1))
            console.log(reviewer)
        }
        displayUser(users);
    })
}