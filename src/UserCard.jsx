const UserCard = ({name,email,password}) => {

    return (
        // <div>
        //     <h2>John Doe</h2>
        //     <p>john.doe@example.com</p>
        // </div>

        <>
        <h2>name, {name}</h2>
        <h3>email, {email}</h3>
        <h3>password, {password}</h3>
        </>
    );
}

export default UserCard;