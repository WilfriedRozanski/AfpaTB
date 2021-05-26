<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Coupon de 1 remis&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2lignes="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8" epaisseurPoint="2" totalAffichages="1000" arrondiAuto="vrai" maxBoucle="500000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="PrixAchat EST_DU_TYPE NOMBRE" code="1#NOMBRE#PrixAchat"/>
        <item algoitem="TotalPrix EST_DU_TYPE NOMBRE" code="1#NOMBRE#TotalPrix"/>
        <item algoitem="SommePaye EST_DU_TYPE NOMBRE" code="1#NOMBRE#SommePaye"/>
        <item algoitem="Remise EST_DU_TYPE NOMBRE" code="1#NOMBRE#Remise"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="SommePaye PREND_LA_VALEUR 0" code="5#SommePaye#0#pasliste"/>
        <item algoitem="LIRE PrixAchat" code="2#PrixAchat#pasliste"/>
        <item algoitem="TotalPrix PREND_LA_VALEUR PrixAchat" code="5#TotalPrix#PrixAchat#pasliste"/>
        <item algoitem="TANT_QUE (PrixAchat!=0) FAIRE" code="15#PrixAchat!=0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE PrixAchat" code="2#PrixAchat#pasliste"/>
            <item algoitem="TotalPrix PREND_LA_VALEUR TotalPrix+PrixAchat" code="5#TotalPrix#TotalPrix+PrixAchat#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER TotalPrix" code="3#TotalPrix#1#pasliste"/>
        <item algoitem="TANT_QUE (SommePaye&lt;TotalPrix) FAIRE" code="15#SommePaye&lt;TotalPrix">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="LIRE SommePaye" code="2#SommePaye#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="Remise PREND_LA_VALEUR SommePaye-TotalPrix" code="5#Remise#SommePaye-TotalPrix#pasliste"/>
        <item algoitem="AFFICHER Remise" code="3#Remise#1#pasliste"/>
        <item algoitem="SI (Remise==0) ALORS" code="6#Remise==0">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Pas de remise coupon&quot;" code="4#Pas de remise coupon#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="TANT_QUE (Remise!=0) FAIRE" code="15#Remise!=0">
                    <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                    <item algoitem="TANT_QUE ((Remise-10)>=0) FAIRE" code="15#(Remise-10)>=0">
                        <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                        <item algoitem="Remise PREND_LA_VALEUR Remise-10" code="5#Remise#Remise-10#pasliste"/>
                        <item algoitem="AFFICHER &quot;Coupon de 10 remis&quot;" code="4#Coupon de 10 remis#1"/>
                        <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
                    </item>
                    <item algoitem="SI ((Remise-5)>=0) ALORS" code="6#(Remise-5)>=0">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="Remise PREND_LA_VALEUR Remise-5" code="5#Remise#Remise-5#pasliste"/>
                        <item algoitem="AFFICHER &quot;Coupon de 5 remis&quot;" code="4#Coupon de 5 remis#1"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="TANT_QUE ((Remise-1)>=0) FAIRE" code="15#(Remise-1)>=0">
                        <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                        <item algoitem="Remise PREND_LA_VALEUR Remise-1" code="5#Remise#Remise-1#pasliste"/>
                        <item algoitem="AFFICHER &quot;Coupon de 1 remis&quot;" code="4#Coupon de 1 remis#1"/>
                        <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
                    </item>
                    <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
