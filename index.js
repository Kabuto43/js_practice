let activeTabId = 'goods'

const initialTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`)

initialTab.classList.add('active')

const tabs = document.querySelectorAll('button.tab')

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i]

    tab.addEventListener('click', clickHandler)
}

function clickHandler(event) {
    const activeTab = document.querySelector(`button[data-tab-id="${activeTabId}"]`)
    
    activeTab.classList.remove('active')
    event.target.classList.add('active')

    activeTabId = event.target.dataset.tabId
}