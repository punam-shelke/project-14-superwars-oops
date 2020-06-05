const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
];
let i=1 ;
// Player Class
class Player {
   
    constructor(id, name, type) {
        // Create member variables and assign values
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = `images/super-${i}.png`;
        i = (i)%3+1;
        console.log(`${this.image}`)
        this.strength = this.getRandomStrength(); 
        // Type your code

    }

    // getting random strength
    getRandomStrength = () => {
        return Math.ceil(Math.random() * 100);
    }

    // Create a player for displaying
    view = () => {
        // Accumulate HTML template
        // Type your code here
      //  let player = document.createElement('div');
     //   player.data.id = ;
        let div1 ,div2,image;
        let player = document.createElement(`div`);
        player.className = `player`;
        player.dataset.id = `${this.id}`;
        image = document.createElement(`img`);
        image.src = `${this.image}`;
        div1 = document.createElement(`div`);
        div1.className = `name`;
        div1.textContent = `${this.name}`;
        div2 = document.createElement(`div`);
        div2.className = `strength`;
        div2.textContent = `${this.strength}`;
        player.appendChild(image);
        player.appendChild(div1);
        player.appendChild(div2);
        return player;
    }
}

// Superwar Class
class Superwar {
    constructor(players) {
    // Create a field players 
    this.players = players.map(function (name ,index){
        if(index%2)
        return new Player(index+1 ,name ,`villain`);
        else
        return new Player(index+1 ,name ,`hero`);
    });
    // Use Map method to loop through players argument and create new players
    // Type your code here
    //return newplayers;
    }

    // Display players in HTML
    viewPlayers = () => {
        let team = document.getElementById('heroes');
        team.innerHTML = '';
        let fragment =
            this.buildPlayers('hero');
        team.append(fragment);

        team = document.getElementById('villains');
        team.innerHTML = '';
        fragment =
            this.buildPlayers('villain');
        team.append(fragment);
    }

    // Build players fragment 
    buildPlayers = (type) => {
        let fragment = document.createDocumentFragment();
        this.players
            .filter(player => player.type == type)
            .forEach(player => fragment.append(player.view()));
        return fragment;
    }

}


window.onload = () => {
    const superwar = new Superwar(PLAYERS);

    superwar.viewPlayers();
}