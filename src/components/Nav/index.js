import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";

function Nav({toggleModal}) {
    return (

    <>
        <nav>
           <div className="icon-box">
            <a href='github.com/MLLynch2K'><h3 style={{fontSize: "20px", opacity: "80%"}}><AiFillGithub/></h3></a>
            <a href='https://www.linkedin.com/in/michele-lee-lynch-a03877145/'><h3 style={{fontSize: "20px", opacity: "80%"}}><AiFillLinkedin/></h3></a>
            <h3 className = "doc-icon"style={{fontSize: "20px", opacity: "80%"}} onClick={toggleModal}><GrDocumentText/></h3>
            
          </div>
          <ul>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#about'>About Me</a> </li>
            <li><a href="#contact-form">Contact Me</a></li>
          </ul>
        </nav>
    </>
    );
  }

export default Nav;




