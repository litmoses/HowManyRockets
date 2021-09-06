var rockets = Number(0);
var curSulf = Number(0);
var curGunPow = Number(0);

function init() {
    $("#sulfur-in").keyup(function() {
        curSulf = this.value
        countRockets()
    });

    $("#gunpowder-in").keyup(function() {
        curGunPow = this.value
        countRockets()
    });
}

function countRockets() {
    var gp = (curGunPow * 2)
    var mats = Number(curSulf) + Number(gp)
    rockets = Math.floor(mats / 1400)
    displayRockets()
    countGP()

}

function countGP() {
    var reqGP = (Number(rockets) * 650)
    var reqSulf = (Number(rockets) * 100)

    displayGP(reqGP, reqSulf) 
}

function displayRockets() {
    var div = document.getElementById("rocket-count");
    var HTML = `
        <img src="../static/images/rocket.png" alt="Girl in a jacket" width="250" height="300"/>
        <p>${rockets}</p>
        `

    div.innerHTML = HTML;

}

function displayGP(reqGP, reqSulf) {
    var div = document.getElementById("extra-container");
    var HTML = `
        <div class="output-item" id="output-item">
            <img src="../static/images/sulfur.png" alt="Girl in a jacket" width="250" height="300"/>
            <p>${reqSulf}</p>
        </div>

        <div class="output-item" id="output-item">
            <img src="../static/images/gunpowder.png" alt="Girl in a jacket" width="250" height="300"/>
            <p>${reqGP}</p>
        </div>
        `
            

    div.innerHTML = HTML;
}