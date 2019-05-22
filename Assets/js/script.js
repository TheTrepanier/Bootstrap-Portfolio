var repoArrObj = [
    {
        name: "Word Guess Game",
        repo: "https://github.com/TheTrepanier/word-guess-game",
        liveLink: "https://thetrepanier.github.io/word-guess-game/",
        img: "Assets/images/word-guess-game.png",
        description: "This game of hangman written in vanilla js has a Pokemon spin! Using information I get from an Ajax call made to the PokeAPI I display a randomly selected Pokemon"
    },
    {
        name: "jQuery rpg",
        repo: "https://github.com/TheTrepanier/jQuery-rpg",
        liveLink: "https://thetrepanier.github.io/jQuery-rpg/",
        img: "Assets/images/jQuer-rpg.png",
        description: "You wanna be the very best? This RPG written in jQuery is a simplified verision of the popular Pokemon franchise"
    },
    {
        name: "Chez Munchlax",
        repo: "https://github.com/TheTrepanier/hamburguesa",
        liveLink: "https://hidden-brushlands-93351.herokuapp.com/",
        img: "Assets/images/chez-munchlax.png",
        description: "Grab a seat and have a delicious burger compliments of the chef! Chez Munchlax is a simple web app that utilizes Express.js, Handlebars, and MySQL to deliver a fun experiance."
    },
    {
        name: "NightOut!",
        repo: "https://github.com/TheTrepanier/first-group-project",
        liveLink: "https://thetrepanier.github.io/first-group-project/",
        img: "Assets/images/NightOut.png",
        description: "NightOut! is a one stop solution to planing your own night out"
    },
    {
        name: "Liri",
        repo: "https://github.com/TheTrepanier/liri-node-app",
        liveLink: "https://github.com/TheTrepanier/liri-node-app/blob/master/README.md",
        img:"Assets/images/liri.gif",
        description: "Liri is a command line tool that will take in various commands and display results from different services"
    }
];



$(document).ready(function () {
    for (let index = 0; index < repoArrObj.length; index++) {
        const element = repoArrObj[index];
        var cardImg = $("<img>").attr("src", element.img).attr("alt", element.name).addClass("card-img-top");
        var imgLink = $("<a>").attr("href", element.liveLink).attr("target", "_blank").append(cardImg);
        var cardTitle = $("<h5>").addClass("card-title").text(element.name);
        var cardText = $("<p>").text(element.description);
        var liveButton = $("<a>").addClass("btn btn-primary").attr("href", element.liveLink).attr("target", "_blank").text("Try it out");
        var repoButton = $("<a>").addClass("btn btn-secondary ml-1").attr("href", element.repo).attr("target", "_blank").text("GitHub repo");
        var cardBodyDiv = $("<div>").addClass("card-body").append(cardTitle, cardText, liveButton, repoButton);
        var card = $("<div>").addClass("card").append(imgLink, cardBodyDiv);
        
        $("#cards-container").append(card);
    }
    
});

