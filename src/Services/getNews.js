const BASE_URL = 'https://pixabay.com/api'
const API_KEY = '35656259-7e2fced7102c9b310ac9ede3a'


export const getImages = (query, page) => {
return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
.then(response => {if (response.ok) return response.json()})
}

