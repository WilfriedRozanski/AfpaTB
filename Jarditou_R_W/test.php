<html>  
    <body>
        <?php
            $couleur[] = "red";
            $couleur[] = "blue";
            $couleur[] = "white";
            $couleur[] = "black";
                        
            // pour afficher la valeur "white", on écrira :
            echo $couleur[3];
            $_GET["societe"] = "Afpa";
            echo $_GET["societe"];

            $var1 = "bonjour";
            $$var1 = "le monde"; 

            echo"Fichier : ".__FILE__.", ligne : ".__LINE__;

            $myVar = "bonjour";
            var_dump($myVar);

            $myVar = "KO";

            if ($myVar == "OK") 
            {   
            echo"C'est bon<br>";
            } 
            else 
            {
                echo"Ouh la la pas bien !<br>"; // Message affiché dans la page web
                $message = "Ouh la la pas bien ".__FILE__." ".__LINE__;        
                error_log($message); 
            } 
            echo $_SERVER["SERVER_NAME"];
            var_dump($_SERVER);

            $euro = 6.55957;
            printf("%.2f FF<br />",$euro);

            $money1 = 68.75;
            $money2 = 54.35;
            $money = $money1 + $money2;

            echo $money; // affiche 123.1;

            echo "affichage sans printf : ".$money."<br>";

            $monformat = sprintf("%01.2f", $money);

            echo $monformat; // affiche 123.10

            echo "affichage avec printf : ".$monformat."<br>";

            $year = "2002";
            $month = "4";
            $day = "5";

            $date = sprintf("%04d-%02d-%02d", $year, $month, $day);

            echo $date."<br>"; // affichera "2002-04-05"
            echo "affichage avec sprintf : ".$date."<br>";

            function Test1() 
            { 
            static $a=0; 
            echo "$a<br>"; 
            $a++;
            } 

            // Appel de la fonction (3 fois)
            Test1(); 
            Test1(); 
            Test1(); 
        ?>
    </body>
</html>