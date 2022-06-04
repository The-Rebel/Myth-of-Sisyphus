import * as S from "./styles"

interface ActiveButtonPropsType {
    children: string
}

const ActiveButton = ({children}:ActiveButtonPropsType) => {
    return <S.Button>{children}</S.Button>
}

export default ActiveButton