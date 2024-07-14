let activeTabId = 'goods'

const initialTab = getActiveTab()

initialTab.classList.add('active')

const tabs = document.querySelectorAll('button.tab')

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]

    tab.addEventListener('click', clickHandler)
}

function clickHandler(event) {
    const activeTab = getActiveTab()
    
    activeTab.classList.remove('active')
    event.target.classList.add('active')

    activeTabId = event.target.dataset.tabId
}

function getActiveTab () {
    return document.querySelector(`button[data-tab-id="${activeTabId}"]`)
}