<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Refus D'assurance&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8" epaisseurPoint="2" totalAffichages="1000" arrondiAuto="vrai" maxBoucle="500000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="ageConducteur EST_DU_TYPE NOMBRE" code="1#NOMBRE#ageConducteur"/>
        <item algoitem="NbAgePermis EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbAgePermis"/>
        <item algoitem="Accident EST_DU_TYPE NOMBRE" code="1#NOMBRE#Accident"/>
        <item algoitem="AnciennetéCompagnie EST_DU_TYPE NOMBRE" code="1#NOMBRE#AnciennetéCompagnie"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE ageConducteur" code="2#ageConducteur#pasliste"/>
        <item algoitem="LIRE NbAgePermis" code="2#NbAgePermis#pasliste"/>
        <item algoitem="LIRE Accident" code="2#Accident#pasliste"/>
        <item algoitem="LIRE AnciennetéCompagnie" code="2#AnciennetéCompagnie#pasliste"/>
        <item algoitem="SI (AnciennetéCompagnie>1) ALORS" code="6#AnciennetéCompagnie>1">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Tarif Bleu&quot;" code="4#Tarif Bleu#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="SI (Accident>2) ALORS" code="6#Accident>2">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Refus d'assurance&quot;" code="4#Refus d'assurance#1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (Accident==2) ALORS" code="6#Accident==2">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="SI (ageConducteur>=25 ET NbAgePermis>2) ALORS" code="6#ageConducteur>=25 ET NbAgePermis>2">
                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                <item algoitem="AFFICHER &quot;Tarif Orange&quot;" code="4#Tarif Orange#1"/>
                                <item algoitem="FIN_SI" code="8#finsi"/>
                                <item algoitem="SINON" code="9#sinon">
                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                    <item algoitem="AFFICHER &quot;Refus D'assurance&quot;" code="4#Refus D'assurance#1"/>
                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                </item>
                            </item>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="SI (Accident==1) ALORS" code="6#Accident==1">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="SI (ageConducteur>=25 ET NbAgePermis>2) ALORS" code="6#ageConducteur>=25 ET NbAgePermis>2">
                                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                        <item algoitem="AFFICHER &quot;Tarif Orange&quot;" code="4#Tarif Orange#1"/>
                                        <item algoitem="FIN_SI" code="8#finsi"/>
                                        <item algoitem="SINON" code="9#sinon">
                                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                            <item algoitem="SI ((ageConducteur>=25 ET NbAgePermis&lt;=2) OU (ageConducteur&lt;25 ET NbAgePermis >2)) ALORS" code="6#(ageConducteur>=25 ET NbAgePermis&lt;=2) OU (ageConducteur&lt;25 ET NbAgePermis >2)">
                                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                <item algoitem="AFFICHER &quot;Tarif Rouge&quot;" code="4#Tarif Rouge#1"/>
                                                <item algoitem="FIN_SI" code="8#finsi"/>
                                                <item algoitem="SINON" code="9#sinon">
                                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                    <item algoitem="AFFICHER &quot;Refus D'assurance&quot;" code="4#Refus D'assurance#1"/>
                                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                                </item>
                                            </item>
                                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                                        </item>
                                    </item>
                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="SI (ageConducteur&lt;25 ET NbAgePermis&lt;=2) ALORS" code="6#ageConducteur&lt;25 ET NbAgePermis&lt;=2">
                                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                            <item algoitem="AFFICHER &quot;Tarif Rouge&quot;" code="4#Tarif Rouge#1"/>
                                            <item algoitem="FIN_SI" code="8#finsi"/>
                                            <item algoitem="SINON" code="9#sinon">
                                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                <item algoitem="SI (ageConducteur>=25 ET NbAgePermis>2) ALORS" code="6#ageConducteur>=25 ET NbAgePermis>2">
                                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                    <item algoitem="AFFICHER &quot;Tarif Vert&quot;" code="4#Tarif Vert#1"/>
                                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                                    <item algoitem="SINON" code="9#sinon">
                                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                        <item algoitem="AFFICHER &quot;Tarif Orange&quot;" code="4#Tarif Orange#1"/>
                                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                                    </item>
                                                </item>
                                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                                            </item>
                                        </item>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
