import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { useState, useEffect } from "react";

import { Container, Button } from 'react-bootstrap';

import { Editor } from 'react-draft-wysiwyg';
import {EditorState} from "draft-js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Constants from '../constants';


const ClassPage = ({obj, className}) => {
  const [edit, setEdit] = useState(false);
  const [classContent, setclassContent] = useState(
    EditorState.createEmpty()
  );
  const [classEntries, setClassEntries] = useState([]);
  const user = obj.user;    

  useEffect(() => {
    const dbRef = firebase
      .database()
      .ref(`${className}/2020`).orderByKey();
    const list = [];     
    dbRef.once("value", snapshot => {
        snapshot.forEach(childSnapshot => {
          list.push({ date: childSnapshot.key,
          content: childSnapshot.val().content })
        });
        // console.log(classEntries);
    });
    setClassEntries(list);
    return () => {
      dbRef.off();
    };
  }, [className]);
  
  return (
    <Container>
      {
        console.log(classEntries)
        // classEntries.map(entry => (
        //   <p>{entry.date}</p>
        // ))
      }
      <Container>
        {
          user ? (user.email == "sakks10@gmail.com" ? 
          <Button variant="outline-primary" style={{float: "right"}}
          onClick={e => {
              e.preventDefault();
              setEdit(true);
          }}>&#9998;</Button> 
          //  <Button variant="outline-primary"
          //   onClick={e => {}}>+</Button> 
          : undefined) : undefined
        }
        
      </Container>
      <Container style={{display: "flex"}}>
      { edit ? <Editor
        editorState={EditorState.createEmpty()}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={e => {}}
      /> : undefined
      }
      </Container>
    </Container>
    
  )
}

export default ClassPage;