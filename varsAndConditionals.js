/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

//Create a variable for Jon and Jamie's attack strengths.
let jonSnowAttack = 25
let jamieLannisterAttack = 45

//Before the battle begins, Jon and Jamie decide to compare attack strengths to get insight into who might win this battle. Using an if-else statement, console.log who has the greater attack strength.
// if(jonSnowAttack > jamieLannisterAttack){
//     console.log(`Jon's attack is greater than Jamie's`)
// } else {
//     console.log(`Jamie's attack is greater`)
// }

//What if we have a tie? Our code would actually give the win to Jamie, which is no good. Add in an else if to resolve this.

if(jonSnowAttack > jamieLannisterAttack){
    console.log(`Jon's attack is greater than Jamie's`)
} else if(jamieLannisterAttack > jonSnowAttack) {
    console.log(`Jamie's attack is greater`)
} else {
    console.log(`its a tie`)
}

//Jamie, knowing he is the superior, initiates a fight with Jon. Let's create some additional stats for Jon Snow so we can see how this plays out.

let jonSnowHealth = 100
let jonSnowDefense = 0

//Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.
if(jonSnowHealth <= jamieLannisterAttack){
    console.log(`john has been slain`)
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    // jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's remaining health is ${jonSnowHealth}`)
}


//Jon Snow, adamant he does not want to fight Jamie (can you blame him?), picks up a shield to help defend himself. Increase Jon's defense by 25.
jonSnowDefense += 25

//Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon's defense. If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.
//if(jonSnowHealth - (jamieLannisterAttack - jonSnowDefense) <= 0)
if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log(`jon has been slain`)
} else {
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's remaining health is ${jonSnowHealth}`)
}

//One of the town’s people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon’s health by 50pts. However, Jon’s health cannot exceed 100. Using an if else statement, raise Jon’s health to the appropriate level.
if(jonSnowHealth <= 50){
    jonSnowHealth += 50
} else {
    jonSnowHealth = 100
}

console.log(jonSnowHealth)

//Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon’s head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).
let coinLandsHeads = false
if(coinLandsHeads !== false){
    console.log('the fight continues')
} else {
    console.log(`jon runs away`)
}

//Let’s see how this battle will play out if it continues. Create a for loop that will have Jamie attack Jon 5 times. Console log Jon Snow’s health after each attack.

// for(let i = 1;i <= 5;i++){
//     jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//     console.log(`Jon snow's health is now ${jonSnowHealth}`)
// }

//Now we will combine for loops and if statements. Add a condition to check if Jon Snow will survive
// for(let i = 1;i <= 6;i++){
//     if(jonSnowHealth <= 0){
//         console.log(`jon has been slain`)
//     } else {
//         jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
//         console.log(`Jon snow's health is now ${jonSnowHealth}`)
//     }
// }

//Demonstrate a while loop that will have Jamie attack Jon until Jon is slain. You will need to comment out the above for loops for these to run properly.
while(jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon snow's health is now ${jonSnowHealth}`)
    if(jonSnowHealth <= 0){
        console.log(`he has been slain, send the red lady`)
    }
}

console.log(`hello universe`)