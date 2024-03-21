const members = [
    { name: 'Pernalonga', id: 'pernalonga' },
    { name: 'Patolino', id: 'patolino' },
    { name: 'Frajola e Piu-Piu', id: 'frajola' },
    { name: 'Coyote e Papaléguas', id: 'coyote' },
    { name: 'Ligeirinho', id: 'ligeirinho' },
    { name: 'Taz-Mania', id: 'taz' },
  ]

  
  let persoAtivo = 0
  const slide = document.getElementById('navegar')
  const menu = document.getElementById('menu')
  const memberName = document.getElementById('member__name')

  function navegarMember(persoId){
    persoAtivo = persoId

    if (persoAtivo < 0) {
      persoAtivo = members.length - 1;
    } else if (persoAtivo >= members.length) {
      persoAtivo = 0;
    }

    const member = members[persoAtivo];
    const image = document.getElementById('images')

    image.style.transform = `translateY(${-100 * persoAtivo}vh)`
    memberName.classList = member.id

    changeName(member.name)
    slide.classList.toggle('active')
  }

  function navegarPerso(direcao) {
    navegarMember(persoAtivo + direcao)
    slide.classList.toggle('active')  
  }

  menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    slide.classList.toggle('active')
  })

  function setMember(persoId){
    navegarMember(persoId)
  }

let interval = null;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomLetter() {
  const randomNumber = Math.floor(Math.random() * letters.length)
  return letters[randomNumber];
}

function changeName(newName) {
  console.log({newName});
  const name = document.getElementById("member__name");

  name.innerText = newName
  name.setAttribute('data-value', newName)

  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    let text = name.innerText.split("")

    text = text.map((_, index) => {
      const isCorrectLetter = index < iteration
      return isCorrectLetter ? newName[index] : randomLetter()
    })

    name.innerText = text.join("");
    
    if(iteration >= newName.length){ 
      clearInterval(interval);
    }
    
    iteration += 1;
  }, 60);
}

