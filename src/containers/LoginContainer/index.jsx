import LoginForm from "../../components/Login"

const LoginContainer = () => {

    return (
        <div>
      <h1>User Login Page</h1>
      {!loggedInUser ? (
        <LoginForm />
      ) : (
        <>
          <UserInfo user={loggedInUser} />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
    )
}