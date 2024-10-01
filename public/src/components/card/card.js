import './card.css'

export const cardElement = (carta) => {
  return `<li>
      <div>
        <img src="${carta.urls.small}" alt="${carta.alt_description || ''}" />
        <div class="hoover-text">${carta.description || ''}</div>
        <a href="${carta.links.html}"><img src="${
    carta.user.profile_image.small
  }" alt="${carta.user.name}"></a>
      </div>
    </li>`
}
