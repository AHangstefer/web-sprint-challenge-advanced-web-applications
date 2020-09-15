import React, { useState } from "react";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

// const initialColor = {
//   color: "",
//   code: { hex: "" },
//   id
// };



const ColorList = ({ colors, updateColors }) => {

 

  const initialColor = {
    color: "",
    code: { hex: "" },
    id: ""
  };

  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);


  //const {id} = useParams();

  const editColor = color => {
    //axiosWithAuth()
      //.get(`/api/colors/${colorToEdit.id}`)
      //.then((res)=> {
        setEditing(true);
        setColorToEdit(color);
        console.log("this is the color you've selected:")
     // })
      //.catch((err)=> {
      //  console.log(`oh no!! you have an error while selecting a color:`, err)
     // })
  };

  const saveEdit = e => {
    e.preventDefault()
    axiosWithAuth()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit )
      .then((res)=> {
        //setEditing(false);
        //setColorToEdit(res.data)
        console.log("this is updating the edited in ColorList:", res.data)
      })
      .catch((err)=> {
        console.log("oh no! An error trying put update your color on colorList!:", err)
      })
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`/api/colors/${color.id}`)
    // make a delete request to delete this color
    .then((res)=> {
      console.log ("deleting this color:", res.data)
      setColorToEdit(initialColor)
    })
    .catch((err)=> {
      console.log("you're got an error trying to delete in colorlist:",err)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
