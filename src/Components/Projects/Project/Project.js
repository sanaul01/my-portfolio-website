
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Project.css"
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
        <div>
            <div>
                <Link to="/intro">Home</Link>
            </div>
            
            <h2>Project: {projectId}</h2>
            <h2>name {project?.name}</h2>
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
    );
};

export default Project;