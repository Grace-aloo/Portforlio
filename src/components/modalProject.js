import React,{useState} from "react";

function ModalThree({modal,toggleModal,handleUpdateProject,projectData,project}){
    const [stateData,setState]= useState(projectData)
    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });}

    const handleSave = (e) => {
        e.preventDefault()
        handleUpdateProject(project.id,stateData);
        toggleModal(project);
      };
   return(
    <div>
          {modal &&(
            <div className="modal">
                <div id="overlay" onClick={toggleModal}></div>
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
                        placeholder="image url of the site"
                        onChange={handleChange}
                        value={stateData.image_src}
                        />
                        </center>
                        <button className="close-modal" onClick={toggleModal}>Close</button>
                        <center><button id="save-btn" onClick={handleSave}>Save</button></center>
                    </form>
                    
                </div>
            </div>
            )}
    </div>
   )
}

export default ModalThree