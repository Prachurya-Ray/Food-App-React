import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: 'Prachurya Ray',
        mailId:'p@gmail.com'
    }
});

UserContext.displayName = "UserContext";

export default UserContext;