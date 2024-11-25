import '../assets/css/compo.css';
import {useState} from 'react';
import Profile from './Profile';

export default function StudentTable(props){
    const[stu,setStudent] = useState(props.students[0]);
    return(
        <div className="outerDiv">
            <div className="leftDiv">
                <table border="1">
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Course</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.students.map( (st)=>
                                <tr>
                                    <td>{st.firstName}</td>
                                    <td>{st.lastName}</td>
                                    <td>{st.course}</td>
                                    <td>{st.address.country}</td>
                                    <td><button id="st.studentId" onClick={()=>{setStudent(st)}}>View</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="rightDiv">
                <Profile stu={stu}/>
            </div>
        </div>
    );
}