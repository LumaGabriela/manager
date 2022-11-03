import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Contrail+One&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .App, .Main{
        width: 100%;
        display: flex !important;
        flex-direction:column;
        font-family: 'Contrail One', sans-serif;
        overflow-x:hidden;
    }

`