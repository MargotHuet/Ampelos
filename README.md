# 🍇 Ampelos

Ampelos est un outil d'aide à l'identification des maladies de la feuille de vigne. 
J'ai créer un modèle de Deep Learning (réseau de neurones convolutif) en utilisant TensorFlow Keras, Pandas et Numpy.
J'ai utilisé le modèle dans une application web React JS, on peut ainsi charger une image de feuille de vigne, une fenêtre affiche le résultat (l'état de santé et l'indice de confiance de la prédiction).
Je vais prochainement construire une application mobile, qui utilisera la vision par ordinateur pour prédire le résultat. 

Le but de ce projet est d'aider les petites structures viticoles - qui ne peuvent pas investir dans du matériel agricole moderne -  à identifier la vigne malade.

## 🛣️ Roadmap

- Data : data visualisation, séparation du jeu de données en sous-catégories (train, test, validation), data augmentation, optimisation des données d'entrainement. 
- Création du modèle : création d'un réseau de neurones convolutif, entrainement du modèle sur les données train test split 
- Evaluation de la fiabilité : sur les ensembles de données d'entrainement et de validation. 
- Test du modèle.


## 📚 Documentation

[Grapevine leaf dataset](https://www.kaggle.com/datasets/rm1000/grape-disease-dataset-original)
