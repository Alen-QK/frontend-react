import React, {useState} from "react";
import axios from "axios";
import {FormControl, Container, TextField, Button} from "@mui/material";
import {useDispatch} from "react-redux";

const TextInput = () => {
    let [txt, setTxt] = useState('');
    let dispatch = useDispatch();
    let PORT = process.env.REACT_APP_PORT;

    let handleChange = (event) => {
        setTxt(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setTxt('');

        let data = {
            text: txt
        }

        axios.post(`http://localhost:${PORT}/api.text`, data)
            .then((response) => {
                if (response.status !== 200) {
                    console.log('Error');
                } else {
                    const action = {
                        type: 'AI_TEXT',
                        payload: response.data
                    };

                    console.log(response.data)

                    dispatch(action);
                }
            })
    }

    return (
        <Container maxWidth={"sm"}>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField label={"Tell something to OpenAI~"} required={true} value={txt}
                               onChange={handleChange}></TextField>
                    <Button variant={"contained"} color={"primary"} type={"submit"} style={{
                        marginTop: 10
                    }}>Let's Go</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TextInput