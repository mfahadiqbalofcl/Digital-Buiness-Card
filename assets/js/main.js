//Selector
function $(selector) {
  return document.querySelector(selector)
}

//Elements
const card = $('#card'),
  toggle = $('#toggle'),
  button = $('#input')

//Toggle
button.addEventListener('click', () => {
  card.classList.toggle('dark')
  toggle.classList.toggle('dark')
})

let preLoader = document.getElementById('preloader')

window.onload = function () {
  setTimeout(function () {
    preLoader.style.display = 'none'
  }, 3000)
}

console.log(preLoader)

document.addEventListener(
  'keydown',
  function () {
    if (event.keyCode == 123) {
      alert('This function has been disabled to view the code!')
      return false
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert('This function has been disabled to view the code!')
      return false
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert('This function has been disabled to view the code!')
      return false
    }
  },
  false,
)

if (document.addEventListener) {
  document.addEventListener(
    'contextmenu',
    function (e) {
      alert('This function has been disabled to view the code!')
      e.preventDefault()
    },
    false,
  )
} else {
  document.attachEvent('oncontextmenu', function () {
    alert('This function has been disabled to view the code!')
    window.event.returnValue = false
  })
}

document.addEventListener('contextmenu', (event) => event.preventDefault())
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false
  }
}

// requires jquery - add this to the head of your html document

jQuery(document).ready(function ($) {
  $(window).load(function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove()
    })
  })
})
