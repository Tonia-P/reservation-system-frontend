import { createContext, useMemo, FunctionComponent, ReactNode, useContext, useState  } from 'react';

export type UserData = {
    _id: string;
    email: string;
    fname: string;
    lname: string;
    password: string;
    company: string;
}
interface AuthContextData {
    authUser: UserData | null;
    setAuthUser: (authUser: UserData | null) => void;
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
}

const AuthContext = createContext<AuthContextData>({
    authUser: null,
    isLogged: false,
    setAuthUser: () => {},
    setIsLogged: () => {},});

type Props = {
    children: ReactNode;
}

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthContextProvider: FunctionComponent<Props> = ({children}) => {

    const [authUser, setAuthUser] = useState<UserData | null>(null);
    const [isLogged, setIsLogged] = useState<boolean>(false);



    return (
        <AuthContext.Provider value= {{authUser, setAuthUser, isLogged, setIsLogged}}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider, useAuth };