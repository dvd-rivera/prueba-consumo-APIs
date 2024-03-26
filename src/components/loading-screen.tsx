import React from 'react'


const Loading_screen: React.FC = () => {
  return (
    <div id='loading-screen' className='loading-screen'>
      <img className='brand' src="src\assets\img\Rick-And-Morty-Emblema.jpg" alt=""/>
      <img src="src\assets\img\portal.png" alt="" className="portal" />
      <h2>Cargando</h2>
    </div>
  )
}

export default Loading_screen