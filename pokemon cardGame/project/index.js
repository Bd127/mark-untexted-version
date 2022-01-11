    // basic varibles
// getting acess to the div where our hands will display
const herHand = document.querySelector(".herHand");
const myHand = document.querySelector(".myHand");
// getting acess to the div where her field will be
const herSide = document.querySelector(".herSide");
const mySide = document.querySelector(".mySide");
// getting acess to our deck
const herDeck = document.querySelector(".herDeck");
const myDeck = document.querySelector(".myDeck");
// grave switch   
let myGraveSwitch = false;
let herGraveSwitch = false;
// grave display
const herGraveDisplays = document.createElement("div");
herGraveDisplays.setAttribute("class", " herGraveDisplays");
const myGraveDisplays = document.createElement("div");
myGraveDisplays.setAttribute("class", " myGraveDisplays");
// graveyards
const herGrave = document.querySelector(".herGrave");
const myGrave = document.querySelector(".myGrave");
// score display
const herScore = document.querySelector(".herScore");
const myScore = document.querySelector(".myScore");
// ending a round
const herRoundEnder = document.querySelector(".brittney-end");
const myRoundEnder = document.querySelector(".byron-end");
// place holders for things to apear 
const herPlaceHolder = document.querySelector(".herPlaceholder"); 
const myPlaceHolder = document.querySelector(".myPlaceholder");
// our deck of cards
let brittneyDeck = [];
let byronDeck = [];
// our hand of cards
let brittneyHand = [];
let byronHand = [];
// pokemon in play
let brittneyBattle = [];
let byronBattle = [];
// graveyard
let brittneyGrave = [];
let byronGrave = [];
// turn system
let brittneyTurn;
let byronTurn;
// score system
let brittneyScore = 0;
let byronScore = 0;
// round enders
let brittneyRoundEnder = false;
let byronRoundEnder = false;

//cards we have
const brittneyCards = [
    {
        top: "bulbasore",
        img: "img/h1.jpg",
        bottom: 3,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            

            if (brittneyTurn === true) {
                // summond creature
                card.addEventListener("click", herField);
                // run ability
                card.addEventListener("click", ability => {

                    Refresh();
                    brittneyDraw(1);
                    brittneyHandDisplay();
                    byronHandDisplay();
                });
                // getting the score
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                   
                });
              
            }
           
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

           
            
          
        }
       
    }, // has ability
    {
        top: "iva'sore",
        img: "img/h2.jpg",
        bottom: 5,
        type: "green",
        card: function (indexnum){
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "iva'sore");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card

            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // check to see if bulbasore is on the field
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // finding bulbasore
                    if (name === "bulbasore")
                    // evolve pokemon
                    card.addEventListener("click", evolve => {
                        for (let x = 0; x < brittneyBattle.length; x++) {
                            let name = brittneyBattle[x].top;
                            if (name === 'bulbasore') {
                                // adding pokemon to the grave
                                brittneyGrave.push(brittneyBattle[x]);
                                brittneyBattle.splice(x, 1);
                                //removing the former pokemon
                                const bulbsore = document.getElementById("bulbasore");
                                herSide.removeChild(bulbsore);


                            }

                        }

                    })
                    // summonding pokemon
                    card.addEventListener("click", herField);
                    // score update
                    card.addEventListener("click", e => {
                        scoreReset();
                        scoreUpdate();
                    });

                }
            }     

                
        }, 
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            // checks to see if its this ability 1st time runing
            let turnOne = true;
           
            this.bottom = 5;
            
            // if its the 1st time running i will filter out all green types that are not ivesore or bulbasore
            // then i will add + 1 to ivesore power for every card thats been filterd out
            if (turnOne === true ) {
                const noPerEvolve = brittneyBattle.filter(g => g.type === this.type && g.top !== this.top && g.top !== 'bulbasore');
                

                herSide.removeChild(card);
                herSide.appendChild(card);
                this.bottom = this.bottom + noPerEvolve.length;
                this.bottom.innerHTML = this.bottom + noPerEvolve.length;
                turnOne = false;
              
              
            } else  {
                // if its not the 1st turn i will filter out all green cards inself of this pre
                // this card will then get a + 1 for each card filterd out
                let green = brittneyBattle.filter(g => g.type === this.type && g.top !== this.top);
                
                herSide.removeChild(card);
                herSide.appendChild(card);
                this.bottom = this.bottom + green.length;
                this.bottom.innerHTML = this.bottom + green.length;
            }
           
           
        }
       
    }, // has ability
    {
        top: "venasore",
        img: "img/h3.jpg",
        bottom: 10,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "venasore");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

           
           
          
            if (brittneyTurn === true) {
                // check to see if bulbasore is on the field
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // finding ivesore
                    if (name === "iva'sore") {
                        // evolve pokemon
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < brittneyBattle.length; x++) {
                                let name = brittneyBattle[x].top;
                                if (name === "iva'sore") {
                                    // adding pokemon to the grave
                                    brittneyGrave.push(brittneyBattle[x]);
                                    brittneyBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const ivasore = document.getElementById("iva'sore");
                                    herSide.removeChild(ivasore);

                                }

                            }

                        })
                        // somonding pokemon
                        card.addEventListener("click", herField);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }



            }
        },
         grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
    }, 
    {
        top: "niddaran",
        img: "img/h10.jpg",
        bottom: 3,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "niddaran");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
               
               // summon pokemon
                card.addEventListener("click", herField);
                //pause turn while ability is runing
                card.addEventListener("click", pause => {
                    // seting both players turns to false so the turn stops n2 
                    // the player has made a choice
                    brittneyTurn = false;
                    byronTurn = false;
                    // update our hands after
                    Refresh();
                    byronHandDisplay();
                    brittneyHandDisplay();
                });
                // use ability
                card.addEventListener("click", a => {
                    // creating the yes no option
                    const displayP = document.createElement("div");
                    displayP.setAttribute("class", "displayP");
                    const yes = document.createElement("div");
                    yes.setAttribute("class", "yes");
                    yes.innerHTML = "yes";
                    const no = document.createElement("div");
                    no.setAttribute("class", "no");
                    no.innerHTML = "no";
                    displayP.appendChild(yes);
                    displayP.appendChild(no);
                    herSide.appendChild(displayP);


                    // picking no cancells the abilitily
                    no.addEventListener("click", () => {
                        // turn system
                        herSide.removeChild(displayP);
                        if (brittneyRoundEnder === false && byronRoundEnder === false) {
                            brittneyTurn = false;
                            byronTurn = true;
                        }
                        else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                            brittneyTurn = true;
                            byronTurn = false;
                        }
                        else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                            brittneyTurn = false;
                            byronTurn = true;
                        }
                        // restes update for the next turn
                        Refresh();
                        // diplays cards in hand
                        byronHandDisplay();
                        brittneyHandDisplay();
                    })
                    // picking yes
                    yes.addEventListener("click", () => {

                        // getting the cards ids in our hand
                        herSide.removeChild(displayP);
                        for (let i = 0; i < brittneyHand.length; i++) {
                            const nameOfId = brittneyHand[i].top;
                            const card = document.getElementById(nameOfId);

                            // picking a card in our hand
                            card.addEventListener("click", () => {

                                //finding card and sending card to the grave
                                for (let m = 0; m < brittneyHand.length; m++) {
                                    name = brittneyHand[m].top
                                    if (name === nameOfId) {
                                        brittneyGrave.push(brittneyHand[m]);
                                        brittneyHand.splice(m, 1);
                                    }
                                }
                                // removing card eliment from my hand
                                herHand.removeChild(card);
                                // turn system
                                if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }
                                else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }
                                Refresh();
                                brittneyDraw(1);
                                scoreReset();
                                scoreUpdate();
                                brittneyHandDisplay();
                                byronHandDisplay();


                            })
                        }
                    })
                })
                // get scores
                card.addEventListener("click", e => {
                        scoreReset();
                        scoreUpdate();
                    })
                
               
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

           
        }
       
    }, 
    {
        top: "niddaren",
        img: "img/h11.jpg",
        bottom: 5,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "niddaren")
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // checking for pre evolution
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // finding per evolution
                    if (name === "niddaran") {
                        //  evolve pokemon
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < brittneyBattle.length; x++) {
                                let name = brittneyBattle[x].top;
                                if (name === "niddaran") {
                                    // adding pokemon to the grave
                                    brittneyGrave.push(brittneyBattle[x]);
                                    brittneyBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const niddaran = document.getElementById("niddaran");
                                    herSide.removeChild(niddaran);

                                }

                            }

                        });     
                        // putting pokemon on the field
                        card.addEventListener("click", herField);
                           
                        // pause turn
                        card.addEventListener("click", pause => {
                            // seting both players turns to false so the turn stops n2 
                            // the player has made a choice
                            brittneyTurn = false;
                            byronTurn = false;
                            // update our hands after
                            Refresh();
                            byronHandDisplay();
                            brittneyHandDisplay();
                        });
                        // use our abilitys
                        card.addEventListener("click", () => {
                            // creating the yes no option
                            const displayP = document.createElement("div");
                            displayP.setAttribute("class", "displayP");
                            const yes = document.createElement("div");
                            yes.setAttribute("class", "yes");
                            yes.innerHTML = "yes";
                            const no = document.createElement("div");
                            no.setAttribute("class", "no");
                            no.innerHTML = "no";
                            displayP.appendChild(yes);
                            displayP.appendChild(no);
                            herSide.appendChild(displayP);

                            // picking no cancells the abilitily
                            no.addEventListener("click", () => {
                                herSide.removeChild(displayP);
                                if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }
                                else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }


                                // restes update for the next turn
                                Refresh();

                                // diplays cards in hand
                                byronHandDisplay();
                                brittneyHandDisplay();
                            })
                            // picking yes
                            yes.addEventListener("click", () => {

                                // getting the cards ids
                                herSide.removeChild(displayP);
                                for (let i = 0; i < brittneyHand.length; i++) {
                                    const nameOfId = brittneyHand[i].top;
                                    const card = document.getElementById(nameOfId);


                                    card.addEventListener("click", () => {

                                        //finding card and sending card to the grave
                                        for (let m = 0; m < brittneyHand.length; m++) {
                                            name = brittneyHand[m].top
                                            if (name === nameOfId) {
                                                brittneyGrave.push(brittneyHand[m]);
                                                brittneyHand.splice(m, 1);
                                            }
                                        }
                                        // deleting a random card in my opps hand
                                        let pick = Math.random() * byronHand.length;
                                        const randomInt = Math.floor(pick);
                                        const randomPokemon = byronHand[randomInt].top;
                                        const randomId = document.getElementById(randomPokemon);
                                        myHand.removeChild(randomId);
                                        byronGrave.push(byronHand[randomInt]);
                                        byronHand.splice(randomInt, 1);
                                        // pick 2
                                        let pickTwo = Math.random() * byronHand.length;
                                        const randomIntTwo = Math.floor(pickTwo);
                                        const randomPokemonTwo = byronHand[randomIntTwo].top;
                                        const randomIdTwo = document.getElementById(randomPokemonTwo);
                                        myHand.removeChild(randomIdTwo);
                                        byronGrave.push(byronHand[randomIntTwo]);
                                        byronHand.splice(randomIntTwo, 1);

                                        herHand.removeChild(card);
                                        if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                            brittneyTurn = false;
                                            byronTurn = true;
                                        }
                                        else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                            brittneyTurn = false;
                                            byronTurn = true;
                                        }
                                        Refresh();
                                        brittneyHandDisplay();
                                        byronHandDisplay();


                                    })
                                }
                            })
                        });
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
     
    }, 
    {
        top: "niddaqueen",
        img: "img/h12.jpg",
        bottom: 7,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "niddaqueen");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // serching for per evolution
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // finding perevolution
                    if (name === "niddaren") {
                        // evolveing pokemon
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < brittneyBattle.length; x++) {
                                let name = brittneyBattle[x].top;
                                if (name === "niddaren") {
                                    // adding pokemon to the grave
                                    brittneyGrave.push(brittneyBattle[x]);
                                    brittneyBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const niddaren = document.getElementById("niddaren");
                                    herSide.removeChild(niddaren);

                                }

                            }

                        })
                       // puting pokemon on the field
                        card.addEventListener("click", herField);
                      
                        // pauseing for our ability
                        card.addEventListener("click", pause => {
                            // seting both players turns to false so the turn stops n2 
                            // the player has made a choice
                            brittneyTurn = false;
                            byronTurn = false;
                            // update our hands after
                            Refresh();
                            byronHandDisplay();
                            brittneyHandDisplay();
                        });
                        // runing our ability
                        card.addEventListener("click", () => {
                            // creating the yes no option
                            const displayP = document.createElement("div");
                            displayP.setAttribute("class", "displayP");
                            const yes = document.createElement("div");
                            yes.setAttribute("class", "yes");
                            yes.innerHTML = "yes";
                            const no = document.createElement("div");
                            no.setAttribute("class", "no");
                            no.innerHTML = "no";
                            displayP.appendChild(yes);
                            displayP.appendChild(no);
                            herSide.appendChild(displayP);

                            // picking no cancells the abilitily
                            no.addEventListener("click", () => {
                                herSide.removeChild(displayP);
                                if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }
                                else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }


                                // restes update for the next turn
                                Refresh();

                                // diplays cards in hand
                                byronHandDisplay();
                                brittneyHandDisplay();
                            })
                            // picking yes
                            yes.addEventListener("click", () => {
                                // removes the div option
                                herSide.removeChild(displayP);

                                // getting opossing pokemon ids
                                for (let i = 0; i < byronBattle.length; i++) {
                                    const nameOfId = byronBattle[i].top
                                    const card = document.getElementById(nameOfId);


                                    // comparting pokemon strength
                                    card.addEventListener("click", () => {
                                        //finding pokemon battle position
                                        for (let bp = 0; bp < byronBattle.length; bp++) {
                                            const battler = byronBattle[bp].top;
                                            // battle win condisition
                                            if (battler === nameOfId) {

                                                if (this.bottom > byronBattle[bp].bottom) {
                                                    byronFieldRefresh();
                                                    byronGrave.push(byronBattle[bp]);
                                                    byronBattle.splice(bp, 1);
                                                    byronFieldUpdate();



                                                    scoreReset();
                                                    scoreUpdate();
                                                }
                                                // loss condishion
                                                else if (this.bottom < byronBattle[bp].bottom) {
                                                    for (let b = 0; b < brittneyBattle.length; b++) {
                                                        const nop = brittneyBattle[b].top;
                                                        const niddlequeen = document.getElementById("niddaqueen")
                                                        if (nop === "niddaqueen") {
                                                            brittneyFieldRefresh();
                                                            brittneyGrave.push(brittneyBattle[b]);
                                                            brittneyBattle.splice(b, 1);
                                                            brittneyFieldUpdate();

                                                            scoreReset();
                                                            scoreUpdate();
                                                        }
                                                    }
                                                } else {
                                                    // finding niddaqueen battle potion
                                                    for (let b = 0; b < brittneyBattle.length; b++) {
                                                        const nop = brittneyBattle[b].top;
                                                        const niddlequeen = document.getElementById("niddaqueen")
                                                        if (nop === "niddaqueen") {
                                                            // removeing niddle queen
                                                            brittneyFieldRefresh();
                                                            brittneyGrave.push(brittneyBattle[b]);
                                                            brittneyBattle.splice(b, 1);
                                                            brittneyFieldUpdate();


                                                        }
                                                    }
                                                    // removing other card
                                                    byronFieldRefresh();
                                                    byronGrave.push(byronBattle[bp]);
                                                    byronBattle.splice(bp, 1);
                                                    byronFieldUpdate();
                                                    scoreReset();
                                                    scoreUpdate();
                                                }

                                            }
                                        }
                                        if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                            brittneyTurn = false;
                                            byronTurn = true;
                                        }
                                        else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                            brittneyTurn = false;
                                            byronTurn = true;
                                        }
                                        Refresh();
                                        brittneyHandDisplay();
                                        byronHandDisplay();
                                    })





                                }




                            })

                        })
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
      
    }, 
    {
        top: "catapie",
        img: "img/h13.jpg",
        bottom: 1,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "catapie");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // summond pokemon
                card.addEventListener("click", herField);
                // run our ability
                card.addEventListener("click", ability => {
                    //serch to see if we have its evolation 
                    for (let x = 0; x < brittneyDeck.length;x++) {
                        const name = brittneyDeck[x].top;
                        if (name === 'medapod') {
                            Refresh();
                            brittneyHand.push(brittneyDeck[x]);
                            brittneyDeck.splice(x, 1);
                            byronHandDisplay();
                            brittneyHandDisplay();
                           
                        }
                    }
                   
                })
               // update score
                card.addEventListener("click", e => {
                        scoreReset();
                        scoreUpdate();
                })
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "catapie");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    }, 
    {
        top: "medapod",
        img: "img/h14.jpg",
        bottom: 1,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "medapod");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // look for pre evolution
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // after finding per evolution
                    if (name === "catapie") {
                        // evolve
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < brittneyBattle.length; x++) {
                                let name = brittneyBattle[x].top;
                                if (name === "catapie") {
                                    // adding pokemon to the grave
                                    brittneyGrave.push(brittneyBattle[x]);
                                    brittneyBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const catapie = document.getElementById("catapie");
                                    herSide.removeChild(catapie);

                                }

                            }

                        })
                        // sumonding pokemon
                        card.addEventListener("click", herField);
                       
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
      
    },
    {
        top: "butterfree",
        img: "img/h15.jpg",
        bottom: 5,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "butterfree");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // checking for per evolution
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // after finding pervolution
                    if (name === "medapod") {
                        // evolve
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < brittneyBattle.length; x++) {
                                let name = brittneyBattle[x].top;
                                if (name === "medapod") {
                                    // adding pokemon to the grave
                                    brittneyGrave.push(brittneyBattle[x]);
                                    brittneyBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const medapod = document.getElementById("medapod");
                                    herSide.removeChild(medapod);

                                }

                            }

                        })
                        // sumonding
                        card.addEventListener("click", herField);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }

    },
    {
        top: "puppy",
        img: "img/h4.jpg",
        bottom: 3,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "puppy");

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // sumonding
                card.addEventListener("click", herField);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                })
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
        
    },
    {
        top: "wolf dog",
        img: "img/h5.jpg",
        bottom: 8,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "wolf dog");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // checking for per evo
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // finding per evo
                    if (name === "puppy") {
                        // sumonding
                        card.addEventListener("click", herField);
                        // evolve
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < brittneyBattle.length; x++) {
                                let name = brittneyBattle[x].top;
                                if (name === "puppy") {
                                    // adding pokemon to the grave
                                    brittneyGrave.push(brittneyBattle[x]);
                                    brittneyBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const puppy = document.getElementById("puppy");
                                    herSide.removeChild(puppy);

                                }

                            }

                        })
                        // field abilitys
                        card.addEventListener("click", abilitys);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
      
    },
    {
        top: "pichachu",
        img: "img/h6.jpg",
        bottom: 3,
        type: "yellow",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "pichachu");

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // sumonding
                card.addEventListener("click", herField);
                // field ability
                card.addEventListener("click", abilitys);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                })
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
     
    },
    {
        top: "riachu",
        img: "img/h7.jpg",
        bottom: 6,
        type: "yellow",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "riachu");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // checking for evo
                for (let x = 0; x < brittneyBattle.length; x++) {
                    let name = brittneyBattle[x].top;
                    // finding evo
                    if (name === "pichachu") {
                        // getting on field
                        card.addEventListener("click", herField);
                        // evolve 
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < brittneyBattle.length; x++) {
                                let name = brittneyBattle[x].top;
                                if (name === "pichachu") {
                                    // adding pokemon to the grave
                                    brittneyGrave.push(brittneyBattle[x]);
                                    brittneyBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const pichachu = document.getElementById("pichachu");
                                    herSide.removeChild(pichachu);

                                }

                            }

                        })
                        // field ability
                        card.addEventListener("click",abilitys);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    },
    {
        top: "lighting buzz",
        img: "img/h8.jpg",
        bottom: 9,
        type: "yellow",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "lighting buzz");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // putting on field
                card.addEventListener("click", herField);
                // field abilitys
                card.addEventListener("click", abilitys);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                })
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
      
    },
    {
        top: "snorelax",
        img: "img/h9.jpg",
        bottom: 7,
        type: "grey",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", "snorelax");
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (brittneyTurn === true) {
                // setting on field
                card.addEventListener("click", herField);
                //field ability
                card.addEventListener("click", abilitys);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();

                });
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            herSide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
    },
];
const byronCards = [
    {
        top: "niddanran",
        img: "img/m1.jpg",
        bottom: 3,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            
               

                    if (byronTurn === true) {
                        // placing on field
                        card.addEventListener("click", myField);
                        // field abilitys
                        card.addEventListener("click", abilitysTwo);
                        //pause turn while ability is runing
                        card.addEventListener("click", pause => {
                            // seting both players turns to false so the turn stops n2 
                            // the player has made a choice
                            brittneyTurn = false;
                            byronTurn = false;
                            // update our hands after
                            Refresh();
                            byronHandDisplay();
                            brittneyHandDisplay();
                        });
                        // our ability
                        card.addEventListener("click", () => {
                            // creating the yes no option
                            const displayP = document.createElement("div");
                            displayP.setAttribute("class", "displayP");
                            const yes = document.createElement("div");
                            yes.setAttribute("class", "yes");
                            yes.innerHTML = "yes";
                            const no = document.createElement("div");
                            no.setAttribute("class", "no");
                            no.innerHTML = "no";
                            displayP.appendChild(yes);
                            displayP.appendChild(no);
                            mySide.appendChild(displayP);
                            // picking no cancells the abilitily
                            no.addEventListener("click", () => {
                                // turn system
                                mySide.removeChild(displayP);
                                if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }


                                // restes update for the next turn
                                Refresh();

                                // diplays cards in hand
                                byronHandDisplay();
                                brittneyHandDisplay();
                              
                            })
                            // picking yes
                            yes.addEventListener("click", () => {

                                // getting the cards ids in our hand
                                mySide.removeChild(displayP);
                                for (let i = 0; i < byronHand.length; i++) {
                                    const nameOfId = byronHand[i].top;
                                    const card = document.getElementById(nameOfId);


                                    // picking a card in our hand
                                    card.addEventListener("click", () => {

                                        //finding card and sending card to the grave
                                        for (let m = 0; m < byronHand.length; m++) {
                                            name = byronHand[m].top
                                            if (name === nameOfId) {
                                                byronGrave.push(byronHand[m]);
                                                byronHand.splice(m, 1);
                                            }
                                        }
                                        // removing card eliment from my hand
                                        myHand.removeChild(card);
                                        // turn system
                                        if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                            brittneyTurn = false;
                                            byronTurn = true;
                                        }
                                        Refresh();
                                        byronDraw(1);
                                        scoreReset();
                                        scoreUpdate();
                                        brittneyHandDisplay();
                                        byronHandDisplay();


                                    })




                                }
                            })
                        })
                        //score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })


                    }
                
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
        
    }, 
    {
        top: "niddanrun",
        img: "img/m2.jpg",
        bottom: 6,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            

            if (byronTurn === true) {
                // checking for evo
                for (let x = 0; x < byronBattle.length; x++) {
                    let name = byronBattle[x].top;
                    // finding evo
                    if (name === "niddanran") {
                        // on field
                        card.addEventListener("click", myField);
                        // evolve 
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < byronBattle.length; x++) {
                                let name = byronBattle[x].top;
                                if (name === "niddanran") {
                                    // adding pokemon to the grave
                                    byronGrave.push(byronBattle[x]);
                                    byronBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const niddanran = document.getElementById("niddanran");
                                    mySide.removeChild(niddanran);

                                }

                            }

                        })
                        // checking for abilitys
                        card.addEventListener("click", abilitysTwo);
                        //pause turn while ability is runing
                        card.addEventListener("click", pause => {
                            // seting both players turns to false so the turn stops n2 
                            // the player has made a choice
                            brittneyTurn = false;
                            byronTurn = false;
                            // update our hands after
                            Refresh();
                            byronHandDisplay();
                            brittneyHandDisplay();
                        });
                        // run ability
                        card.addEventListener("click", () => {
                            // creating the yes no option
                            const displayP = document.createElement("div");
                            displayP.setAttribute("class", "displayP");
                            const yes = document.createElement("div");
                            yes.setAttribute("class", "yes");
                            yes.innerHTML = "yes";
                            const no = document.createElement("div");
                            no.setAttribute("class", "no");
                            no.innerHTML = "no";
                            displayP.appendChild(yes);
                            displayP.appendChild(no);
                            mySide.appendChild(displayP);
                            // picking no cancells the abilitily
                            no.addEventListener("click", () => {
                                mySide.removeChild(displayP);
                                if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }


                                // restes update for the next turn
                                Refresh();

                                // diplays cards in hand
                                byronHandDisplay();
                                brittneyHandDisplay();
                            })
                            // picking yes
                            yes.addEventListener("click", () => {

                                // getting the cards ids
                                mySide.removeChild(displayP);
                                for (let i = 0; i < byronHand.length; i++) {
                                    const nameOfId = byronHand[i].top;
                                    const card = document.getElementById(nameOfId);


                                    card.addEventListener("click", () => {

                                        //finding card and sending card to the grave
                                        for (let m = 0; m < byronHand.length; m++) {
                                            name = byronHand[m].top
                                            if (name === nameOfId) {
                                                byronGrave.push(byronHand[m]);
                                                byronHand.splice(m, 1);
                                            }
                                        }
                                        // deleting a random card in my opps hand
                                        let pick = Math.random() * brittneyHand.length;
                                        const randomInt = Math.floor(pick);
                                        const randomPokemon = brittneyHand[randomInt].top;
                                        const randomId = document.getElementById(randomPokemon);
                                        herHand.removeChild(randomId);
                                        brittneyGrave.push(brittneyHand[randomInt]);
                                        brittneyHand.splice(randomInt, 1);
                                        // pick 2
                                        let pickTwo = Math.random() * brittneyHand.length;
                                        const randomIntTwo = Math.floor(pickTwo);
                                        const randomPokemonTwo = brittneyHand[randomIntTwo].top;
                                        const randomIdTwo = document.getElementById(randomPokemonTwo);
                                        herHand.removeChild(randomIdTwo);
                                        brittneyGrave.push(brittneyHand[randomIntTwo]);
                                        brittneyHand.splice(randomIntTwo, 1);

                                        myHand.removeChild(card);
                                        if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                            brittneyTurn = false;
                                            byronTurn = true;
                                        }
                                        Refresh();
                                        brittneyHandDisplay();
                                        byronHandDisplay();


                                    })




                                }
                            })
                        })
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
        
    }, 
    {
        top: "niddleking",
        img: "img/m3.jpg",
        bottom: 9,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // checking for evo
                for (let x = 0; x < byronBattle.length; x++) {
                    let name = byronBattle[x].top;
                    // finding evo
                    if (name === "niddanrun") {
                        // onfield
                        card.addEventListener("click", myField);
                        //  evolve 
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < byronBattle.length; x++) {
                                let name = byronBattle[x].top;
                                if (name === "niddanrun") {
                                    // adding pokemon to the grave
                                    byronGrave.push(byronBattle[x]);
                                    byronBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const niddanrun = document.getElementById("niddanrun");
                                    mySide.removeChild(niddanrun);

                                }

                            }

                        })
                        // field ability
                        card.addEventListener("click", abilitysTwo);
                        //pause turn while ability is runing
                        card.addEventListener("click", pause => {
                            // seting both players turns to false so the turn stops n2 
                            // the player has made a choice
                            brittneyTurn = false;
                            byronTurn = false;
                            // update our hands after
                            Refresh();
                            byronHandDisplay();
                            brittneyHandDisplay();
                        });
                        // run ability
                        card.addEventListener("click", () => {
                            // creating the yes no option
                            const displayP = document.createElement("div");
                            displayP.setAttribute("class", "displayP");
                            const yes = document.createElement("div");
                            yes.setAttribute("class", "yes");
                            yes.innerHTML = "yes";
                            const no = document.createElement("div");
                            no.setAttribute("class", "no");
                            no.innerHTML = "no";
                            displayP.appendChild(yes);
                            displayP.appendChild(no);
                            mySide.appendChild(displayP);

                            // picking no cancells the abilitily
                            no.addEventListener("click", () => {
                                mySide.removeChild(displayP);
                                if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                    brittneyTurn = true;
                                    byronTurn = false;
                                }
                                else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                    brittneyTurn = false;
                                    byronTurn = true;
                                }


                                // restes update for the next turn
                                Refresh();

                                // diplays cards in hand
                                byronHandDisplay();
                                brittneyHandDisplay();
                            })
                            // picking yes
                            yes.addEventListener("click", () => {
                                // removes the div option
                                mySide.removeChild(displayP);

                                // getting opossing pokemon ids
                                for (let i = 0; i < brittneyBattle.length; i++) {
                                    const nameOfId = brittneyBattle[i].top
                                    const card = document.getElementById(nameOfId);


                                    // comparting pokemon strength
                                    card.addEventListener("click", () => {
                                        //finding pokemon battle position
                                        for (let bp = 0; bp < brittneyBattle.length; bp++) {
                                            const battler = brittneyBattle[bp].top;
                                            // battle win condisition
                                            if (battler === nameOfId) {

                                                if (this.bottom > brittneyBattle[bp].bottom) {
                                                    brittneyFieldRefresh();
                                                    brittneyGrave.push(brittneyBattle[bp]);
                                                    brittneyBattle.splice(bp, 1);
                                                    brittneyFieldUpdate();



                                                    scoreReset();
                                                    scoreUpdate();
                                                }
                                                // loss condishion
                                                else if (this.bottom < brittneyBattle[bp].bottom) {
                                                    for (let b = 0; b < byronBattle.length; b++) {
                                                        const nop = byronBattle[b].top;
                                                        const niddeKing = document.getElementById("niddleking");
                                                        if (nop === "niddleking") {
                                                            byronFieldRefresh();
                                                            byronGrave.push(brittneyBattle[b]);
                                                            byronBattle.splice(b, 1);
                                                            byronFieldUpdate();

                                                            scoreReset();
                                                            scoreUpdate();
                                                        }
                                                    }
                                                } else {
                                                    // finding niddlekings battle potion
                                                    for (let b = 0; b < byronBattle.length; b++) {
                                                        const nop = byronBattle[b].top;
                                                        const niddeKing = document.getElementById("niddleking");
                                                        if (nop === "niddleking") {
                                                            // removeing niddle queen
                                                            byronFieldRefresh();
                                                            byronGrave.push(brittneyBattle[b]);
                                                            byronyBattle.splice(b, 1);
                                                            byronFieldUpdate();


                                                        }
                                                    }
                                                    // removing other card
                                                    brittneyFieldRefresh();
                                                    brittneyGrave.push(brittneyBattle[bp]);
                                                    brittneynBattle.splice(bp, 1);
                                                    brittneyFieldUpdate();
                                                    scoreReset();
                                                    scoreUpdate();
                                                }

                                            }
                                        }
                                        if (brittneyRoundEnder === false && byronRoundEnder === false) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === false && byronRoundEnder === true) {
                                            brittneyTurn = true;
                                            byronTurn = false;
                                        }
                                        else if (brittneyRoundEnder === true && byronRoundEnder === false) {
                                            brittneyTurn = false;
                                            byronTurn = true;
                                        }
                                        Refresh();
                                        brittneyHandDisplay();
                                        byronHandDisplay();
                                    })





                                }




                            })



                        })
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    }, 
    {
        top: "magmar",
        img: "img/m10.jpg",
        bottom: 7,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // on field
                card.addEventListener("click", myField);
                // field ability
                card.addEventListener("click", abilitysTwo);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                });
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
      
    },
    {
        top: "eevee",
        img: "img/m11.jpg",
        bottom: 3,
        type: "grey",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // on field
                card.addEventListener("click", myField);
                // field ability
                card.addEventListener("click", abilitysTwo);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                });
            }
            
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    },
    {
        top: "vicparain",
        img: "img/m12.jpg",
        bottom: 5,
        type: "blue",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // serching for evo
                for (let x = 0; x < byronBattle.length; x++) {
                    let name = byronBattle[x].top;
                    // finding evo
                    if (name === "eevee") {
                        // on field
                        card.addEventListener("click", myField);
                        // evolve 
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < byronBattle.length; x++) {
                                let name = byronBattle[x].top;
                                if (name === "eevee") {
                                    // adding pokemon to the grave
                                    byronGrave.push(byronBattle[x]);
                                    byronBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const eevee = document.getElementById("eevee");
                                    mySide.removeChild(eevee);

                                }

                            }

                        })
                        // field ability
                        card.addEventListener("click", abilitysTwo);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
        
    },
    {
        top: "weedle",
        img: "img/m13.jpg",
        bottom: 1,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // on field
                card.addEventListener("click", myField);
                // field ability
                card.addEventListener("click", abilitysTwo);
                // runing ability
                card.addEventListener("click", ability => {
                    //serch to see if we have its evolation 
                    for (let x = 0; x < byronDeck.length; x++) {
                        const name = byronDeck[x].top;
                        if (name === 'cacume') {
                            Refresh();
                            byronHand.push(byronDeck[x]);
                            byronDeck.splice(x, 1);
                            byronHandDisplay();
                            brittneyHandDisplay();

                        }
                    }

                })
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                })
            }
        } ,
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    }, // has ability
    {
        top: "cacume",
        img: "img/m14.jpg",
        bottom: 1,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // serching for evo
                for (let x = 0; x < byronBattle.length; x++) {
                    let name = byronBattle[x].top;
                    // finding evo
                    if (name === "weedle") {
                        // on field
                        card.addEventListener("click", myField);
                        // evolve
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < byronBattle.length; x++) {
                                let name = byronBattle[x].top;
                                if (name === "weedle") {
                                    // adding pokemon to the grave
                                    byronGrave.push(byronBattle[x]);
                                    byronBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const weedle = document.getElementById("weedle");
                                    mySide.removeChild(weedle);

                                }

                            }

                        })
                        // field ability
                        card.addEventListener("click", abilitysTwo);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
        
    },
    {
        top: "beedrill",
        img: "img/m15.jpg",
        bottom: 5,
        type: "green",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // serching evo
                for (let x = 0; x < byronBattle.length; x++) {
                    let name = byronBattle[x].top;
                    // finding evo
                    if (name === "cacume") {
                        // on field
                        card.addEventListener("click", myField);
                        // evolve
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < byronBattle.length; x++) {
                                let name = byronBattle[x].top;
                                if (name === "cacume") {
                                    // adding pokemon to the grave
                                    byronGrave.push(byronBattle[x]);
                                    byronBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const cacume = document.getElementById("cacume");
                                    mySide.removeChild(cacume);

                                }

                            }

                        })
                        // run ability
                        card.addEventListener("click", abilitysTwo);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
      
    },
    {
        top: "charmander",
        img: "img/m4.jpg",
        bottom: 3,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // on field
                card.addEventListener("click", myField);
                // field ability
                card.addEventListener("click", abilitysTwo);
                // run ability
                card.addEventListener("click", ability => {

                    Refresh();
                    byronDraw(1);
                    brittneyHandDisplay();
                    byronHandDisplay();
                })
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                });

            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    }, // has ability
    {
        top: "charmilian",
        img: "img/m5.jpg",
        bottom: 4,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // serching for evo
                for (let x = 0; x < byronBattle.length; x++) {
                    let name = byronBattle[x].top;
                    // finding evo
                    if (name === "charmander") {
                        // on field
                        card.addEventListener("click", myField);
                        // evolve
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < byronBattle.length; x++) {
                                let name = byronBattle[x].top;
                                if (name === "charmander") {
                                    // adding pokemon to the grave
                                    byronGrave.push(byronBattle[x]);
                                    byronBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const charmander = document.getElementById("charmander");
                                    mySide.removeChild(charmander);

                                }

                            }

                        })
                        // field ability
                        card.addEventListener("click", abilitysTwo);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    }, 
    {
        top: "charazard",
        img: "img/m6.jpg",
        bottom: 9,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // serching for per evo
                const perEvo = byronBattle.filter((pokemon) => pokemon.top === "charmilian");
                if (perEvo.length >= 1) {
                   // on field
                    card.addEventListener("click", myField);
                    // evolve
                    card.addEventListener("click", () => {
                        const evo = byronBattle.findIndex(function (pokemon, evo) {
                          return  pokemon.top === "charmilian"
                        })
                        byronGrave.push(byronBattle[evo]);
                        byronBattle.splice(evo, 1);
                        byronFieldRefresh();
                        byronFieldUpdate();
                    })
                    // field ability
                    card.addEventListener("click", abilitysTwo);
                    // run our ability
                    card.addEventListener("click", () => {
                        // dealing damange to all the pokemon on my oponets side of the field
                        const fireBall = brittneyBattle.filter(function (pokemon, index) {
                            if (pokemon.bottom <= this.bottom * 2) {
                                brittneyGrave.push(brittneyBattle[index]);
                               
                            }
                            return pokemon;
                        });
                      // changing the original aaray
                        brittneyBattle = brittneyBattle.filter(pokemon => pokemon.bottom > this.bottom);
                       // updateing the battlefield
                        brittneyFieldRefresh();
                        brittneyFieldUpdate();
                       
                    })
                    // score update
                    card.addEventListener("click", e => {
                        scoreReset();
                        scoreUpdate();
                    })
                       
                   
                   
                  
                   
                }
              
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }

    }, 
    {
        top: "vopix",
        img: "img/m7.jpg",
        bottom: 3,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // on field
                card.addEventListener("click", myField);
                // field ability
                card.addEventListener("click", abilitysTwo);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                });
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
        
    },
    {
        top: "ninetails",
        img: "img/m8.jpg",
        bottom: 8,
        type: "red",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // serching evo
                for (let x = 0; x < byronBattle.length; x++) {
                    let name = byronBattle[x].top;
                    // finding evo
                    if (name === "vopix") {
                        // on field
                        card.addEventListener("click", myField);
                        // evolve 
                        card.addEventListener("click", evolve => {
                            for (let x = 0; x < byronBattle.length; x++) {
                                let name = byronBattle[x].top;
                                if (name === "vopix") {
                                    // adding pokemon to the grave
                                    byronGrave.push(byronBattle[x]);
                                    byronBattle.splice(x, 1);
                                    //removing the former pokemon
                                    const vopix = document.getElementById("vopix");
                                    mySide.removeChild(vopix);

                                }

                            }

                        })
                        // field ability
                        card.addEventListener("click", abilitysTwo);
                        // score update
                        card.addEventListener("click", e => {
                            scoreReset();
                            scoreUpdate();
                        })

                    }
                }
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
       
    },
    {
        top: "lapras",
        img: "img/m9.jpg",
        bottom: 6,
        type: "blue",
        card: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);

            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myHand.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);

            if (byronTurn === true) {
                // on field
                card.addEventListener("click", myField);
                // field ability
                card.addEventListener("click", abilitysTwo);
                // score update
                card.addEventListener("click", e => {
                    scoreReset();
                    scoreUpdate();
                });
                
            }
        },
        grave: function (indexnum) {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("data-id", indexnum);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            myGraveDisplays.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        },
        field: function () {
            const card = document.createElement("div");
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.top);
            // getting the top of the card
            const top = document.createElement("h5");
            top.setAttribute('class', "top");
            top.innerHTML = this.top;
            // getting the center of the card
            const center = document.createElement("img");
            center.setAttribute("src", this.img);
            // getting bottom of the card
            const bottom = document.createElement("h4");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;
            // add to the hand
            mySide.appendChild(card);
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(bottom);
        }
        
    },
   
];

 // funcions
// deck
function deckBuilder() {
    // brittney deck
    for (let i = 0; i < brittneyCards.length; i++) {
        brittneyDeck.push(brittneyCards[i]);
    }
    // byron deck
    for (let i = 0; i < byronCards.length; i++) {
        byronDeck.push(byronCards[i]);
    }
    // shuffing both decks
     brittneyDeck.sort(() => 0.5 - Math.random());
     byronDeck.sort(() => 0.5 - Math.random());
}
// draw medthad
const brittneyDraw = (amont) => {
    for (let i = 0; i < amont; i++) {
        brittneyHand.push(brittneyDeck[0]);
        brittneyDeck.splice(0, 1);
    }
    herDeck.innerHTML = brittneyDeck.length;
}
const byronDraw = (amont) => {
    for (let i = 0; i < amont; i++) {
        byronHand.push(byronDeck[0]);
        byronDeck.splice(0, 1);
    }
    myDeck.innerHTML = byronDeck.length;
}
// on click round enders
herRoundEnder.addEventListener("click", () => {
    brittneyRoundEnder = true;
    brittneyTurn = false;
    byronTurn = true;
    Refresh();
    byronHandDisplay();
    brittneyHandDisplay();
    compareScore();
})
myRoundEnder.addEventListener("click", () => {
    byronRoundEnder = true;
    brittneyTurn = true;
    byronTurn = false;
    Refresh();
    byronHandDisplay();
    brittneyHandDisplay();
    compareScore();
})

// click to display graves
herGrave.addEventListener("click", () => {
    // removes grave display
    if (herGraveSwitch === true) {
        herGraveSwitch = false;
        herSide.removeChild(herGraveDisplays);
        if (brittneyGrave.length > 0) {
            brittneyGrave.forEach(() => herGraveDisplays.removeChild(herGraveDisplays.lastChild));
        }
       
     
    } else { //adds the display 
        herGraveSwitch = true;
       
        herSide.appendChild(herGraveDisplays);
        // checks to see if there are any cards in the grave aaray
        if (brittneyGrave.length > 0) {
            // adds the cards to the grave aaray
            for (let g = 0; g < brittneyGrave.length; g++) {
                brittneyGrave[g].grave(g);
            }
        }
       
    }
}) 
myGrave.addEventListener("click", () => {
    // checks to see if the grave has been switched on
    if (myGraveSwitch === true) {
        // lets me no the switch is off
        myGraveSwitch = false;
       
        //removes the div
        mySide.removeChild(myGraveDisplays);
        //removes the cards in the divs
        if (byronGrave.length > 0) {
            byronGrave.forEach(() => myGraveDisplays.removeChild(myGraveDisplays.lastChild));
        }
       

    }// showing the objects in the graveyard
    else {
        myGraveSwitch  = true;
       
        mySide.appendChild(myGraveDisplays);

        if (byronGrave.length > 0) {
            for (let g = 0; g < byronGrave.length; g++) {
                byronGrave[g].grave(g);
            }
        }
       

    }
}) 

// hand display
function brittneyHandDisplay() {
    for (let i = 0; i < brittneyHand.length; i++) {
        brittneyHand[i].card(i); // also gives card index nem
    }
    
};
function byronHandDisplay() {
    for (let i = 0; i < byronHand.length; i++) {
        byronHand[i].card(i); // also gives card index nem
    }
};
// hand update
function Refresh() {
    for (let i = 0; i < brittneyHand.length; i++) {
        
        herHand.removeChild(herHand.lastElementChild);
    }
    for (let x = 0; x < byronHand.length;x++) {
       
       
        myHand.removeChild(myHand.lastChild);
    }
}
// putting pokemon on field #1
function herField()
{

   
    // remove card from hand  and putting it on the field and moves it to the battle aaray
    let handnum = this.getAttribute("data-id");
    brittneyBattle.push(brittneyHand[parseInt(handnum)]);
    brittneyHand.splice(parseInt(handnum), 1); 

    herHand.removeChild(this);
    brittneyFieldRefresh();
    brittneyFieldUpdate();
   

    // changes the current turn to the next person turn
    if (brittneyRoundEnder === false && byronRoundEnder === false) {
        brittneyTurn = false;
        byronTurn = true;
    }
    else if (brittneyRoundEnder === false && byronRoundEnder === true) {
        brittneyTurn = true;
        byronTurn = false;
    }
    else if (brittneyRoundEnder === true && byronRoundEnder === false) {
        brittneyTurn = false;
        byronTurn = true;
    }
        

    // restes update for the next turn
    Refresh();

    // diplays cards in hand
    byronHandDisplay();
    brittneyHandDisplay(); 
     
};
function myField() {
   
    let handnum = this.getAttribute("data-id");
    byronBattle.push(byronHand[parseInt(handnum)])
    byronHand.splice(parseInt(handnum), 1); 

    myHand.removeChild(this);

    byronFieldRefresh();
    byronFieldUpdate();
    
    

    if (brittneyRoundEnder === false && byronRoundEnder === false) {
        brittneyTurn = true;
        byronTurn = false;
    }
    else if (brittneyRoundEnder === false && byronRoundEnder === true) {
        brittneyTurn = true;
        byronTurn = false;
    }
    else if (brittneyRoundEnder === true && byronRoundEnder === false) {
        brittneyTurn = false;
        byronTurn = true;
    }


    Refresh();

    byronHandDisplay();
    brittneyHandDisplay();
   
};
// field update
function brittneyFieldRefresh() {
    while (herSide.hasChildNodes()) {
        herSide.removeChild(herSide.lastChild);
    }

   
};
function byronFieldRefresh() {
    while (mySide.hasChildNodes()) {
        mySide.removeChild(mySide.lastChild);
    }
};
// field display
const brittneyFieldUpdate = () => {
    for (let i = 0; i < brittneyBattle.length; i++) {
        brittneyBattle[i].field();
    }
      

};
const byronFieldUpdate = () => {
    for (let i = 0; i < byronBattle.length; i++) {
        byronBattle[i].field();
    }
}
// score update
const scoreUpdate = () => {
    for (let x = 0; x < brittneyBattle.length; x++) {
        brittneyScore = brittneyScore + brittneyBattle[x].bottom;
    }
    for (let x = 0; x < byronBattle.length; x++) {
        byronScore = byronScore + byronBattle[x].bottom;

    }
    myScore.innerHTML = byronScore;
    herScore.innerHTML = brittneyScore;
};
function scoreReset() {
    byronScore = 0;
    brittneyScore = 0;
}
// compare score function
function compareScore() {
    if (byronRoundEnder === true && brittneyRoundEnder === true) {
        if (brittneyScore > byronScore) {
            console.log("brittney wins");
        }
        else if (byronScore > brittneyScore) {
            console.log("byron wins");
        }
        else {
            console.log("tie game");
        }   
    }

    
}






// call-ins
deckBuilder();
brittneyDraw(9);
byronDraw(9);
brittneyTurn = true;
byronTurn = false;

byronHandDisplay();
brittneyHandDisplay();

// time to end this project and improve on eveything i learned as i create the next on. 
// my plan is to learn a few more intermidded concepts then learn to create a online game

