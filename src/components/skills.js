import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash,faAdd } from "@fortawesome/free-solid-svg-icons";
import './skills.css'
import Modal from "./modal";
import ModalTwo from "./modalTwo";

function Skills(){
    const [skills,setSkills]=useState([])
    const [modal,setModal]=useState(false)
    const [modalTwo,setModalTwo] = useState(false)
    const [skillData,setSkillData]=useState({
        name:"",
        tools:"",
        id: null
    })

    useEffect(()=>{
        fetch(`http://localhost:9292/skills`)
        .then(res =>res.json())
        .then(data =>setSkills(data.data))
    },[])

    function toggleModalTwo(){
        setModalTwo(!modalTwo)
    }

    const toggleModal = (skill) => {
        setSkillData({...skill,id:skill.id})
        setModal(!modal);
      };

    function handleChange(e) {
        setSkillData({
          ...skillData,
          [e.target.name]: e.target.value
        });
      }
    
    function handleUpdateSkill(e) {
        fetch(`http://localhost:9292/skills/update/${skillData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: skillData.name,
            tools: skillData.tools
          })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update skill');
          }
          // handle successful response
          setSkills(skills.map(skill => { // update skills list with updated skill
            if (skill.id === skillData.id) {
              return {
                ...skill,
                name: skillData.name,
                tools: skillData.tools
              }
            } else {
              return skill;
            }
          }));
          toggleModal(); // close modal
        })
        .catch(error => {
          console.error(error);
          // handle error
        })
    }
    function handleDeleteSkill(id) {
        fetch(`http://localhost:9292/skill/destroy/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete skill');
          }
          // handle successful response
          setSkills(skills.filter(skill => skill.id !== id));
        })
        .catch(error => {
          console.error(error);
          // handle error
        })
    } function handleAddSkill(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/skill/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: skillData.name,
            tools: skillData.tools
          })
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add skill");
            }
            return response.json();
          })
          .then((data) => {
            setSkills([...skills, data]);
            // setShowModal(false);
          })
          .catch((error) => {
            console.error(error);
            // handle error
          })
        }
    return(
        <div>
            <h1 id="skills-header">Skills</h1>
            <p>These are the skills I have gained so far.</p>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.name}
                     <div>
                       <button onClick={toggleModal} id="edit"><FontAwesomeIcon icon={faEdit}>Edit</FontAwesomeIcon></button>
                       <button onClick={()=>handleDeleteSkill(skill.id)}><FontAwesomeIcon icon={faTrash}>Delete</FontAwesomeIcon></button>
                    </div>
                    </li>
                ))}
            </ul>
            <button onClick={()=>toggleModalTwo()} id="add"><FontAwesomeIcon icon={faAdd}>Add</FontAwesomeIcon></button>
            <h1 id="tool-header">Tools</h1>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.tools}</li>  
                ))}
            </ul>
            {modal?(<Modal
            modal={modal}
            skillData={skillData}
            handleUpdateSkill={handleUpdateSkill}
            toggleModal={toggleModal}
            handleChange={handleChange}/>):null}
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