import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setinput] = useState("");
    const [recentPrompt, setrecentPrompt] = useState("");
    const [prevPrompt, setprevPrompt] = useState([]);
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setresultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setloading(false)
        setshowresult(false)
    }

    const onSend = async (prompt) => {
        setshowresult(true);
        setloading(true);
        let response;
        if (prompt !== undefined) {
            response = await run(prompt);
            setrecentPrompt(prompt);
        } else {
            setprevPrompt((prev) => [...prev, input]);
            setrecentPrompt(input);
            response = await run(input);
        }

        if (!prevPrompt.includes(prompt)) {
            setprevPrompt((prev) => [...prev, prompt]);
        }

        let responseArry = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArry.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArry[i];
            } else {
                newResponse += "<b>" + responseArry[i] + "</b>";
            }
        }
        const anotherResponse2 = newResponse.split("*").join("</br>");
        let anotherResponse3 = anotherResponse2.split(" ");
        for (let i = 0; i < anotherResponse3.length; i++) {
            const nextData = anotherResponse3[i];
            delayPara(i, nextData + " ");
        }
        setresultData(anotherResponse2);
        setloading(false);
    };

    const contextValue = {
        input,
        setinput,
        recentPrompt,
        setrecentPrompt,
        prevPrompt,
        setprevPrompt,
        showresult,
        setshowresult,
        loading,
        setloading,
        resultData,
        setresultData,
        onSend,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};
export default ContextProvider;
