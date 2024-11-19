import '../Assets/css/compo.css';
import '../Component/StudentsDb'

export default function People(){
    return(
        <div className="rightDiv">
            <div >
            <img className='profile' src={require('../Assets/profilepic/'+props.student.profilePic)} alt="Profile"/>
            </div>

            
        </div>
    );
}