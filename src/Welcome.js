function Student(props){
    return(
        <>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <p><strong>{props.stud.sid}</strong></p>
        <p><strong>{props.stud.name}</strong></p>
        <p><strong>{props.stud.location}</strong></p>
        </>
    )
}

export default Student