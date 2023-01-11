// get user's data
// get user's coordinates
const getCoords = async () => {
    let pos = await new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

// get user's time
const userTime = () => {
    return new Date().getHours()
}

// helper functions
// check time of day
const getMealTime = () => {
    const tod = userTime()
    return tod>20 ? 'late-night snack' : tod>16 ? 'dinner' : tod>11 ? 'lunch' : 'breakfast'
}

// build ads
// build ad 1
const buildAd1 = () => {
    const mealTime = getMealTime()
    let ad = document.querySelector('.ad1')
    let p = document.createElement('p')
    p.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    ad.append(p)
}

// build ad 2
const buildAd2 = (coordinates) => {
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let ad = document.querySelector('.ad2')
    let p = document.createElement('p')
    p.innerHTML = `It's time to try our coffee! <span><a href='${href}' target='_blank'>We're this close!</a></span>`
    ad.append(p)
}

// event listeners
// on load, build ads
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}