export default function Profile(props){
    return(
        <>
            <table>
                <tr>
                    <td rowSpan={7}>
                        <img className="profile" src={require("../assets/profilepic/"+props.st.profilePic)} alt="profile pic"/>
                    </td>
                    <td>ID: {props.st.studentId}</td>
                </tr>
                <tr>
                    <td>Full Name: {props.st.firstName+" "+lastName}</td>
                </tr>
                <tr>
                    <td>Age: {props.st.age}</td>
                </tr>
                <tr>
                    <td>Course: {props.st.course}</td>
                </tr>
                <tr>
                    <td>Address: {props.st.city+","+props.st.country}</td>
                </tr>
                <tr>
                    <td>Skills: {props.st.skills.map(sk=>sk+=", ")}</td>
                </tr>
            </table>
        </>
    );
}