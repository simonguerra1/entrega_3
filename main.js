import './style.css'

import { galleryList } from './public/src/components/gallery/gallery'

const header = () => {
  return `<img src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1712866571/Mis%20imagenes/Pinterest-logo_awlvn5.png" class="logo">
  <nav>
    <a href="#">Today</a>
    <a href="#">Explorar</a>
  </nav>
  <input type="text" placeholder="Search" class="search-bar">
  <div id="user-area">
    <a href="#"><img src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1712867666/Mis%20imagenes/31278_nyydla.png" alt="Notifications" class="icon"></a>
    <a href="#"><img src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1716830025/1_yziyxp.png" alt="Profile" class="icon"></a>
  </div>`
}
document.querySelector('#app')
const headerElement = document.createElement('header')
headerElement.innerHTML = header()
app.appendChild(headerElement)

const main = document.createElement('main')
main.innerHTML = galleryList()
app.appendChild(main)
