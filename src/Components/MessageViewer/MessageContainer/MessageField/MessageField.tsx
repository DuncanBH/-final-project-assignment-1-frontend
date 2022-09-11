import React from "react";
import {Button, Form} from "react-bootstrap";

export type MessageFieldProps = {
    user: string;
}

/***
 * Display message contents and author
 * @param props
 */
const MessageField : React.FC<MessageFieldProps> = props => {
    return (
        <div>
            <Form>
                <input type={"text"}/>
                <input type="file" name="uploadedFile"/>
                <Button>Submit</Button>
            </Form>
        </div>
    );
}

export default MessageField;
