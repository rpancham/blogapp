

import React, { useEffect, useState } from 'react';
import { ActionGroup, Button, Form, FormGroup, TextInput } from '@patternfly/react-core';
import { Grid, GridItem } from '@patternfly/react-core';
import axios from "axios";

export function PostBlog({ onPost }) {

    const [formState, setFormState] = useState({ title: "", name: "" });

    function titlechanged(value) {
        setFormState({ ...formState, title: value })
    }

    function contentchanged(value) {
        setFormState({ ...formState, name: value })
    }

    function submitForm() {
        axios.post('http://localhost:8080/Blogs/blog', formState).then(function (response) {
            onPost(true);

        }).catch(function (error) {
            // handle error
            console.log(error);
        })
            .then(function () {
                // always executed
            });
    }

    return (
        <div className="App">
            <Grid>
                <GridItem span={8}> <h1>Post Blog</h1>
                    <Form>
                        <FormGroup
                            label="title"
                            type="text"
                            // helperText={helperText}
                            fieldId="title"
                        >
                            <TextInput
                                // value={value}
                                id="title"
                                onChange={titlechanged}
                            />
                        </FormGroup>
                        <FormGroup
                            label="Name"
                            type="text"
                            // helperText={helperText}
                            fieldId="Name"
                        >
                            <TextInput
                                // value={value}
                                id="Name"
                                onChange={contentchanged}
                            // onChange={this.handleTextInputChange}
                            />
                        </FormGroup>
                        <FormGroup
                            label="content"
                            type="text"
                            // helperText={helperText}
                            fieldId="content"
                        >
                            <TextInput
                                // value={value}
                                id="content"
                                onChange={contentchanged}
                            />


                            <ActionGroup>
                                <Button variant="primary" onClick={submitForm}>Submit</Button>
                            </ActionGroup>
                        </FormGroup>
                    </Form></GridItem>
            </Grid>

        </div>
    );
}