import React from "react";
import '../../css/AdminForm/AdminForm.css'

const AdminForm = () => {
    return (
        <div className="main">

    <form className="form">
     <div className="form-title"><span>Add Games to your</span></div>
      <div className="title-2"><span>SPACE</span></div>
      <div className="input-container">
        <label htmlFor="input-game-name">Game Name</label>
        <input className="input-game-name" type="text" placeholder="Enter Game Name" required/>
        <span> </span>
      </div>

      <section className="bg-stars">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </section>

      <div className="input-container">
        <label htmlFor="input-game-desc">Game Description</label>
        <input className="input-game-desc" type="text-area" placeholder="Enter Game Description" required/>
      </div>
      <div className="input-container">
        <label htmlFor="input-game-url">Game's URL</label>
            <input type="url" className="input-game-url" placeholder="Enter Game URL" required/>
      </div>
      <div className="container">
            <label htmlFor="img-uplaod">Upload Image</label>
            <input className="img-upload" type="file" accept="image/*" required/>
      </div>
      <button type="submit" className="submit">
        <span className="add-game">Add Game</span>
      </button>

    
       
    </form>

        </div>
    )
}

export default AdminForm ;