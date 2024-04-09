function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "20px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');
const option3Button = document.getElementById('option3');
const option4Button = document.getElementById('option4');
const cards = document.querySelectorAll('#card');


function hideAllCards() {
  cards.forEach(card => {
    card.style.display = 'none';
  });
}

function showAllCards() {
  cards.forEach(card => {
    card.style.display = 'block';
  });
}


function showSelectedCard(cardIndex) {
  hideAllCards();
  cards[cardIndex].style.display = 'block';
}

option1Button.addEventListener('click', function() {
  showSelectedCard(0); 
});

option2Button.addEventListener('click', function() {
  showSelectedCard(1); 
});

option3Button.addEventListener('click', function() {
  showSelectedCard(2); 
});

option4Button.addEventListener('click', function() {
  showSelectedCard(3); 
});


const Button1 = document.getElementById('button1');
const Button2 = document.getElementById('button2');
const Button3 = document.getElementById('button3');
const cars = document.querySelectorAll('#cars');


function hideAllCards() {
  cars.forEach(cars => {
    cars.style.display = 'none';
  });
}

function showAllCars() {
  cars.forEach(cars => {
    cars.style.display = 'block';
  });
}

Button1.addEventListener('click', function() {
  hideAllCards();
  cars[0].style.display = 'block';
  cars[4].style.display = 'block';
  cars[8].style.display = 'block';
  cars[12].style.display = 'block';
});

Button2.addEventListener('click', function() {
  hideAllCards();
  cars[1].style.display = 'block';
  cars[5].style.display = 'block';
  cars[9].style.display = 'block';
  cars[13].style.display = 'block';
});

Button3.addEventListener('click', function() {
  hideAllCards();
  cars[2].style.display = 'block';
  cars[6].style.display = 'block';
  cars[10].style.display = 'block';
  cars[14].style.display = 'block';
  cars[14].style.display = 'block';
  cars[18].style.display = 'block';
  cars[22].style.display = 'block';
});
