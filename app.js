let kittens = []
let mood = "Confused"
let currentKitten = {}
loadKittens()
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  event.preventDefault()
  let form = event.target

  let kittenName = form.name.value

  currentKitten = kittens.find(kitten => kitten.name == kittenName)

  if(!currentKitten) {
    currentKitten = {name: kittenName, mood: mood, affection: 0, id: generateId()}
    kittens.push(currentKitten)
    saveKittens()
    drawKittens()
    
  }

  form.reset()
  document.getElementById("releaseKittens").style.visibility='visible';
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
 */
function saveKittens() {
  window.localStorage.setItem("kittens", JSON.stringify(kittens))
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
  let kittensData = JSON.parse(window.localStorage.getItem("kittens"))
  if(kittensData){
    kittens = kittensData
  }
}

/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
    let template = ""

  kittens.forEach(kittens => {
    template += `<div id="kittens" class="d-flex align-items-center flex-wrap">
      <pre>
       <span>Name: ${kittens.name}</span>
       <span>Mood: ${kittens.mood}</span>
       <span>Affection: ${kittens.affection} </span>
       <button id="deleteButton" onclick="removeKitten()">Release this Kitten</button>
      </pre>
    </div>
    `
})

  document.getElementById("kittens").innerHTML = template
}


/**
 * Find the kitten in the array by its id
 * @param {string} id 
 * @return {Kitten}
 */
function findKittenById(id) {
}


/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5 
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} id 
*/
function pet(id) {
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} id
*/
function catnip(id) {
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten 
*/
function setKittenMood(kitten) {
}

function removeKitten(kittens, id){
  const kittenIndex = kittens.findIndex((obj) => obj.id == id);
  if(kittenIndex > -1){
    kittens.splice(kittenIndex, 1);
  }
  saveKittens()
  loadKittens()
  
}

/**
 * Removes all of the kittens from the array
 * remember to save this change
*/
function clearKittens(){
  window.localStorage.clear()
  
  let template = ""
  
    template += `<div id="kittens" class="d-flex align-items-center flex-wrap">
      Oh no! You don't have any kittens. Please fill out a name above to adopt one now!
    </div>
    `
  document.getElementById("releaseKittens").style.visibility='hidden';
  document.getElementById("kittens").innerHTML = template
}

/**
 * Removes the welcome content and should probably draw the 
 * list of kittens to the page. Good Luck
 */
function getStarted() {
  document.getElementById("welcome").remove();
  console.log('This is your life meow')
  drawKittens()
  document.getElementById("releaseKittens").style.visibility='visible';

}


// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{name: string, mood: string, affection: number}} Kitten
 */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

loadKittens();