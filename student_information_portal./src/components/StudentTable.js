import '../assets/css/compo.css'
export default function StudentTable(props){
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.students.map( st=>
                                <tr>
                                    <td>{st.firstName}</td>
                                    <td>{st.lastName}</td>
                                    <td>{st.course}</td>
                                    <td>{st.address.country}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}