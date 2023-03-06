import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash,faAdd } from "@fortawesome/free-solid-svg-icons";
import './skills.css'
import Modal from "./modal";
import ModalTwo from "./modalTwo";

function Skills({userId,setUserId}){
    const [skills,setSkills]=useState([])
    const [modal,setModal]=useState(false)
    const [modalTwo,setModalTwo] = useState(false)
    const [selectedSkillId,setSelectedSkillId]=useState(null)
    const [skillData,setSkillData]=useState({
        name:"",
        tools:"",
        user_id: userId
    })
    console.log(userId)

    useEffect(()=>{
        fetch(`https://grace-portfolio-app.onrender.com/skills/${userId}`)
        .then(res =>res.json())
        .then(data =>setSkills(data.data))
    },[userId])
   
    function toggleModalTwo(){
        setModalTwo(!modalTwo)
    }

    const toggleModal = (skill) => {
        setSkillData({...skill, id:skill.id})
        setSelectedSkillId(skill.id)
        setModal(!modal);
      };

    function handleChange(e) {
        setSkillData({
          ...skillData,
          [e.target.name]: e.target.value
        });
      }
    
    function handleUpdateSkill(id,newData) {
      
      console.log(JSON.stringify({
        name: newData.name,
        tools: newData.tools,
        user_id: userId
      }))

        fetch(`https://grace-portfolio-app.onrender.com/skills/update/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: newData.name,
            tools: newData.tools
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update skill,are you logged in');
          }
          // handle successful response
          setSkills(skills.map(skill => { // update skills list with updated skill
            if (skill.id === selectedSkillId) {
              return {
                ...skill,
                name: newData.name,
                tools: newData.tools,
                user_id: userId
              }
            } else {
              return skill;
            }
          }));
          setSelectedSkillId(null)
        })
        .catch(error => {
          console.error(error);
          // handle error
        })
    }
    function handleDeleteSkill(id) {
        fetch(`https://grace-portfolio-app.onrender.com/skill/destroy/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete skill,are you logged in?');
          }
          // handle successful response
          setSkills(skills.filter(skill => skill.id !== id));
        })
        .catch(error => {
          console.error(error);
          // handle error
        })
    } 
    const MAX_SKILLS = 10
    function handleAddSkill(newData) {
      if (skills.length >= MAX_SKILLS) {
        alert('Maximum number of skills exceeded');
        return;
      }
        //e.preventDefault();
        console.log(JSON.stringify({
          name: newData.name,
          tools: newData.tools,
          user_id: userId
        }));
        fetch(`https://grace-portfolio-app.onrender.com/skill/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: newData.name,
            tools: newData.tools,
            user_id: userId
          })
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add skill,are you logged in?");
            }
            return response.json();
          })
          .then((data) => {
            fetch(`https://grace-portfolio-app.onrender.com/skills/${userId}`)
            .then(res => res.json())
            .then(data => setSkills(data.data));
            // setSkills([...skills, data]);
            toggleModalTwo()
          })
          .catch((error) => {
            alert(error);
            // handle error
          })
        }
    return(
        <div className="contained">
            <center><h1 id="skills-header">Skills</h1></center>
            <p>These are the skills I have gained so far.</p>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id} className="Skill-list">{skill.name}
                     <div>
                     {modal?(<Modal
                      modal={modal}
                      skillData={skillData}
                      handleUpdateSkill={handleUpdateSkill}
                      toggleModal={toggleModal}
                      handleChange={handleChange}
                      skill={skill}/>):null}
                       <button onClick={()=>toggleModal(skill)} id="edit"><FontAwesomeIcon icon={faEdit}>Edit</FontAwesomeIcon></button>
                       <button onClick={()=>handleDeleteSkill(skill.id)} id="delete"><FontAwesomeIcon icon={faTrash}>Delete</FontAwesomeIcon></button>
                    </div>
                    </li>
                ))}
            </ul>
            <center><button onClick={()=>toggleModalTwo()} id="add"><FontAwesomeIcon icon={faAdd}>Add</FontAwesomeIcon>Add Skill</button></center>
            <center><h1 id="tool-header">Tools</h1></center>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id} className="Skill-list">{skill.tools}</li>  
                ))}
            </ul>
            {modalTwo?(<ModalTwo
            modalTwo={modalTwo}
            skillData={skillData}
            handleAddSkill={handleAddSkill}
            toggleModalTwo={toggleModalTwo}
            handleChange={handleChange}/>):(null)}
        </div>
        
    )
}

export default Skills