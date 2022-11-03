import styled from "styled-components"

const BodyContainer = styled.main`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    div.ficha{
        width: 90%;
        margin: 0;
        padding:1rem .5rem;
        display: flex;
        flex-direction: column;
        border-top: 1px solid gray;
    }
    .ficha.invisible {display: none}
    button {
        width: 7rem; height: 2.5rem;
        cursor: pointer;
        border-radius: 10px;
        font-size: large;
        font-weight: bolder;
        color: #22262F;
        margin: 1rem auto;
    }
    .show {
        background: #75E4B3 ;
    }
    .notshow{
        background: #EF767A;
    }
  
`

export default BodyContainer