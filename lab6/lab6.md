**Lab 6 Paul CHEVALIER & Mathis CAUCHIE**

Commande de création de box nommé ‘centos/7’ pour ‘Virtualbox’ (choix 3) :
![Texte](1p.png "image1")


On entre dans le répertoire « part-1 » situé dans le dossier « lab6 » puis on analyse le type du fichier Vagrantfile. On voit que c’est un fichier qui répertorie des commandes pour définir et créer une machine virtuelle. Lorsque l’on démarre la machine virtuelle, le texte « Hello world est affiché :
![Texte](3p.png "image2")


Commande « vagrant up » exécutée ce qui démarre la VM. La VM lancée est celle dans laquelle la « Vagrantfile » est dans le répertoire courant. On voit bien le message « Hello wolrd » s’afficher ce qui montre qu’on est bien dans la machine virtuelle :
![Texte](4p.png "image3")

La commande « vagrant status » permet de regarder le statut de la machine courante. Ici, le terminal nous renvoie que la VM est en fonctionnement et elle nous donne des commandes pour l’interrompre complètement ou la suspendre simplement :
![Texte](5p.png "image4")

La commande « Vagrant halt » arrête la VM simplement :
![Texte](6p.png "image5")

La commande « Vagrand destroy » arrête et efface complètement la VM :
![Texte](7p.png "image6")

On restart la VM car on l’a détruite juste avant donc impossible de se connecter via SSH :
![Texte](8p.png "image7")

La VM a bien été créée : 
![Texte](9p.png "image8")

On a modifié le fichier dans le bloc note : 

![Texte](1Op.png "image9")
![Texte](11p.png "image10")
![Texte](12p.png "image11")

Ping afin de voir si Gitlab à bien été installé : 
![Texte](1.png "image12")

On le voit également ici : 
![Texte](2.png "image13")

Mise à jour des playbooks sur la VM : 
![Texte](3.png "image14")

Exécution de la balise « check » :
![Texte](4.png "image15")
Message de retour « Gitlab Ok » qui termine le check

Exécution des deux autres types de contrôle d'intégrité, résultats de la console :
![Texte](6.jpeg "image16")

Tentative de connexion au localhost échoué à la fin :
![Texte](5.png "image17")