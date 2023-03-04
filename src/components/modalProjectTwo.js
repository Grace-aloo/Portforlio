import React,{useState} from "react";

function ModalFour({modalTwo,toggleModalTwo,handleAddProject,projectData}){
    const [stateData,setState]= useState(projectData)
    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });}

    const handleSave = (e) => {
        e.preventDefault()
        handleAddProject(stateData);
        toggleModalTwo();
      };
   return(
    <div>
          {modalTwo &&(
            <div className="modal">
                <div id="overlay" onClick={toggleModalTwo}></div>
                <div className="modal-content">
                    <form>
                        <center>
                        <input
                        type="text"
                        id="name"
                        placeholder="Project Name"
                        onChange={handleChange}
                        value={stateData.name}
                        required
                        />
                         <input
                        type="text"
                        id="description"
                        placeholder="Description"
                        onChange={handleChange}
                        value={stateData.description}
                        required
                        />
                          <input
                        type="text"
                        id="site_link"
                        placeholder="Link to site"
                        onChange={handleChange}
                        value={stateData.site_link}
                        required
                        />
                        <input
                        type="text"
                        id="git_link"
                        placeholder="Github link of site"
                        onChange={handleChange}
                        value={stateData.git_link}
                        />
                        <input
                        type="text"
                        id="image_src"
                        placeholder="link to image of site"
                        onChange={handleChange}
                        value={stateData.image_src}
                        />
                        </center>
                        <button className="close-modal" onClick={toggleModalTwo}>Close</button>
                        <center><button id="save-btn" onClick={handleSave}>Save</button></center>
                    </form>
                    
                </div>
            </div>
            )}
    </div>
   )
}

export default ModalFour