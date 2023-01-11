const idElement = document.getElementById('profile-id')
const nameElement = document.getElementById('profile-name')
const emailElement = document.getElementById('profile-email')
const avatarElement = document.getElementById('profile-avatar')
const addressElement = document.getElementById('profile-address')
const companyBsElement = document.getElementById('profile-company-bs')
const companyNameElement = document.getElementById('profile-company-name')


const updateProfile = (profile, avatarnumber) => {



    idElement.innerText = profile.id
    nameElement.innerText = profile.name
    emailElement.innerText = profile.email
    avatarElement.src = `https://api.dicebear.com/5.x/adventurer/svg?seed=${avatarnumber}`
    addressElement.innerText = `${profile.address.street}, ${profile.address.suite}, ${profile.address.city}, ${profile.address.zipcode}`
    companyNameElement.innerText = profile.company.name
    companyBsElement.innerText = profile.company.bs
}

const fetchEmployee = async (number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)

    return await res.json()
}

const run = async () => {

    const  random = Math.floor(Math.random() * 10 + 1)

    const profile = await fetchEmployee(random)
    updateProfile(profile, random)
}

run()

