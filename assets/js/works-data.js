/* =============================================================
   MELODIENRAUSCH — Werkdaten
   Verbindliche Quelle: Notion-Datenbank "Werkliste" (Bereich "Kunst").
   Enthält ausschließlich Werke, die in Notion mit dem Haken
   "Website" = wahr markiert sind (29 von 34 Einträgen — die übrigen 5
   sind laut Notion selbst noch "In Bearbeitung" und werden hier bewusst
   nicht veröffentlicht, siehe Abschlussbericht).

   Es werden NUR Felder gespeichert, für die in Notion echte Werte
   vorhanden sind — nichts wurde erfunden oder ergänzt. Kein Status/
   Verfügbarkeits-Feld in dieser Phase (siehe Anweisung).
   ============================================================= */

const WORKS = [
  {
    id: "werk-001", slug: "manuskript-ohne-stimme",
    title: "Manuskript ohne Stimme",
    technique: "Acryl, Collage und Transferdruck auf Leinwand, Schichtaufbau mit Spachtel-, Wisch- und Übermalungstechniken",
    dimensions: "70 x 100 cm",
    description: "Manuskript ohne Stimme erzählt von Gedanken, die einmal klar waren und mit der Zeit verblasst sind. Zwischen Schriftfragmenten, Überlagerungen und gestischen Spuren entsteht ein Bild über Erinnerung, Verlust und das, was trotzdem bleibt. Nicht alles muss lesbar sein, um Bedeutung zu tragen.",
    manifest: "„Nicht alles, was verschwindet, ist verloren.“",
    soundtrackLabel: "Sirens Monolink",
    trackId: "361505510"
  },
  {
    id: "werk-002", slug: "kupferwald",
    title: "Kupferwald",
    technique: "Acryl und Strukturpaste auf Leinwand, Schichtmalerei, Spachtel- und Wischtechnik, mehrschichtiger Farbauftrag",
    dimensions: "3 x 30 x 70 cm",
    description: "Kupferwald erinnert an eine Landschaft zwischen Erinnerung und Traum. Kupferorange Flächen leuchten durch dunkle Grün- und Blautöne wie Licht, das durch dichtes Geäst fällt. Das Werk erzählt von Stille, Tiefe und den Spuren, die Zeit in einer Landschaft hinterlässt.",
    manifest: "„Manche Landschaften wachsen nicht aus Erde, sondern aus Erinnerung.“",
    soundtrackLabel: "Chris Robin & Saalbach - Metope [Moodmusic]",
    trackId: "206360905"
  },
  {
    id: "werk-003", slug: "feuerstreifen-im-schweigen",
    title: "Feuerstreifen im Schweigen",
    technique: "Acryl und Strukturpaste auf Leinwand, Spachteltechnik, Schichtmalerei und strukturierter Farbauftrag.",
    dimensions: "70 x 100 cm",
    description: "Feuerstreifen im Schweigen lebt vom Gegensatz zwischen Ruhe und Intensität. Die leuchtend rote Mittelachse teilt das Werk und hält die kraftvollen Strukturen auf beiden Seiten zusammen. Zwischen Schwarz, Rot und Gold entsteht eine Spannung, die zugleich geordnet und ungezähmt wirkt.",
    manifest: "„Manchmal reicht ein einziger Impuls, um die Dunkelheit zu teilen.“",
    soundtrackLabel: "Laurent Garnier - Man With The Red Face (Emanuel Satie Edit)",
    trackId: "374272859"
  },
  {
    id: "werk-004", slug: "explosion-der-leichtigkeit",
    title: "Explosion der Leichtigkeit",
    technique: "Acryl auf Leinwand, Strukturpaste, Spachteltechnik, Farbnebel und gestischer Farbauftrag",
    dimensions: "70 x 50 cm",
    description: "Explosion der Leichtigkeit fängt einen Moment ungefilterter Energie ein. Leuchtende Orange-, Gelb- und Grüntöne entfalten sich wie ein plötzlicher Ausbruch von Freude, Bewegung und Freiheit. Das Bild erzählt von dem Augenblick, in dem Schwere verschwindet und Raum für Lebendigkeit entsteht.",
    manifest: "„Leichtigkeit beginnt dort, wo Kontrolle losgelassen wird.“",
    soundtrackLabel: "L'Amour et La Violence (Nico Pusch Bootleg Remix)",
    trackId: "61762082"
  },
  {
    id: "werk-005", slug: "oxidiertes-schweigen",
    title: "Oxidiertes Schweigen",
    technique: "Acryl und Strukturpaste auf Leinwand, Spachtel- und Schleiftechnik, mehrschichtiger Farbauftrag.",
    dimensions: "60 x 80 cm",
    description: "Oxidiertes Schweigen erzählt von Zeit, Spuren und dem, was zurückbleibt. Rostorange und gebrochene Grüntöne erinnern an verwitterte Oberflächen, die ihre Geschichte nicht verloren haben. Ein ruhiges Bild über Veränderung, Erinnerung und die Schönheit des Unperfekten.",
    manifest: "„Manche Geschichten verschwinden nicht. Sie hinterlassen Spuren.“",
    soundtrackLabel: "DAVI 'The Bay 6' (pt. 1)",
    trackId: "119168184"
  },
  {
    id: "werk-006", slug: "zwischen-den-schichten",
    title: "Zwischen den Schichten",
    technique: "Acryl und Strukturpaste auf Leinwand, Schichtmalerei, Spachtel- und Wischtechnik, mehrschichtiger Farbauftrag",
    dimensions: "40 x 50 cm",
    description: "„Zwischen den Schichten“ ist mein Bild für diesen Moment, in dem zwei Gefühle gleichzeitig da sind. Das Ocker oben fühlt sich für mich an wie warme Erde, das tiefere Rot wie etwas, das weiter unten brennt und nicht ganz ausgesprochen ist. Die dunkle Linie dazuwischen ist kein Bruch – eher ein Atenzug zwischen Ruhe und innerem Aufruhr. Die Oberfläche erinnert mich an Haut, die etwas behalten hat. In dieser Stille steckt eine leise Wucht, als würde",
    manifest: "„Das Wesentliche liegt oft zwischen den Schichten.“",
    soundtrackLabel: "Bones - Oliver Koletzki (Feat. HVOB) [Rodri Ghost Remix]",
    trackId: "465643536"
  },
  {
    id: "werk-007", slug: "unearthed-place",
    title: "Unearthed Place",
    technique: "Acryl und Strukturpaste auf Leinwand, mehrschichtiger Farbauftrag, Lasurtechnik und partielle Freilegung der unteren Farbschichten.",
    dimensions: "60 x 80 cm",
    description: "„Unearthed Place“ erinnert mich an etwas, das man in sich findet, ohne bewusst danach gesucht zu haben. Die rostigen und blauen Schichten wirken wie alte Haut – getragen, verwittert, aber voller Geschichten. Nichts daran ist glatt, und genau das fühlt sich ehrlich an. Die eingravierte Zahl taucht auf wie eine Erinnerung, die man fast vergessen hätte, die aber plötzlich wieder da ist. In den freigelegten Spuren spüre ich Zeit, Abrieb, etwas Verletzliches, das trotzdem bleibt. Und der Soundtrack passt, weil manche Orte in einem nur leise sprechen – mehr als Gefühl als Gedanke, wie etwas, das wieder ans Licht will.",
    manifest: "„Jede Oberfläche trägt eine Geschichte, auch wenn niemand sie mehr lesen kann.“",
    soundtrackLabel: "Ammenmärchen (intro remix by Dynamit Harry)",
    trackId: "116847902",
    image: "bilder/unearthed-place.jpg"
  },
  {
    id: "werk-008", slug: "spuren-und-wege",
    title: "Spuren und Wege",
    technique: "Acryl und Strukturpaste auf Leinwand, Schichtmalerei, Spachtel- und Wischtechnik",
    dimensions: "40 x 50 cm",
    description: "„Spuren und Wege“ ist mein Bild für dieses Unterwegssein in mir selbst. Das Ocker und Türkis fühlen sich an wie zwei Stimmungen, zwischen denen ich oft hin- und herschwinge. Die Linien und Fragmente sind für mich Gedanken, die auftauchen, sich überschneiden, wieder verschwinden. Ein leiser Prozess, aber voller Bewegung. Der Soundtrack passt, weil Musik mir oft zeigt, wo ich gerade stehe – manchmal klar, manchmal diffus, aber immer echt.",
    manifest: "„Jeder Weg hinterlässt Spuren, auch die unsichtbaren.“",
    soundtrackLabel: "Depeche Mode - Only When I Lose Myself (Lexicon Avenue Remix)",
    trackId: "1265840854",
    image: "bilder/spuren-und-wege.jpg"
  },
  {
    id: "werk-009", slug: "silent-core",
    title: "Silent Core",
    technique: "Acryl auf Leinwand, Strukturauftrag, monochrome Flächenmalerei",
    dimensions: "70 x 50 cm",
    description: "In „Silent Core“ spüre ich einen konzentrierten Moment, in dem innen Ruhe bleibt, auch wenn außen alles laut wird. Das rote Quadrat fühlt sich für mich wie ein klarer Kern an – direkt, unverrückt, ohne Ablenkung. Rundherum nimmt das Schwarz alles Unnötige auf und lässt nur das Wesentliche stehen. So entsteht eine stille Spannung, die eher atmet als erklärt. Und der Soundtrack passt, weil manche inneren Zentren nicht in Worten sprechen – sie pulsieren einfach.",
    manifest: "„Im Zentrum der Stille liegt die größte Kraft.“",
    soundtrackLabel: "Azari & III - Hungry For The Power (Jamie Jones Ridge Street Remix)",
    trackId: "14554141",
    image: "bilder/silent-core.jpg"
  },
  {
    id: "werk-010", slug: "spuren-in-beton",
    title: "Spuren in Beton",
    technique: "Acryl, Strukturpaste und Transferdruck auf Leinwand, Schichtaufbau mit Spachtel-, Schleif- und Lasurtechniken.",
    dimensions: "70 x 100 cm",
    description: "„Spuren im Betonlicht“ lässt Erinnerung und Stadtgeräusche flüchtig verschmelzen. Neon blau wirkt wie ein kalter Atemzug. Rosa wie restliche Wärme, während die „23“ als fixer Gedanke auftaucht. Abnutzungen zeigen das leise Leben des Vergessenen – eine Erinnerung, die nicht klar wird, sondern nur im eigenen Licht glimmt.",
    manifest: "„Die Zeit schreibt ihre eigenen Geschichten in jede Oberfläche.“",
    soundtrackLabel: "Tone Depth Feat. Johannes Brecht & Fetsum - Free (HOSH Edit) (Preview)",
    trackId: "493315446",
    image: "bilder/spuren-in-beton.jpg"
  },
  {
    id: "werk-011", slug: "symmetrie-der-stille",
    title: "Symmetrie der Stille",
    year: 2024,
    technique: "Acryl und Strukturtechniken auf Leinwand",
    dimensions: "100 x 70 cm",
    description: "„Symmetrie der Stille“ ist mein Versuch, Ordnung sichtbar zu machen, ohne so zu tun, als wäre innen wirklich alles ordentlich. Klare Formen, viel Ruhe, Grau, Weiß, Schatten – und trotzdem liegt in allem eine leichte Spannung. Genau diese Art von Stille kenne ich: nicht leer, nicht friedlich, eher kontrolliert. Der verlinkte Soundtrack setzt darunter den Puls, den man im Bild erst auf den zweiten Blick merkt.",
    manifest: "„Ordnung ist die Maske der Chaos.“",
    soundtrackLabel: "Calvin Harris vs Rüfüs Du Sol - Sweet Nothing vs Innerbloom (VIP MIX)",
    trackId: "2029530928",
    image: "bilder/symmetrie-der-stille.jpg"
  },
  {
    id: "werk-012", slug: "gelbes-echo",
    title: "Gelbes Echo",
    technique: "Acryl-Mischtechnik auf Leinwand",
    dimensions: "80 x 60 cm",
    description: "„Gelbes Echo“ ist mein Bild für das Aufbrechen von Licht in einer stillen, schweren Umgebung. Das leuchtende Gelb fühlt sich für mich an wie ein warmer Widerhall – ein Impuls, der durch Grau und Geschichte dringt. Da ist Klarheit drin, aber auch Trotz. Die beiden Flächen erinnern mich daran, dass selbst in der Stille etwas in Bewegung bleibt. Der Soundtrack gehört dazu, weil manche Helligkeit nicht sichtbar beginnt – sie klingt zuerst.",
    manifest: "„Ein letzter Rest Trotz im Grau.“",
    soundtrackLabel: "Kris Davis - Fallout",
    trackId: "739696288",
    image: "bilder/gelbes-echo.jpg"
  },
  {
    id: "werk-013", slug: "fragmentierte-einheit",
    title: "Fragmentierte Einheit",
    technique: "Mixed Media auf Leinwand",
    dimensions: "70 x 50 cm, 50 x40 cm, 20 x 60 cm (dreiteilig)",
    description: "„Fragmentierte Einheit“ visualisiert das Gefühl, innerlich zu zerfallen und dennoch zusammenzuhalten. Drei Segmente zeigen unterschiedliche Zustände, die getrennt und doch verbunden bleiben. Während das zentrale Rot den unermüdlichen Herzschlag verkörpert, halten Linien die Brüche zusammen. Der Soundtrack gibt dem Unausgesprochenen in den rauen Hintergründen einen Takt – ein Echo, das weiterlebt.",
    manifest: "„Zersplittert, aber im Kern unbesiegbar.“",
    soundtrackLabel: "deadmau5 - xyz",
    trackId: "1288852933",
    image: "bilder/fragmentierte-einheit.jpg"
  },
  {
    id: "werk-014", slug: "linie-im-blau",
    title: "Linie im Blau",
    technique: "Acryl, Strukturpaste und Pigmentfarbe auf Leinwand, Spachteltechnik, gestische Linienführung und mehrschichtiger Farbauftrag.",
    dimensions: "50 x 70, 30 x 70 cm",
    description: "Linie im Blau erzählt von Orientierung inmitten von Bewegung. Kräftige Blautöne treffen auf dunkle Flächen und werden von einer goldenen Linie durchzogen, die beide Bildteile miteinander verbindet. Das Werk handelt von Fokus, Richtung und der Fähigkeit, einen eigenen Weg sichtbar zu machen.",
    manifest: "„Manchmal genügt eine Linie, um die Richtung zu ändern.“",
    soundtrackLabel: "Leo Kane - Epic (Original Mix)",
    trackId: "81184764",
    image: "bilder/linie-im-blau.jpg"
  },
  {
    id: "werk-015", slug: "unter-strom",
    title: "Unter Strom",
    technique: "Acryl und Strukturpaste auf Leinwand, Spachteltechnik, Reliefstruktur, mehrschichtiger Farbauftrag mit metallisch-pigmentierten Akzenten.",
    dimensions: "80 x 80 cm",
    description: "Das Blau frisst sich rein. Nicht ruhig, nicht weich – eher wie ein Druck, der von außen kommt. Und das Dunkle hält dagegen. Rau, schwer, fast stumm. Für mich ist das dieser Moment, wenn innen alles arbeitet, aber nach außen nichts passiert. Nur Spannung. Die bleibt.",
    manifest: "„Blaues Licht. Hochspannung. Kein Zurück.“",
    soundtrackLabel: "Fedele - Zommerfest 25",
    trackId: "2168070657",
    image: "bilder/unter-strom.png"
  },
  {
    id: "werk-016", slug: "drei-tore-ins-licht",
    title: "Drei Tore ins Licht",
    technique: "Acryl, Strukturpaste und Lasuren auf Leinwand. Mehrschichtiger Farbauftrag mit partiellen Schleif- und Freilegungstechniken. Triptychon (dreiteilig).",
    dimensions: "3 x 30 x 90 cm",
    description: "„Drei Tore ins Licht“ ist mein Bild über Veränderung — über Dunkelheit, alte Muster und den Moment, in dem man merkt, dass es so nicht weitergehen kann. Die Farben und Strukturen erzählen von Reibung, Hoffnung und dem langsamen Weg in mehr Klarheit. Nicht linear, nicht sauber, aber echt. Der verlinkte Soundtrack gehört dazu, weil manche Stimmungen erst in Musik zu Ende erzählt werden.",
    manifest: "„Der Moment, in dem die Klarheit siegt.“",
    soundtrackLabel: "Bunte Bummler - Lightsammon mantao",
    trackId: "176031491",
    images: ["bilder/drei-tore-ins-licht-1.jpg", "bilder/drei-tore-ins-licht-2.jpg", "bilder/drei-tore-ins-licht-3.jpg"]
  },
  {
    id: "werk-017", slug: "you-dont",
    title: "YOU DON'T",
    technique: "Acryl, Papiercollage und Transferdruck auf Leinwand, Strukturpaste, Schichtaufbau, Übermalung und Kratztechnik.",
    dimensions: "40 x 30 cm",
    description: "„You don’t“ ist dieser Satz, der mitten im Raum stehen bleibt. Nicht zu Ende gedacht, nicht erklärt – einfach da. Die Schichten drunter sind laut, voll von allem, was gesagt werden wollte. Und dann dieser rote Schnitt. Wie ein Abbruch. Oder eine Grenze. Für mich ist das kein klares Nein. Eher ein Punkt, an dem ich aufgehört hab, mich zu erklären.",
    manifest: "„Ein Schnitt. Ein Ende. Ein Statement.“",
    soundtrackLabel: "Frank Ocean - Lost (Gabss e Vintage Culture Edit)",
    trackId: "2046751176"
  },
  {
    id: "werk-018", slug: "riss-im-rauschen",
    title: "Riss im Rauschen",
    technique: "Acryl, Papiercollage und Transferdruck auf Leinwand, Schichtaufbau mit Übermalungen, Spachtel- und Schleiftechnik.",
    dimensions: "40 x 30 cm",
    description: "Ich hab hier nicht gemalt, ich hab freigelegt. Schichten aus Worten, die keiner mehr liest, und mittendrin dieser rote Bruch – wie ein Beat, der plötzlich alles stoppt. Für mich ist das der Moment, in dem etwas kippt. Nicht laut. Aber endgültig.",
    manifest: "„Wenn die Welt den Atem anhält.“",
    soundtrackLabel: "Maceo Plex, Odd Parents Learn To Fly (Maceo's Flight Home)",
    trackId: "200243937"
  },
  {
    id: "werk-019", slug: "element-trilogie",
    title: "Element-Trilogie",
    technique: "Acryl, Strukturpaste und Mixed Media auf Leinwand, Schichtmalerei mit Spachtel- und Lasurtechnik.",
    dimensions: "100 x 70 cm",
    description: "Eine Erforschung der Urkräfte. Schwarz und Weiß prallen in organischen Strukturen aufeinander und symbolisieren das Gleichgewicht zwischen Werden und Vergehen.",
    manifest: "„Aus Spannung entsteht Gleichgewicht.“",
    soundtrackLabel: "Liu Bei - Atlas World (Solomun Day Remix)",
    trackId: "200949310"
  },
  {
    id: "werk-020", slug: "zu-viel-rot",
    title: "Zu viel Rot",
    technique: "Acryl auf Leinwand, gestischer Farbauftrag, Tropf- und Spritztechnik, Pinsel- und Markerspuren.",
    dimensions: "2 x 40 x 40 cm",
    description: "Zu viel Rot ist ein Bild ohne Rücksicht. Die roten Spuren schießen über die Fläche, werden unterbrochen, kreuzen sich und hinterlassen ihre Energie auf der Leinwand. Die schwarzen Linien wirken wie Versuche, das Chaos zu ordnen – oder zumindest festzuhalten. Es geht nicht um Kontrolle, sondern um den Moment kurz davor, sie zu verlieren.",
    manifest: "„Manche Gefühle passen nicht in leise Farben.“",
    soundtrackLabel: "Fox The Fox - Precious Little Diamond (AMANIC Rework // FREE DOWNLOAD since 08.05.2014)",
    trackId: "134074166"
  },
  {
    id: "werk-021", slug: "resonanz-im-beton",
    title: "Resonanz im Beton",
    technique: "Acryl auf Leinwand, Schichtmalerei mit Spachtel- und Wischtechnik, gestische Linienführung mit Kohle, Marker oder Pinsel.",
    dimensions: "60 x 60 cm",
    description: "„Resonanz im Beton“ fühlt sich für mich an wie ein innerer Aufprall – da, wo etwas in mir standhält, obwohl rundherum alles Druck macht. Das kräftige Blau unten wirkt wie mein fester Punkt, schwer, klar, nicht verschiebbar. Die dunklen Linien darüber erinnern mich an Gedanken, die sich verknoten, verhaken, aber trotzdem weiterlaufen. In den Rost- und Grautönen steckt für mich dieses Reiben zwischen Kontrolle und Gefühl. Jede Spur wirkt wie eine kleine Entscheidung.",
    manifest: "„Härte ist nur eine Form von Widerstand.“",
    soundtrackLabel: "deadmau5 Science",
    trackId: "2231090570"
  },
  {
    id: "werk-022", slug: "layers-of-being",
    title: "Layers of Being",
    technique: "Acryl, Collage und Transfertechniken auf Leinwand, Schichtaufbau mit Strukturpaste, Spachtelarbeit und Übermalungen.",
    dimensions: "50 x 70 cm",
    description: "„Layers of Being“ zeigt Identität als Prozess aus Schichten, Rissen und Neusortierung. Das große A, Textreste und harte Kontraste sind Spuren alter Versionen, die bleiben. In der Spannung zwischen Chaos und Form vibriert das Bild wie der Soundtrack – ein Zustand, der niemals stillsteht.",
    manifest: "„Ich bin die Summe meiner Schichten.“",
    soundtrackLabel: "Chi Thanh & Andre Crom - These Walls - f. Ann Saunderson - original mix",
    trackId: "229322020"
  },
  {
    id: "werk-023", slug: "horizont-in-flammen",
    title: "Horizont in Flammen",
    technique: "Acryl-Lasur und Spachtelarbeit",
    dimensions: "40 x  30 cm",
    description: "„Horizont in Flammen“ ist mein Bild für diese Momente, in denen alles gleichzeitig nach Ende und Anfang aussieht. Oben brennt es, unten hält etwas noch still, dazuwischen liegt nur ein schmaler Streifen, der nicht entscheidet, ob er trennt oder verbindet. Genau da kenne ich mich aus. Der verlinkte Soundtrack gehört dazu, weil manche Spannungen erst in Musik ihre volle Wahrheit bekommen.",
    manifest: "„Wo die Trennung zur Glut wird.“",
    soundtrackLabel: "MIA. - Fallschirm (Chrisik Free Fall Remix)",
    trackId: "42038166"
  },
  {
    id: "werk-024", slug: "farbrebellen",
    title: "Farbrebellen",
    technique: "Mischtechnik, Action Painting Elemente",
    dimensions: "2 x 40 x 40 cm, 2 x 20 x 60 cm",
    description: "„Farbrebellen – Hier Akte der Bewegung“ ist ziemlich nah dran an der Art, wie mein Kopf oft funktioniert: viel Energie, viele Richtungen, kein Interesse an braver Ordnung. Jede Farbe bringt eine andere Stimmung mit – Druck, Aufbruch, Atem, Loslassen. Nicht alles davon ist harmonisch, aber genau darum geht es auch nicht. Der verlinkte Soundtrack gehört dazu, weil Bewegung bei mir selten still passiert.",
    manifest: "„Energie, die den Rahmen sprengt.“",
    soundtrackLabel: "Oliver Koletzki ft Nörd - After All (Claptone Remix)",
    trackId: "143660907"
  },
  {
    id: "werk-025", slug: "the-end",
    title: "The End",
    technique: "Oxidationsmittel, Eisenpigmente, Lack",
    dimensions: "60 x 80 cm",
    description: "„The End“ ist mein Moment, in dem etwas aufbricht, weil es nicht mehr hält. Das Blau, Ocker, Rot und dieser Hauch von Rost fühlen sich an wie Gedanken, die noch keinen Satz können – aber schon Druck machen. Da ist Abschied drin, klar. Aber auch dieses leise Kippen Richtung Anfang. Der Soundtrack gehört für mich dazu, weil manche Enden nicht gesagt werden. Sie laufen im Hintergrund weiter. Wie ein Bass, den du mehr fühlst als hörst.",
    manifest: "„Wenn Rost zur Melancholie wird.“",
    soundtrackLabel: "Depresss - Shinny Steel",
    trackId: "407115600"
  },
  {
    id: "werk-026", slug: "wenn-die-stille-zittert",
    title: "Wenn die Stille zittert",
    technique: "Urban Abstract, zeitgenössische abstrakte Malerei mit Patina- und Wabi-Sabi-Einflüssen.",
    dimensions: "50 x 70 cm",
    description: "„Wenn die Stille zittert“ ist mein Bild für diese seltsamen Momente, in denen äußerlich alles ruhig aussieht, aber innen längst etwas in Bewegung ist. Nichts daran ist laut, und genau deshalb ist es so deutlich. Die Schichten, Risse und Farben erzählen von feiner Spannung, von Müdigkeit, Erinnerung, Hoffnung und dem, was sich nicht sofort benennen lässt. Der verlinkte Soundtrack gehört dazu, weil manche Formen von Unruhe eher klingen als sprechen.",
    manifest: "„Ein Herzschlag, der das Vakuum bricht.“",
    soundtrackLabel: "FreakMe & Stan Ritch - Metronome (Dyno Remix)",
    trackId: "220790606"
  },
  {
    id: "werk-027", slug: "no-23-spuren-im-betonlicht",
    title: "No. 23 – Spuren im Betonlicht",
    technique: "Acryl, Strukturpaste und Transferdruck auf Leinwand, Schichtaufbau mit Spachtel-, Schleif- und Lasurtechniken.",
    dimensions: "70 x 100 cm",
    description: "„Spuren im Betonlicht“ lässt Erinnerung und Stadtgeräusche flüchtig verschmelzen. Neon blau wirkt wie ein kalter Atemzug. Rosa wie restliche Wärme, während die „23“ als fixer Gedanke auftaucht. Abnutzungen zeigen das leise Leben des Vergessenen – eine Erinnerung, die nicht klar wird, sondern nur im eigenen Licht glimmt.",
    manifest: "„Die Zeit schreibt ihre eigenen Geschichten in jede Oberfläche.“",
    soundtrackLabel: "ELLEN ALLIEN wish B PITCH CONTROL",
    trackId: "2053510"
  },
  {
    id: "werk-028", slug: "feuer-im-raster",
    title: "Feuer im Raster",
    technique: "Mixed Media auf Leinwand",
    dimensions: "60 x 80 cm, DIPTYCHON",
    description: "„Feuer im Raster“ thematisiert den Konflikt zwischen bändigender Struktur und drängender Energie. Das Raster gibt Halt, kann den inneren Druck und die Hitze aber nicht stoppen. Erst durch den Soundtrack und seinen Beat findet diese Spannung zwischen Kontrolle und Ausbruch ihre richtige Temperatur.",
    manifest: "„Spannung, die geordnet werden will.“",
    soundtrackLabel: "Maxxi Soundsystem - Medicine feat. Name One (Iorie Upcycle Edit)",
    trackId: "2256430691"
  },
  {
    id: "werk-029", slug: "golden-rush",
    title: "Golden Rush",
    technique: "Acryl auf Leinwand, strukturierte Schichtmalerei mit Spachtel- und Lasurtechnik",
    dimensions: "50 x 70 cm",
    description: "Golden Rush erzählt nicht von Besitz, sondern von Aufbruch. Die goldenen und warmen Orangetöne brechen durch eine ruhige Oberfläche und wirken wie Licht, das sich seinen Weg nach außen sucht. Ein Bild über innere Energie, Hoffnung und den Moment, in dem Bewegung entsteht.",
    manifest: "„Manches Leuchten kommt von innen.“",
    soundtrackLabel: "Klangkosmetiker & Silvio Saint - Alone in the street (Original Mix)",
    trackId: "20782157"
  },
];
