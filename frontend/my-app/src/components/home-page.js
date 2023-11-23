import React, { useEffect, useState, useContext } from "react";
import "./home-page.css";
import axios from "axios";
import Navbar from "./navbar";
import leaf  from "/Users/margothuet/Documents/Dev/ML Projects/Ampelos/frontend/my-app/src/images/leaf.png";
import Popup from "./popup";
import { makeStyles } from '@mui/styles';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from "@mui/material";
//import { DropzoneArea } from 'material-ui-dropzone';
import { common } from '@mui/material/colors';
import Clear from '@mui/material/Icon';


const PredictImg = () => {
  //const [preview, setPreview] = useState()
  const [selectedFile, setSelectedFile] = useState(null); //Fonction qui doit se connecter à la prédiction
  //const [image, setImage] = useState(false);
  const [data, setData] = useState();
  const [progress, setProgress] = useState({started: false, pc:0 });
  const [msg, setMsg] = useState(null);
  //let confidence = 0;

  const sendFile = async () => {
    if (!selectedFile) {
      setMsg("Sélectionnez une image");
      return;
    }

      let formData = new FormData()
      formData.append("file", selectedFile)

      setMsg("Chargement..");
      setProgress(prevState => {
        return {...prevState, started: true}
      })

      axios.post(process.env.REACT_APP_API_URL, formData, {
        onUploadProgress: (progressEvent) => { setProgress(prevState => {
          return {...prevState, pc:progressEvent.progress*100}
        })}
      })
      .then(res => {
        setMsg("Chargement terminé");
        console.log(res.data);
      })
      .catch(err => {
        setMsg("Erreur de chargement");
        console.log(err);
      })

     // if (res.status === 200) {
       // setData(res.data);
     // } console.log("formData");

    setProgress(false);
    console.log("setisloading")

    const clearData = () => {
      setData(null);
     // setImage(false);
      setSelectedFile(null);
      setProgress(false);
    } 
  
    }

 
//  useEffect(() =>{
  //  if (!selectedFile) {
    //  setPreview(undefined);
      //return;
    //}
    //const objectUrl = URL.createObjectURL(selectedFile);
    //setPreview(objectUrl);
  //}, [selectedFile]);

  //useEffect(() => {
    //if (!preview) {
      //return;
    //}
    //setIsLoading(true);
    //sendFile();
  //}, [preview]);
                                
 // const onSelectedFile = (files) => {
   // if (!files || files.length === 0) {
     // setSelectedFile(undefined);
     // setImage(false);
     // setData(undefined);
      //return;
  //} else {
  //setSelectedFile(files[0]);
  //setData(undefined);
  //setImage(true);
   // }
  //};

 // if (data) {
   //confidence = (parseFloat(data.confidence) * 100).toFixed(2); // Affichage du taux de confiance de la prédiction en %.
  //return Popup;
 // }


 
    //const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="text-container">
              <h1 className="title">Bienvenue</h1>
              <p className="presentation">Vous pouvez ajouter une image ou un fichier pour la partager.</p>
              <input onChange={ (e) => { setSelectedFile(e.target.files[0] )}} type="file" name="file-input" accept="image/png, image/jpeg"></input>
              <button className="prediction-btn" onClick={ sendFile } onEnded={Popup}>Prédire</button>

              { progress.started && <progress max="100" value={progress.pc}></progress> }
              { msg && <span>{msg}</span> }
           
            </div>
        </>
    )
  };


export default PredictImg;