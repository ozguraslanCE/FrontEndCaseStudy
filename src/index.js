import React, {useState} from "react";
import {render} from "react-dom";
import { storage} from "./firebase";
import  "./firebase/index.css";

const PhotoLoader = () => {
  const [image, setImage]= useState(null);
  const [url, setUrl] = useState("");

  const handleChange = e => {
    
    if (e.target.files[0]){
      setImage(e.target.files[0]);
      var src = URL.createObjectURL(e.target.files[0]);
      var preview = document.getElementById("img");
      preview.src = src;
      preview.style.display = "block";
    
      var content = document.getElementById("Title").value;
      var content_desc = document.getElementById("Description").value;

      if(content !== '' && content_desc !== '' && preview.src !== null ){
        var button = document.getElementById("button");
        button.style.background= "rgb(33, 150, 83)";
      }
    }
    
    
  };
  const handleUpload = () => {
    var content = document.getElementById("Title").value;
    document.getElementById("titl").innerHTML = content;
    content = document.getElementById("Description").value;
    document.getElementById("desc").innerHTML = content;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url)
          });
      }
    )
    
    document.getElementById("Title").value = '';
    document.getElementById("Description").value ='';
    var preview = document.getElementById("img");
    preview.src = null;
    preview.style.visibility= "hidden";
    preview.style.display = "none";

    var button = document.getElementById("button");
    button.style.background= "rgb(196,196,196)";
    
  }
  return(
      <div className="index">
        <div className="input">
         <input type="text" className="Title" id="Title"  placeholder="New Title"/>
          <textarea rows="3" className="Description" id="Description" placeholder="New Description"/>
          <input type="file" className="file" onChange={handleChange}/>
          <button id="button" onClick={handleUpload} ></button> 
        </div>
        <div className="output">
          <p id="titl" className="titl"></p>
          <textarea id="desc" className="desc"></textarea>
          <img src={url} alt=" " className="img2" id="img2" />
        </div> 
        <div className="static">
          <p className="head1">New Title</p>
          <p className="head2">New Title</p>
        </div>
        <div className="bgimage"></div>
        <img  alt=" " className="img" id="img" />
        <div><img src="/images/gorsel.png" alt=" " className="addimg" id="addimg"></img></div>
      </div>
  );
};




render(<PhotoLoader/>, document.querySelector("#root"));
