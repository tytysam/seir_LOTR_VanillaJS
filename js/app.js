console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

let body = document.body;

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  let section = document.createElement("section");
  section.setAttribute("id", "middle-earth");

  // 2. use a for loop to iterate over the lands array that does the following:
  //   2a. creates an article tag (there should be one for each land when the loop is done)
  //   2b. gives each land article an `id` tag of the corresponding land name
  //   2c. includes an h1 with the name of the land inside each land article
  //   2d. appends each land to the middle-earth section
  for (let i = 0; i < lands.length; i++) {
    let article = document.createElement("article");
    article.setAttribute("id", lands[i]);
    section.appendChild(article);
    let h1 = document.createElement("h1");
    h1.textContent = lands[i];
    article.appendChild(h1);
  }

  // 3. append the section to the body of the DOM.
  body.appendChild(section);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  let ul = document.createElement("ul");
  document.querySelector("#The-Shire").appendChild(ul);
  // give each hobbit a class of `hobbit`
  for (let i = 0; i < hobbits.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", "hobbit");
    li.innerText = hobbits[i];
    ul.appendChild(li);
  }
  // hint: create a 'ul' outside the loop into which to append the 'li's
  // hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  let div = document.createElement("div");
  div.setAttribute("id", "the-ring");
  // give the div a class of `'magic-imbued-jewelry'`
  div.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of `Frodo`
  let frodo = document.querySelector("ul").firstChild;
  frodo.appendChild(div);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  let ul = document.createElement("ul");
  document.querySelector("#Mordor").appendChild(ul);
  // give each of the baddies a class of "baddy"
  for (let i = 0; i < baddies.length; i++) {
    let li = document.createElement("li");
    li.setAttribute("class", baddies[i]);
    li.innerText = baddies[i];
    ul.appendChild(li);
  }
  // remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  let aside = document.createElement("aside");
  // put an `unordered list` of the `'buddies'` in the aside
  let ul = document.createElement("ul");
  aside.appendChild(ul);

  for (let i = 0; i < buddies.length; i++) {
    let li = document.createElement("li");
    li.innerText = buddies[i];
    ul.appendChild(li);
  }

  // insert your aside as a child element of `rivendell`
  let rivendell = document.querySelector("#Rivendell");
  rivendell.appendChild(aside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`
  let rivendell = document.querySelector("#Rivendell").firstChild.nextSibling;
  let hobbits = document.querySelector("#The-Shire").firstChild.nextSibling;
  rivendell.append(hobbits);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  let strider = document.querySelector("aside").firstChild.firstChild
    .nextSibling.nextSibling.nextSibling;
  strider.innerText = "Aragorn";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  let rivendell = document.getElementById("Rivendell");
  let theFellowship = document.createElement("div");
  theFellowship.setAttribute("id", "the-fellowship");
  rivendell.appendChild(theFellowship);
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  let tempBuddies = document.querySelector("aside").firstChild; // this selects the buddies UL
  let tempHobbits = document.querySelector("aside").firstChild.nextSibling; // this selects the hobbits UL
  // after each character is added make an alert that they // have joined your party
  // --> for loop to cycle each buddy in our buddies UL (#Rivendell > aside > buddies UL && hobbits UL)
  for (let i = 0; i < buddies.length; i++) {
    let li = tempBuddies.firstChild;
    theFellowship.appendChild(li);
    alert(`${li.innerText} has joined the party.`);
  }

  // --> for loop to cycle each hobbit in our hobbits UL (#Rivendell > aside > buddies UL && hobbits UL)
  for (let i = 0; i < hobbits.length; i++) {
    let li = tempHobbits.firstChild;
    theFellowship.appendChild(li);
    alert(`${li.innerText} has joined the party.`);
  }
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  let gandalf = document.getElementById("the-fellowship").firstChild;
  gandalf.innerText = "Gandalf the White";
  // apply the following style to the element, make the // background 'white', add a grey border
  gandalf.style.border = "3px solid grey";
  gandalf.style.backgroundColor = "#ffffff";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("THE HORN OF GONDOR has been BLOWN!!⁄!⁄⁄!¡");
  // Boromir's been killed by the Uruk-hai!
  alert("RIP in peace Boromir...");
  // Remove `Boromir` from the Fellowship
  // Boromir = the-fellowship > Gandalf --> Legolas --> Gimli --> Aragorn --> Boromir
  let boromir = document.getElementById("the-fellowship").firstChild.nextSibling
    .nextSibling.nextSibling.nextSibling;
  boromir.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // frodo/sam = the-fellowship > Gandalf --> Legolas --> Gimli --> Aragorn --> Frodo --> Sam --> Merry --> Pippin
  let frodo = document.getElementById("the-fellowship").lastChild
    .previousSibling.previousSibling.previousSibling;
  let sam = document.getElementById("the-fellowship").lastChild.previousSibling
    .previousSibling;
  let mordor = document.getElementById("Mordor");
  // mordor structure = article(#Mordor) > Mordor --> UL > Sauron --> Saruman --> The Uuk-hai --> Orcs
  mordor.firstChild.nextSibling.appendChild(frodo);
  mordor.firstChild.nextSibling.appendChild(sam);

  // add a div with an id of `'mount-doom'` to `Mordor`
  let div = document.createElement("div");
  div.setAttribute("id", "mount-doom");
  mordor.appendChild(div);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  let gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  let mordor = document.getElementById("Mordor");
  mordor.appendChild(gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  let theOneRing = document.getElementById("the-ring");
  gollum.appendChild(theOneRing);
  // Move Gollum into Mount Doom
  let mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(gollum);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  let gollum = document.getElementById("gollum");
  gollum.remove();
  let tempHobbits = document.getElementsByClassName("hobbit");
  console.log(tempHobbits);
  let theShire = document.getElementById("The-Shire");
  let ul = document.createElement("ul");
  theShire.appendChild(ul);
  // Move all the `hobbits` back to `the shire`
  for (let i = 0; i < hobbits.length; i++) {
    let li = tempHobbits[i];
    ul.appendChild(li);
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
