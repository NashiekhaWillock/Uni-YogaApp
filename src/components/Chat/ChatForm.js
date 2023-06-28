import Upload from "../../svg/Upload";
import { ChatFormContainer, ChatFormInput } from "./ChatStyles";

const ChatForm = ({ handleSubmit, handleChange, handleImage, text, setText, setImg, img }) => {
    
    return (
        <ChatFormContainer onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange} placeholder="Type a message" className="dark:bg-gray-800 w-full rounded-b-[2rem] rounded-bl-none bg-[rgb(58,_58,_58)] text-white outline-none border-none p-[0px_10px] leading-[1.5]" />
            <ChatFormInput
                onChange={handleImage}
                type="file"
                multiple={false}
                id="file"
                accept="image/*"
                style={{ display: "none" }} />
            <label htmlFor="file">
                <Upload />
            </label>
            <button className="w-[20%] dark:bg-[#057381] uppercase text-xl font-bold dark:text-white bg-yellow-600 rounded-bl-[2rem] text-white" type="submit" >Send</button>
        </ChatFormContainer>
    );
};

export default ChatForm;