import { cardElement } from '../card/card'
import './gallery.css'

export const galleryList = () => {
  return `
    <div>
      <ul class="gallery-list"></ul>
    </div>
  `
}

const printItems = (items) => {
  const gallery = document.querySelector('.gallery-list')
  gallery.innerHTML = ''
  for (const item of items) {
    gallery.innerHTML += cardElement(item)
  }
}

import { searchPhotos } from '../data/card-info'

const printTemplate = async () => {
  // document.querySelector('.galleryList').innerHTML = printItems()
  const images = await searchPhotos('moon')
  printItems(images.response.results)
}

printTemplate()
