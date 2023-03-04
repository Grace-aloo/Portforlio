import React from "react";

function Modal({modal,toggleModal,handleChange,handleUpdateSkill,skillData,skill}){

    const handleSave = (e) => {
        e.preventDefault()
        handleUpdateSkill(skill.id);
        toggleModal();
      };
   return(
    <div>
          {modal &&(
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <form>
                        <input
                        type="text"
                        id="name"
                        placeholder="Skill Name"
                        onChange={handleChange}
                        value={skillData.name}
                        required
                        />
                         <input
                        type="text"
                        id="tools"
                        placeholder="tool"
                        onChange={handleChange}
                        value={skillData.tools}
                        required
                        />
                        <button className="close-modal" onClick={toggleModal}>Close</button>
                        <button id="save-btn" onClick={handleSave}>Save</button>
                    </form>
                    
                </div>
            </div>
            )}
    </div>
   )
}

export default Modal