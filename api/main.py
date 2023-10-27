from fastapi import FastAPI, File, UploadFile # Backend server
import uvicorn 
import numpy as np # Numerical Python pour convertir des matrices en images.
from io import BytesIO # Permet de stocker des données binzires en mémoire.
from PIL import Image # PIL = Python Image Library ou Pillow, sert à ouvrir, manipuler, créer et enregistrer des images.
import tensorflow as tf 

app = FastAPI() # Initialisation de l'app.

MODEL = tf.keras.models.load_model('/Users/margothuet/Documents/Dev/ML Projects/Ampelos/1') # Modèle utilisé pour prédire les images
CLASS_NAMES = ["Black Rot", "ESCA", "Healthy", "Leaf Blight"] # Labels de chaque catégorie à prédire

@app.get("/hello/") # Url
async def hello(): # Fonction de test
    return "hello ola"


def read_file_as_image(data) -> np.ndarray: #numpy N-dimensionnal array
    image = np.array(Image.open(BytesIO(data))) 
    return image

@app.post("/predict") # Url
async def predict(file: UploadFile = File(...)): # Fonction asynchrone qui prend en paramètre une image à prédire.

    image = read_file_as_image(await file.read()) # Lecture de l'image
    img_batch = np.expand_dims(image, 0) 
    
    predictions = MODEL.predict(img_batch) # On demande au modèle de prédire l'image qui a été passée en paramètre de la fonction predict

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])] # On demande à CLASS_NAMES d'associer le nom de la catégorie qui correspond à l'image à prédire
    confidence = np.max(predictions[0]) # On affiche l'indice de fiabilité de la prédiction (0:pas fiable, 1:fiable)

    return { # On retourne le resultat sous forme d'un objet
        'class': predicted_class,
        'confidence': float(confidence)
    }


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
