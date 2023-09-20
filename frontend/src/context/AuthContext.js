const { createContext, useState } = require("react");


const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    console.log(user);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };