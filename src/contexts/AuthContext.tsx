import { createContext, FunctionComponent, ReactNode, useContext, useState  } from 'react';


const AuthContext = createContext({});

type Props = {
    children: ReactNode;
}

const useAuth = () => {
    return useContext(AuthContext)
}

const { Provider } = AuthContext;

const AuthContextProvider: FunctionComponent<Props> = ({children}) => {

    const [authUser, setAuthUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const values = {
        authUser,
        setAuthUser,
        isLogged,
        setIsLogged
    }
       
    return (
        <Provider value= {values}>
            {children}
        </Provider>
    );
};

export { AuthContext, AuthContextProvider };