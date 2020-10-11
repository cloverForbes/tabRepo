import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form"

export default function CustomForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const uri = "http://localhost:3000/api/tabs/new"
        let formData = new FormData();
        let tab = data.tab[0];
        console.log(formData, tab);
        formData.append('tab', tab);

        axios.post(uri, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="title" placeholder="Title" ref={register({required: true})}/>

            <input name="composer" placeholder="Composer" ref={register({ required: true})}/>

            <input name="tab" type="file" ref={register({required: true})}/>
            
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit"/>
        </form>
    );
}