import { useContext } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import { Context } from "../../main";
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Priyanshi.</div>
<div>
  <Link to={''} target='github'><FaGithub></FaGithub></Link>
  <Link to={''} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'www.linkedin.com/in/priyanshi-yadav-7082372a5'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={''} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer