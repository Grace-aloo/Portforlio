import React,{useState} from "react";

function ModalTwo({modalTwo,handleAddSkill,skillData,toggleModalTwo}){
    const [stateData,setState]= useState(skillData)

    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });
    }
    const handleSave = (e) => {
        e.preventDefault()
        handleAddSkill(stateData);
        toggleModalTwo();
      };

    return(
        <div>
             {modalTwo?(
            <div className="modal">
                <div className="overlay" onClick={toggleModalTwo}></div>
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
                        type="text"
                        id="tools"
                        placeholder="tool"
                        onChange={handleChange}
                        value={stateData.tools}
                        required
                        />
                        </center>
                        <button className="close-modal" onClick={toggleModalTwo}>Close</button>
                        <center><button id="save-btn" type="button" onClick={handleSave}>Add</button></center>
                    </form>
                    
                </div>
            </div>
            ):(null)}
        </div>
    )

}

export default ModalTwo