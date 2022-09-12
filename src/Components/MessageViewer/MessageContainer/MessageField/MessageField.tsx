import React, {useReducer, useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";

export type MessageFieldProps = {
    user: string,
    channelId: number
    updateCallback: (update: boolean) => void;
}

//TODO: determine proper states here later
const formReducer = (state: any, event: any) => {
    return {
        ...state,
        [event.name]: event.value
    }
}
/***
 * Display message contents and author
 * @param props
 */
const MessageField: React.FC<MessageFieldProps> = props => {
    //TODO: pull this into env or similar
    const uploadUrlImg = "http://localhost:8080/api/images";
    const uploadUrlPost = "http://localhost:8080/api/posts";

    const [formData, setFormData] = useReducer(formReducer, {});
    const [file, setFile] = useState();
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setSubmitting(true);

        const bodyFormData = new FormData();
        //@ts-ignore
        bodyFormData.append('file', file);
        //@ts-ignore
        bodyFormData.append('fileName', file.name);


        const response = await fetch(uploadUrlImg, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: bodyFormData
        });

        const picID = await response.json();

        // console.log(picID);
        // console.log(Object.entries(formData)[0][1]);

        const postBody =  JSON.stringify({
            "imageId": picID,
            "channel": props.channelId,
            "caption": Object.entries(formData)[0][1]
        })

        // console.log(postBody);

        await fetch(uploadUrlPost, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: postBody
        });

        props.updateCallback(true);
    };


    const handleChange = (event: any) => {
        setFormData({
            name: event.target.name,
            value: event.target.value
        });
    }
    const handleChangeFile = (event: any) => {
        setFile(event.target.files[0])
    }


    return (
        <div className={"bg-dark p-2 rounded-top"}>
            {/*submitting &&
                <ul className={"bg-light"}>
                    Submitting: {Object.entries(formData).map(([name, value]) =>
                    // @ts-ignore
                    (<li key={name}>{name}:{value.toString()}</li>)
                )}
                </ul>
            */}
            <Form onSubmit={handleSubmit}>
                <FormControl type={"text"} name="content" onChange={handleChange} />
                <FormControl type="file" name="uploadedFile" onChange={handleChangeFile} />
                <Button type={"submit"}>Submit</Button>
            </Form>
        </div>
    );
}

export default MessageField;
