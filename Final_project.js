let quotes = [
    "Life has got all those twists and turns. You've got to hold on tight and off you go. </br> (Nicole Kidman)",
    "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end. </br>   (Michelle Obama)",
    'It is during our darkest moments that we must focus to see the light. </br>      (Aristotle)',
    'Wait, how did you find me?  </br>   (Eward Snowden)',
    'All talents are willing to endure anything to be reconized.  </br>    (Harvey Weinstein)',
    `If you don't agree with my decision to remove abortion-right, wait until I sell all of my coat manufacturers stock then we will dicuss further </br>    (Nancy Pelosi)`

]



let inspire = document.getElementById('inspire');
let outquote = document.getElementById('quote');

inspire.addEventListener('click',function() {
    var randomQ = quotes[Math.floor(Math.random() * quotes.length)];
    outquote.innerHTML = randomQ;
});





let rcipes = [
    `This tomato vodka rigatoni will put you in good spirits
    <h5>1. Mix the cornflour with the soy sauce and lemon juice in a small bowl.</h5>
    <h5>2. Heat the oil in a large frying pan or wok over a high heat, add the chicken, capsicum, carrot and broccolften.</h5>`,
    `Lemon chicken
    <h5>1. Heat oil in a saucepan over low heat. Add garlic and anchovies, caramelised.</h5>
    <h5>2. Add tomatoes, red wine and oregano, and bring to a simmer, breaking up tomn. Simmer for 10-12 minutes, stirring oce.</h5> `,
    `Penne all’arrabbiata
    <h5>1. Place walnuts, peas, herbs, parmesan, garlic, lemon juice and 200ml oil in a blender, and we. Season to taste and ge bowl</h5>.
    <h5>2. Cook pasta in boiling salted water to packet instructions. Drain, reserving 2/3 cup (160ml) cookie pesto in the bowlrve.</h5> `,
    `The Wood family's puttanesca
    <h5>Heat oil in a large frypan over medium heat. Add onion and cook, stirring, for 3-4 minutes until softened. Somatwater, to serve.</h5> `,
];

let rdmrcp = document.getElementById('rdmrcp');
let recipe = document.getElementById('recipe');

rdmrcp.addEventListener('click',function() {
    var randomR = rcipes[Math.floor(Math.random() * rcipes.length)];
    recipe.innerHTML = randomR;
})




const strtmin = 29 + 59/60;
let time = strtmin * 60;

const countdownEl = document.getElementById('countdown');


document.getElementById("standbutton").addEventListener("click", function(){
    setInterval(updatecntdwn, 1000);
});


function updatecntdwn() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    time--;
    if( time>= 0 ){
        countdownEl.innerHTML = `${minutes}: ${seconds}`;
    }
    if ( time <= -1/120){
        time = 1800
        alert('Stand up \n You have been sitting for 30 minutes')   

    }
}