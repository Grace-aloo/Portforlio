import React,{useState} from "react";

function Modal({modal,toggleModal,handleUpdateSkill,skillData,skill}){
    const [stateData,setState]= useState(skillData)
    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });}

    const handleSave = (e) => {
        e.preventDefault()
        handleUpdateSkill(skill.id,stateData);
        toggleModal(skill);
      }
      console.log(skill)

      console.log(modal)
   return(
    <div>
          {modal &&(
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <form>
                        <center>
                        <input
                        type="text"
                        id="name"
                        placeholder="Skill Name"
                        onChange={handleChange}
                        value={stateData.name}
                        required
                        />
                         <input
                        type="number"
                        id="percentage"
                        placeholder="percentage"
                        onChange={handleChange}
                        value={stateData.percentage}
                        required
                        /></center>
                        <button className="close-modal" onClick={toggleModal}>Close</button>
                        <center><button id="save-btn" onClick={handleSave}>Save</button></center>
                    </form>
                    
                </div>
            </div>
            )}
    </div>
   )
}

export default Modal