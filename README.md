# Portfolio Webtech 2
In dit portfolio vindt u al mijn oefeningen die als opdracht gemaakt moesten worden voor het vak Webtech 2

## Week 1: GIT
Om ons voor te bereiden op het portfolio, begon de eerste les met github. Hiermee moesten we leren werken om op het einde van het semester ons portfolio te delen.
De code via de terminal was nogal snel ingewikkeld. Na verloop van tijd leer je de commando's wel en lukt het om te committen en andere dingen.
Na de introductie van de grafische versie van github, kon ik zonder problemen alle functionaliteiten van GIT gebruiken.

Om bijvoorbeeld te committen en te syncen moet je de volgende commando's typen

`git commit updated something`

`git push`

Terwijl je bij de grafische versie je commentaar kan typen en simpel op een knop drukken.

Dat is de reden waarom ik deze laatste verkies. Het is ook veel sneller bij mij.

## Week 2: CSS animaties
De nieuwe trend bij webdesign zijn animaties. Deze zorgen ervoor dat verandering op een vloeiende manier weergegeven worden.
Hierbij denken we bijvoorbeeld aan overgangen wanneer de muis over een object gaat, bewegingen van logo's en icoontjes enzovoort.
Alle oefeningen zijn tot in de puntjes afgewerkt met soms extra features om een real-life look te geven

[Bekijk hier alle oefeningen](https://github.com/NielsMeulders/webtech2/tree/master/css%20animaties)

## Week 3: Advanced JavaScript
Buiten HTML en CSS is JavaScript een andere zeer belangrijke programmeertaal binnen de web-wereld. Daarom moeten we ook hier op oefenen. Deze todo-app biedt de mogelijkheid om nieuwe taken toe te voegen. Daarna kunnen we elke taak apart gaan aanduiden als afgewerkt of daarna terug op onafgewerkt zetten.

[Hier vindt u de applicatie](https://github.com/NielsMeulders/webtech2/tree/master/advanced%20JS/todo)

## Week 4: App prototypes met APIs
Dankzij een API kunnen we informatie van andere mensen gebruiken om onze eigen app van data te voorzien. Deze API's kunnen verschillende doeleinden hebben. Bijvoorbeeld: weergegevens, treinuren,... Zelfs de gekste dingen zijn beschikbaar zoals de database van Bol.com. Daarmee kunnen we onze eigen webshop bouwen die de prijzen van Bol rechtstreeks volgt.

Een veelgebruikte API is die van een weerstation. Deze stuurt constant informatie uit waardoor we zelf een app kunnen bouwen met de informatie die wij zelf selecteren aan de hand van de gewenste doelgroep. Mijn applicatie is zo'n weerapp. Dankzij geolocatie wordt de huidige locatie opgevraagd en opgeslagen. Daarmee kunnen we de API raadplegen om het weer op deze locatie te bepalen. Aan de hand van de zon en wolken wordt er steeds een ander symbool weergegeven, samen met de huidige temperatuur.

[Hier vindt u de applicatie](https://github.com/NielsMeulders/weatherapp)

## Week 5: Realtime apps met node.js
Tijdens een gastles van District01 kregen we een opleiding Node. Dit is een platform om gemakkelijk netwerkapplicaties te bouwen. Ik heb deze les spijtig genoeg niet kunnen meevolgen dus ik heb achteraf zelfstudie moeten doen om de opdracht te maken.

Deze app maakt gebruik van MongoDB. Dit is een alternatief van MySQL maar deze is veel beter wanneer de database op grotere schaal moet draaien. Om de server te laten draaien voeren we het volgende commando uit:
```sh
$ mongod
$ mongo
```
De volgende stap is om de applicatie zelf te laten runnen. Dit kunnen we doen met onderstaand commando
```sh
$ node app.js
```
Nu kunnen we op localhost:3003 de app live testen. Alle data (drankjes) die in het veld ingevoerd worden, zal live op het scherm te zien zijn en deze wordt ook opgeslagen in de databank. Om de inhoud van de databank te bekijken, gebruik ik robomongo. Als we hierbij verbinding maken met de juiste database, krijgen we alle inhoud hiervan te zien.

[Hier vindt u de applicatie](https://github.com/NielsMeulders/webtech2/tree/master/node%20IMD%20frigo)

## Week 6: AngularJS
Angular is een framework om apps te bouwen. Dankzij dit framework kunnen we de 'woordenschat' van HTML uitbreiden om zo snel en eenvoudig webapplicaties te bouwen.

[Hier vindt u de applicatie](https://github.com/NielsMeulders/webtech2/tree/master/angular/Digital-Bar%20Base)

## Week 7: SASS
SASS is een CSS preprocessor waardoor we minder code moeten schrijven, variabelen kunnen gebruiken en CSS-code kunnen groeperen.
De overgang van gewone CSS naar SASS is voor mij eerder moeilijk omdat hiervoor de commandline nodig is. De code die in een SASS-bestand staat moet 'geconverteerd' worden naar standaard CSS. Daarom vind ik het nog steeds makkelijker en sneller om gewone css te schrijven en zo steeds te bekijken wat er verandert.

Hiervoor zijn echter wel hulpmiddelen die bij elke verandering die ze detecteren, de bestanden omzetten waardoor je ook soepel kan developen. Ik heb er persoonlijk nog niet zo veel ervaring mee dus voorlopig is het niet mijn favoriet.

[Hier vindt u de oefening](https://github.com/NielsMeulders/webtech2/tree/master/SASS/sass)
