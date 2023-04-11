import React,{useEffect,useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash,faAdd } from "@fortawesome/free-solid-svg-icons";
import './project.css'
import ModalFour from "./modalProjectTwo";
import ModalThree from "./modalProject";
import { getToken } from "./utils/auth";

function Project({userId}){
    const [projects,setProjects]=useState([])
    const [modal,setModal]=useState(false)
    const [modalTwo,setModalTwo]=useState(false)
    const [selectedProjectId,setSelectedProjectId]=useState(null)
    const [projectData,setProjectData]=useState({
        name: "",
        image_src: "",
        description:"",
        site_link: "",
        git_link: "",
        user_id: userId
    })
    const token = getToken()
    useEffect(()=>{
        fetch(`https://grace-portfolio-app.onrender.com/projects/user`,{
          headers: {
            // "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        })
        .then(res =>res.json())
        .then(data =>setProjects(data.data))
    },[token])
    
    
    function toggleModalTwo(){
        setModalTwo(!modalTwo)
    }

    const toggleModal = (project) => {
        setProjectData({...project, id:project.id})
        setSelectedProjectId(project.id)
        setModal(!modal);
      };

    function handleChange(e) {
        setProjectData({
          ...projectData,
          [e.target.name]: e.target.value
        });
      }

      function handleUpdateProject(id,newData) {
      
        console.log(JSON.stringify({
          name: newData.name,
          image_src: newData.image_src,
          description: newData.description,
          site_link: newData.site_link,
          git_link: newData.git_link,
          user_id: userId
        }))
  
          fetch(`https://grace-portfolio-app.onrender.com/projects/update/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              name: newData.name,
              image_src: newData.image_src,
              description: newData.description,
              site_link: newData.site_link,
              git_link: newData.git_link,
              user_id: userId
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to update project, are you logged in?');
            }
            // handle successful response
            setProjects(projects.map(project => { // update skills list with updated skill
              if (project.id === selectedProjectId) {
                return {
                  ...project,
                  name: newData.name,
                  image_src: newData.image_src,
                  description: newData.description,
                  site_link: newData.site_link,
                  git_link: newData.git_link,
                  user_id: userId
                }
              } else {
                return project;
              }
            }));
            setSelectedProjectId(null)
          })
          .catch(error => {
            alert(error);
            // handle error
          })
      }
      function handleDeleteProject(id) {
        fetch(`https://grace-portfolio-app.onrender.com/project/destroy/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete project, are you logged in?');
          }
          // handle successful response
          setProjects(projects.filter(project => project.id !== id));
        })
        .catch(error => {
          alert(error);
          // handle error
        })
    } 
    function handleAddProject(newData) {
        //e.preventDefault();
        console.log(JSON.stringify({
          name: newData.name,
          image_src: newData.image_src,
          description: newData.description,
          site_link: newData.site_link,
          git_link: newData.git_link,
          user_id: userId
        }));
        fetch(`https://grace-portfolio-app.onrender.com/project/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`

          },
          body: JSON.stringify({
            name: newData.name,
            image_src: newData.image_src,
            description: newData.description,
            site_link: newData.site_link,
            git_link: newData.git_link,
            user_id: userId
          })
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add project, are you logged in");
            }
            return response.json();
          })
          .then((data) => {
            fetch(`https://grace-portfolio-app.onrender.com/projects/${userId}`)
            .then(res => res.json())
            .then(data => setProjects(data.data));
            toggleModalTwo()
          })
          .catch((error) => {
            alert(error);
            // handle error
          })
        }

    return(
        <div className="contained">
            <center id="project-header"><h1>Projects</h1></center>
            <button onClick={()=>toggleModalTwo()} id="add"><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>Add</button>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {projects.map(project=>
                    <div key={project.id} className="col">
                        <div className="card">
                            {project.image_src &&
                        <img src={project.image_src} className="card-img-top" alt="project"/>
                            }
                        <div className="card-body">
                        <h4 className="card-title">{project.name}</h4>
                        <p className="card-text">{project.description}</p>
                        </div>
                        <div className="card-img-overlay">
                            <center>
                            {project.site_link &&
                        <a href={project.site_link} className="card-link">Site</a>
                            }
                            {project.git_link &&
                        <a href={project.git_link} className="card-link"> Github</a>
                            }
                            </center>
                        </div>
                        {modal?(<ModalThree
                      modal={modal}
                      projectData={projectData}
                      handleUpdateProject={handleUpdateProject}
                      toggleModal={toggleModal}
                      handleChange={handleChange}
                      project={project}/>):null}
            
                    </div>
                    <div>
                      <button onClick={()=>toggleModal(project)} id="editable"><FontAwesomeIcon icon={faEdit} />Edit</button>
                      <button onClick={()=>handleDeleteProject(project.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>Delete</button>
                    </div>
                    </div>)}
            </div>
            {modalTwo?(<ModalFour
            modalTwo={modalTwo}
            projectData={projectData}
            handleAddProject={handleAddProject}
            toggleModalTwo={toggleModalTwo}
            handleChange={handleChange}/>):(null)}
        </div>
    )

}

export default Project