import styled from "styled-components"

const HeaderContainer = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    section{
        display: flex;
        flex-direction: column;
        min-width: 50%;
    }
    label{
        width: 100%;
    }

    img{
        height: 260px;
        width: 260px; margin: 0 1rem;
        border-radius: 25px;
        box-shadow: 2px 0 10px black;
        /* display: none; */
    }
    input{
        width: 100%;
        height: 2.3rem;
        border-radius: 10px;
        border: none;
        background: #ddd;
        padding: 0 1rem;

    }
    .pagamento{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 13rem;
        &:hover{cursor: pointer;}
        input{
            width: min-content;
        }
    }
    
`

export default HeaderContainer