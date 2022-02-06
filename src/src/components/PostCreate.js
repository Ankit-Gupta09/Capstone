import * as React from "react";
import {Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const phoneNumberFormat = (num) => {
     let x;
    if (typeof num !== "undefined") {
          
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(num)) {

          x= "Please enter only number.";
        }else if(num.length != 10){
          x= "Please enter valid phone number.";
        }
      }
    return x;
};
const validatePhone = [required("Phone number is required"), phoneNumberFormat];

const BodyWordLimit = (num) => {
    let x;
    if(num.length>1000)
    {
        x="You can write only 1000 characters in Description";
    }
   return x;
};
const validateBody = [required("Discription is required"), BodyWordLimit];

const TitleWordLimit = (num) => {
    let x;
    if(num.length>5)
    {
        x="You can write only 255 characters in Title";
    }
   return x;
};
const validateTitle = [required("Title is required"), TitleWordLimit];

const PostCreate = (props) => {
    
    return (
        <Create title='Create a Post' {...props}>
        <SimpleForm>
            <TextInput source="title" validate={validateTitle}/>
            <RichTextInput multiline source="body" validate={validateBody}/>
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
            <TextInput source="phone" validate={validatePhone}  />

        </SimpleForm>
    </Create>
    )
}
    
export default PostCreate