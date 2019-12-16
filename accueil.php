
	<?php 

	$api = file_get_contents("http://145.239.32.254:8081/browseShop/categories");
	$dataApi = json_decode ($api,true);?>

	<?php function antidevencarton($valeur){
	 if (preg_match("#<[a-z]*>#", "$valeur")){
	   $valeur = "Merci les dev en carton";
	 }else{
	 }
	}?>

<?php function blocs ($value) { ?>
	<?php
   foreach($value as $i =>$valeur ){
   if ($i=="nom"){
     antidevencarton($valeur);
     $valeur = strtolower(str_replace(' ', '_', $valeur));
     $nom = $valeur;
    }else if ($i=="sousCategorie"){
   $uu = $valeur;
   }
 }?>
            <article id="<?php echo $nom?>">
                <h2><?php $nom = str_replace('_', ' ', $nom);
                echo $nom?></h2>
                <nav>
                    <ul class="box_sous_partie">
                            <?php foreach ($uu as $ssCat){
                            $nom = $ssCat;?>

                        <il class="liens"><a href="./<?php echo $nom ?>.php"></a><?php echo $nom?></il>
                        <?php } ?>
                    </ul>
                </nav>
            </article>
    <?php
    }
    ?>


<!DOCTYPE html>

<html>

	<head>

	    <meta charset="utf-8" />
	    <link rel="stylesheet" href="accueil.css" />
	  <link rel="icon" type="image/png" href="image/logo.png">
	    <title>BrowseShop</title>

	</head> 

	<body>

	    <div id="bloc_page">

	        <header>
	            <div id="titre_princial">
	                <div id="logo">
	                    <img src="image/logo.png" alt="Logo de shop" />
	                    <h1><strong>B</strong>outique<strong>A</strong>ctu</h1>
	                </div>
	                <h3>Au top de l'actu</h3>
	            </div>              
	            <nav>
	                <ul>
	                    <il><a href="#">Accueil</a></il>
	                    <il><a href="#">Promo</a></il>
	                </ul>
	            </nav>
	        </header>  

	        <div id="banniere_pub">
	                <a href="https://www.cocacola.fr/fr/home/"> <img src="image/pub_coca_cola.png" alt="pub coca-cola" /></a>
	        </div>

	        <section id="mainSect">
	        	<!-- Ajout de la partie php -->

	        	<?php
				foreach($dataApi as $a => $value) {
				blocs($value);
				}?>    

	        </section> 

	        <footer>
	            <div id="liens_sites">
	                <h3>Site officiel:</h3>
	                <p><a href="#">Amazon</a></p>
	            </div>
	            <div id="services">
	                <h3>Me contacter:</h3>
	                <p><a href="#">M'envoyer un mail</a></p>
	            </div>
	        </footer>

	    </div>  

	  <!--<script src="ajax.js"></script> -->
	  <!-- <script src="accueil.js"></script> -->

	</body>

</html>