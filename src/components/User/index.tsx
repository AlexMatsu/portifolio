import { children, ReactNode } from "react";

interface UserProps {
    name: String;
    chidren?: ReactNode
}

const User = ({ name, children }: UserProps) => {
    return (
        <div>
            <p>Usuário: {name}</p>
            {children && <div>{children}</div>}
        </div>
    )

}

export default User;