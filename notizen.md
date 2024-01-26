# Datentyp

- Text: Länge n
- Annotationen (m Stück):
  - Start s: zwischen 0 und n
  - Ende e: zwischen s und n
  - Metadaten

Pseudo code:

  AnnotatedText: Paar (Text, Annotations)
  Text:
    - length: nichtnegative Zahl
  Annotations: [Annotation]
  Annotation<MD> (Objekt):
    - range: (Zahl, Zahl) (gültige Bereiche)
    - metadata: MD

# Darstellung

- Textlänge als Rechteck (vertikal)
- Annotationen als kleine Rechtecke (Striche?) an der richtigen Stelle (s:e)

# Interaktion

Später: Klick in die Minimap: Sprung zur Stelle im Text
