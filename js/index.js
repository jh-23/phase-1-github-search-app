// Write your solution here!  

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('#github-form')
    form.addEventListener('submit', searchName)

    function searchName(event) {
        event.preventDefault();
        const searchValue = document.querySelector('#search')
        console.log(searchValue.value)
        fetch(`https://api.github.com/search/users?q=${searchValue.value}`)
            .then(response => response.json())
            .then(data => data.items.forEach(item => {
                console.log(item)
                const li = document.createElement('li')
                li.textContent = item.login
                const ul = document.querySelector('#user-list')
                const img = document.createElement('img')
                img.src = item.avatar_url
                const a = document.createElement('a')
                a.textContent = item.url
                a.href = item.url
                ul.append(li, img, a)
                li.addEventListener('click', renderUserRepos)
            }))
        }

    function renderUserRepos(event) {
        event.preventDefault()
        console.log(event.target)
        const clickedUser = event.target.textContent
        fetch(`https://api.github.com/users/${clickedUser}/repos`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.forEach(element => {
                    const p = document.createElement('p')
                    p.textContent = element.name
                    const ul = document.querySelector('#repos-list')
                    ul.append(p)
                    const li = document.createElement('li')
                    li.textContent = element.description
                    ul.append(li)
                }) 
                
            })
        }


})
















// DOM Selectors






// Render Functions 


// callback functions 





























