import React, { useRef, useState } from "react";
import '../../css/AdminForm/AdminForm.css'

const AdminForm = () => {
  const [game_name, setGameName] = useState("");
  const [game_link, setGLink] = useState("");
  const [game_desc, setDescrption] = useState("")
  let fn = document.getElementById("fi");
  const uploadImage = useRef(null);


  const UplodGame = (e) => {
    e.preventDefault();
    const fileData = new FormData();
    const file = uploadImage.current.files[0];

    fileData.append("game_name", game_name)
    fileData.append("game_link", game_link)
    fileData.append("game_desc", game_desc)
    fileData.append('file', file)

    var successValue = 0;

    console.log(fileData);
    fetch('http://localhost:8080/game/admin', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2ODg5Njk3NzUsImlhdCI6MTY4ODk1MTc3NX0.jRzNWkYvT2syEibFeFvZutblb62ZcZ6zecgSUvLJAg3tsn-S0T3i6DC-pe48dBWsL8DtvQgjylFaIdMQuu3IPg'
      },
      body: fileData
    }
    ).then((response) => {
      console.log(response.status)
    }).catch((e) => {
      console.log(e)
    })
    alert("Uploaded");
  };

  return (
    <div className="main">

      <form className="form" onSubmit={UplodGame}>
        <div className="form-title"><span>Add Games to your</span></div>
        <div className="title-2"><span>SPACE</span></div>
        <div className="input-container">
          <label htmlFor="input-game-name">Game Name</label>
          <input className="input-game-name" type="text" placeholder="Enter Game Name" required onChange={(e) => setGameName(e.target.value)} />
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
          <input className="input-game-desc" type="text-area" placeholder="Enter Game Description" required onChange={(e) => setDescrption(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="input-game-url">Game's URL</label>
          <input type="url" className="input-game-url" placeholder="Enter Game URL" required onChange={(e) => setGLink(e.target.value)} />
        </div>
        <div className="container">
          <label htmlFor="img-uplaod">Upload Image</label>
          <input ref={uploadImage} className="img-upload" type="file" accept="image/*" id="fi" required />
        </div>
        <button type="submit" className="submit">
          <span className="add-game">Add Game</span>
        </button>



      </form>

    </div>
  )
}

export default AdminForm;