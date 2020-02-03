const VISIT_DELAY = 10 * 1000
let position = 0
let profiles = [
    'https://www.producthunt.com/@cuireuncroco',
    'https://www.producthunt.com/@frenchcooc'
]

function visitProfile () {
    const profile = profiles[position]

    if (!profile) {
        console.log('No profile to visit')
        return
    }
    console.log(position, '- Visiting:', profile)

    chrome.tabs.create({url: profile}, function (tab) {
        position += 1
        setTimeout(function () {
            chrome.tabs.remove(tab.id)
            visitProfile()
         } , VISIT_DELAY)
    })
}

console.log('Initializing profile visitor')
visitProfile()