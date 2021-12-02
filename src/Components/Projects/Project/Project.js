
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Projects.scss"
import { Link } from "react-router-dom";

const Project = () => {
    const {projectId} = useParams();
    const [project, setProject] = useState({})

    useEffect(()=>{
        fetch(`https://enigmatic-beyond-94168.herokuapp.com/projects/${projectId}`)
        .then(res => res.json())
        .then(data => setProject(data))
    }, [])

    return (
        <div className="project">
            <div className="container">
            <div className="linkContainer">
                <Link to="/intro">Home</Link>
            </div>
            
            
            <div className="imageContainer">
                <div>
                <img src={project?.img1} alt="" />
                </div>
                <div>
                <img src={project?.img2} alt="" />
                </div>
                <div>
                <img src={project?.img3} alt="" />
                </div>
            </div>
            </div>
            <div className="detail">
            <h2>Project Name: {project?.name}</h2>
            <h4>Material: {project?.material}</h4>
            <h4>LiveSite Link: {project?.liveLink}</h4>
            <h4>GitClient: {project?.gitClient}</h4>
            <h4>GitServer: {project?.gitServer}</h4>
            <p>Description: {project?.description}</p>
            </div>
            
        </div>
    );
};

export default Project;