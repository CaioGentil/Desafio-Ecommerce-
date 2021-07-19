const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')
    let cadastroConcluido = `<p>Cadastro realizado.</p>`

    content.innerHTML = cadastroConcluido

})



var countDownDate = new Date("November, 26 2021 12:00:00").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();

  
  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("dday").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dday").innerHTML = "CHEGOU A BLACK FRIDAY";
  }
}, 1000);
