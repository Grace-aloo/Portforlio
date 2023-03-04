import React from "react";

function ModalTwo({modalTwo,handleAddSkill,handleChange,skillData,toggleModalTwo}){
    return(
        <div>
             {modalTwo?(
            <div className="modal">
                <div className="overlay" onClick={()=>toggleModalTwo()}></div>
                <div className="modal-content">
                    <form>
                    <center>
                        <input
                        type="text"
                        id="names"
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
                        </center>
                        <button className="close-modal" onClick={toggleModalTwo}>Close</button>
                        <center><button id="save-btn" onClick={handleAddSkill}>Add</button></center>
                    </form>
                    
                </div>
            </div>
            ):(null)}
        </div>
    )

}

export default ModalTwo