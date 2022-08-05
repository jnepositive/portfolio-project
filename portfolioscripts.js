//clickable text
let aboutClick = document.getElementById('aboutclick')
let catalogClick = document.getElementById('catalogclick')
let flyersClick = document.getElementById('flyersclick')
let contactClick = document.getElementById('contactclick')

//content to display
let about = document.getElementById('aboutme')
let catalog = document.getElementById('catalog')
let flyers = document.getElementById('flyers')
let contact = document.getElementById('contact')

const revealAbout = () => {
    if (about.style.display === 'block'){
        about.style.display = 'none'
    } else {
        about.style.display = 'block'
    }
}

const revealCatalog = () => {
    if (catalog.style.display === 'block'){
        catalog.style.display = 'none'
    } else {
        catalog.style.display = 'block'
    }
}

const revealFlyers = () => {
    if (flyers.style.display === 'block'){
        flyers.style.display = 'none'
    } else {
        flyers.style.display = 'block'
    }
}

const revealContact = () => {
    if (contact.style.display === 'block'){
        contact.style.display = 'none'
    } else {
        contact.style.display = 'block'
    }
}

aboutClick.addEventListener('click', revealAbout)

catalogClick.addEventListener('click', revealCatalog)

flyersClick.addEventListener('click', revealFlyers)

contactClick.addEventListener('click', revealContact)

