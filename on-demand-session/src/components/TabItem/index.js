import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const displayFilteredProjects = () => {
    updateTabId(tabId)
  }
  const styleOfTab = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${styleOfTab}`}
        onClick={displayFilteredProjects}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
