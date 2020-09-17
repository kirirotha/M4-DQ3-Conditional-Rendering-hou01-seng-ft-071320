import React from 'react'




const MenuBar = (props) => {

  let handleClick = (e) => {
    e.persist()
    props.changeState(e.target.id)
  }

  let buttonChange = (id) => {
    if (props.currentSelection === id) {
      return "item active"
      } else {
        return "item"
      }
  }

  const renderButtons = () => {
    const idList = [['profile', 'user large icon'], ['photo', 'photo large icon'], ['cocktail', 'cocktail large icon'], ['pokemon', ' themeisle large icon']]
    let bRender = idList.map(id =>{
      return (
        <a className={buttonChange(id[0])} id={id[0]} onClick={handleClick} key ={id[0]}>
        <i className={id[1]} id={id[0]}/>
      </a>
      )
    })
    return bRender
  
  
  }

  return (
    
    <div className="ui four item menu">
    {renderButtons()}
    </div>
  )

}

export default MenuBar
