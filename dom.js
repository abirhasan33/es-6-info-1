document.getElementById("add-border").addEventListener("click", function(){
    const container = document.getElementById("friends-container");
    container.style.border = ' 4px solid blue';
    container.style.padding = ' 20px';
});


function addBackgroundColor() {
const friends = document.getElementsByClassName('friend');
for(const friend of friends){
    friend.style.backgroundColor = 'lightblue'
}
}

document.getElementById("add-friend").addEventListener("click", function(){
    const container = document.getElementById("friends-container");
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New friend</h3>
    <p>Asperiores, unde!</p>
    `;
    container.appendChild(friendDiv);

});
