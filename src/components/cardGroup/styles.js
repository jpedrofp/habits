import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    display: flex;
    margin: 0 10px 10px 0;
    padding: 10px;
    padding-bottom: 50px;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #FFB703;
    position: relative;

    h2{
        font-size: 20px;
        font-weight: 700;
        color: black;
        margin-bottom: 10px;
    }
    div{
        width: 100%;
    }
    div span, div p{
        color: rgb(49, 49, 49);
    }
    div p{
        margin-bottom: 10px;
    }
    button{
        padding: 5px 15px;
        border-radius: 5px;
        border: 1px solid #126782;
        background-color: #126782;
        cursor: pointer;
        font-weight: 600;
        font-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    button.button--unsub{
        background-color: red;
        border: 1px solid red;
    }

    @media (min-width: 400px){
        width: 350px;
    }
`;