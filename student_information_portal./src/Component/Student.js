import {students} from '/StudentsDb.js'

export default function Student(){
    return(
        <div className="leftDiv">
            <table>
                <tr>
                    <td>FistName</td>
                    <td>LastName</td>
                    <td>Course</td>
                    <td>Country</td>
                    <td>Profile</td>
                </tr>

                {
                    students.map(st=>{
                        <>
                            <td>{st.firstName}</td>
                            <td>{st.lastName}</td>
                            <td>{st.course}</td>
                            <td>{st.country}</td>
                        </>
                    })
                }
            </table>
        </div>
    );
}