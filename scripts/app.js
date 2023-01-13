//Include html elements
const idElement = document.getElementById('profile-id')
const nameElement = document.getElementById('profile-name')
const emailElement = document.getElementById('profile-email')
const avatarElement = document.getElementById('profile-avatar')
const addressElement = document.getElementById('profile-address')
const companyBsElement = document.getElementById('profile-company-bs')
const companyNameElement = document.getElementById('profile-company-name')
//


//Display function
const display = (profile, index) => {
    idElement.innerText = profile.id
    nameElement.innerText = profile.name
    emailElement.innerText = profile.email
    avatarElement.src = `https://api.dicebear.com/5.x/adventurer/svg?seed=${index}`
    addressElement.innerText = `${profile.address.street}, ${profile.address.suite}, ${profile.address.city}, ${profile.address.state}, ${profile.address.zipcode}`
    companyNameElement.innerText = `${profile.company.name}, ${profile.company.catchPhrase}`
    companyBsElement.innerText = `${profile.company.bs}`
}

const fetchEmployee = async (index) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
    return await res.json()
}

const run = async () => {

    const randomIndex = Math.floor(Math.random() * 10 + 1)
    
    const profile = await fetchEmployee(randomIndex)

    display(profile, randomIndex)
}

run()
