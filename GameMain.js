function Convert(opPc) {
    if (opPc === 1) {
      return "Piedra";
    } else if (opPc === 2) {
      return "Papel";
    } else if (opPc === 3) {
      return "Tijera";
    }
  }
  
  var score = 0;
  
  function updateScore() {
    document.getElementById("score-text").textContent = score;
  }
  
  function Game(opHuman) {
    var opPc = Math.floor(Math.random() * 3) + 1;
    var pcChoice = Convert(opPc);
  
    document.getElementById("resultPC-text").textContent = "La computadora ha sacado: " + pcChoice;
  
    switch (opHuman) {
      case "Piedra":
        if (pcChoice === "Piedra") {
          document.getElementById("result-text").textContent = "Empate";
        } else if (pcChoice === "Papel") {
          document.getElementById("result-text").textContent = "Haz perdido";
          score--;
        } else if (pcChoice === "Tijera") {
          document.getElementById("result-text").textContent = "Haz ganado";
          score++;
        }
        break;
  
      case "Tijera":
        if (pcChoice === "Tijera") {
          document.getElementById("result-text").textContent = "Empate";
        } else if (pcChoice === "Papel") {
          document.getElementById("result-text").textContent = "Haz ganado";
          score++;
        } else if (pcChoice === "Piedra") {
          document.getElementById("result-text").textContent = "Haz perdido";
          score--;
        }
        break;
  
      case "Papel":
        if (pcChoice === "Papel") {
          document.getElementById("result-text").textContent = "Empate";
        } else if (pcChoice === "Tijera") {
          document.getElementById("result-text").textContent = "Haz perdido";
          score--;
        } else if (pcChoice === "Piedra") {
          document.getElementById("result-text").textContent = "Haz ganado";
          score++;
        }
        break;
  
      default:
        document.getElementById("result-text").textContent = "Ingrese un valor válido";
        break;
    }
  
    updateScore();
  }
  
  document.getElementById("rock").addEventListener("click", function() {
    Game("Piedra");
  });
  
  document.getElementById("paper").addEventListener("click", function() {
    Game("Papel");
  });
  
  document.getElementById("scissors").addEventListener("click", function() {
    Game("Tijera");
  });
  
  document.getElementById("reset").addEventListener("click", function() {
    score = 0;
    updateScore();
    document.getElementById("result-text").textContent = "Esperando...";
  });
  