const nextBtn = document.getElementById("btn");
const subContainer = document.getElementById("jokesContainer");

let jokesArr = ["Did you hear about the racing snail who got rid of his shell? A: He thought it would make him faster, but it just made him sluggish.", "It’s a good thing snakes and dogs don’t interbreed. Nobody wants a loyal snake. —Roy Blount, humorist","What did the SNAIL say while riding on the turtles back? A: Wheeeeeeeee","How are a cat and a sentence different? A: A cat has claws at the end of its paws; a sentence has a pause at the end of its...","Don't interrupt someone working intently on a puzzle. Chances are, you'll hear some crosswords.","Me and the wife [singer Katy Perry] have three cats, and they get whatever they want. We can only know what they want from what we speculate, so it’s a lot of vests, hats, and cat shoes. -- Russell Brand","When our client's dog lapped up anti-freeze, the veterinarian I work for ordered a unique treatment: an IV drip mixing fluids with vodka.", "Chuck Norris' tears cure cancer. Too bad he has never cried.","Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light","If you ask Chuck Norris what time it is, he always says, 'Two seconds till.' After you ask, 'Two seconds to what?' he roundhouse kicks you in the face.","There is no chin behind Chuck Norris' beard. There is only another fist.","If you want a list of Chuck Norris' enemies, just check the extinct species list.","Chuck Norris' calendar goes straight from March 31st to April 2nd, because no one fools Chuck Norris.","Chuck Norris can have both feet on the ground and kick butt at the same time.","Chuck Norris once won a game of Connect Four in three moves.","When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.","Chuck Norris does not hunt because the word hunting implies the possibility of failure. Chuck Norris goes killing.","Death once had a near-Chuck-Norris experience.","Chuck Norris never retreats; He just attacks in the opposite direction.","Chuck Norris once punched a man in the soul.","Chuck Norris once punched a man in the soul.","Chuck Norris doesn't read books. He stares them down until he gets the information he wants.","Time waits for no man. Unless that man is Chuck Norris.","If you spell Chuck Norris in Scrabble, you win. Forever.","Chuck Norris breathes air ... five times a day.","The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them."]

console.log(jokesArr.length);
console.log(Math.floor(Math.random()*jokesArr.length));

const changeJokes = () => {
    subContainer.innerHTML = "";
    let randomNum = Math.floor(Math.random()*jokesArr.length);
   
    subContainer.innerHTML = `<p><b>"</b>${jokesArr[randomNum]}<b>"</b></p>`;
    
    
}

changeJokes();

nextBtn.addEventListener("click", changeJokes);
