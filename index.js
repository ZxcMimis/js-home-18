// ЗАДАЧА 1
const categoriesListElements = document.querySelectorAll('ul#categories>li')
console.log(`У списку ${categoriesListElements.length} категорії.`)

const mainList = document.querySelector('ul#categories')
categoriesListElements.forEach(cat => {
    const i = cat.querySelectorAll('li')
    console.log(`Категорія: ${cat.firstElementChild.textContent}, Кількість елементів: ${i.length}`)
})

// ЗАДАЧА 2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
const ingredientsListEl = document.querySelector('#ingredients')
ingredients.forEach(ingr => {
    const ingredientElements = document.createElement('li')
    ingredientElements.textContent = ingr
    ingredientsListElements.append(ingredientElements)
})

// ЗАДАЧА 3
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const galleryEl = document.querySelector('#gallery')

images.forEach(imgSettings => {
    const galleryItemEl = document.createElement('li')
    galleryEl.append(galleryItemEl)

    const imgElements = document.createElement('img')
    imgElements.src = imgSettings.url
    imgElements.alt = imgSettings.alt

    imgElements.classList.add('img-style')

    galleryItemEl.append(imgEl)
})

galleryEl.classList.add('gallery-position')