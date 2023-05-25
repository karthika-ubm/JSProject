let cardsArray = [
    {
        'id': 1,
        'name': 'CSS',
        'img': 'images/css.jpg',
    },
    {
        'id': 2,
        'name': 'HTML',
        'img': 'images/html.webp',
    },
    {
        'id': 3,
        'name': 'jQuery',
        'img': 'images/jquery.png',
    },
    {
        'id': 4,
        'name': 'JS',
        'img': 'images/jslogo.png',
    },
    {
        'id': 5,
        'name': 'Node',
        'img': 'images/nodejs.png',
    },
    {
        'id': 6,
        'name': 'Python',
        'img': 'images/pythonlogo.png',
    },
    {
        'id': 7,
        'name': 'CSS',
        'img': 'images/css.jpg',
    },
    {
        'id': 8,
        'name': 'HTML',
        'img': 'images/html.webp',
    },
    {
        'id': 9,
        'name': 'jQuery',
        'img': 'images/jquery.png',
    },
    {
        'id': 10,
        'name': 'JS',
        'img': 'images/jslogo.png',
    },
    {
        'id': 11,
        'name': 'Node',
        'img': 'images/nodejs.png',
    },
    {
        'id': 12,
        'name': 'Python',
        'img': 'images/pythonlogo.png',
    },
    {
        'id': 13,
        'name': 'CSS',
        'img': 'images/css.jpg',
    },
    {
        'id': 14,
        'name': 'HTML',
        'img': 'images/html.webp',
    },
    {
        'id': 15,
        'name': 'jQuery',
        'img': 'images/jquery.png',
    },
    {
        'id': 16,
        'name': 'JS',
        'img': 'images/jslogo.png',
    },
    {
        'id': 17,
        'name': 'Node',
        'img': 'images/nodejs.png',
    },
    {
        'id': 18,
        'name': 'Python',
        'img': 'images/pythonlogo.png',
    },
    {
        'id': 19,
        'name': 'CSS',
        'img': 'images/css.jpg',
    },
    {
        'id': 20,
        'name': 'HTML',
        'img': 'images/html.webp',
    },
    {
        'id': 21,
        'name': 'jQuery',
        'img': 'images/jquery.png',
    },
    {
        'id': 22,
        'name': 'JS',
        'img': 'images/jslogo.png',
    },
    {
        'id': 23,
        'name': 'Node',
        'img': 'images/nodejs.png',
    },
    {
        'id': 24,
        'name': 'Python',
        'img': 'images/pythonlogo.png',
    },

];


const parentDiv = document.querySelector('#card-section');



// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
let shuffledChild = Array.from(cardsArray).sort(() => 0.5 - Math.random());


let audio = new Audio();
let clickCount = 0;
let firstCard = "";
let secondCard = "";



const animateShowers = () => {
    const duration = 5 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 100 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
};




// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match');
        curElem.classList.add('frozen');


    })
}


// step 7

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })
}

const resetInBetween = () => {
    location.reload();
}

const clearCards = () => {
    let removecards = document.querySelector('.main');
    removecards.innerHTML = '';
    setTimeout(() => {

        removecards.textContent = 'Congratulations! All cards are matched.';
        removecards.style.fontSize = "40px";
        removecards.style.fontWeight = 'bold';
    }, 0)
    setTimeout(() => {

        location.reload();

    }, 3000)

}




// step 4
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if (curCard.id === "card-section") { return false }

    clickCount++;

    if (clickCount < 3) {

        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            cardId1 = curCard.parentNode.dataset.id;
            curCard.parentNode.classList.add('card_selected');
            // audio.pause();
            // audio.src = '';
            // audio.src = 'images/click.mp3';
            // audio.play();
        } else {
            secondCard = curCard.parentNode.dataset.name;
            cardId2 = curCard.parentNode.dataset.id;
            curCard.parentNode.classList.add('card_selected');
            // audio.pause();
            // audio.src = '';
            // audio.src = 'images/click.mp3';
            // audio.play();
        }

        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard && cardId1 !== cardId2) {

                setTimeout(() => {
                    card_matches()
                    resetGame()

                    console.log(shuffledChild.length);
                    let card_match = document.querySelectorAll('.card_match');
                    console.log(card_match.length);
                    setTimeout(() => {
                        if (shuffledChild.length === card_match.length) {
                            audio.pause();
                            audio.src = '';
                            audio.src = 'images/applause7.mp3';
                            audio.play();
                            setTimeout(() => {
                                animateShowers();
                            }, 0);
                            setTimeout(() => {

                                clearCards();
                            }, 2000)
                        }

                    }, 0);


                }, 1000)
                audio.pause();
                audio.src = '';
                audio.src = 'images/match.mp3';
                audio.play();





            } else {
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})


// step 1 to add the card
for (let i = 0; i < shuffledChild.length; i++) {

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    childDiv.dataset.id = shuffledChild[i].id;
    // console.log(childDiv.dataset.id)

    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}

const reset = document.getElementById('reset');
console.log(reset)
reset.addEventListener('click', () => {

    resetInBetween()
});



