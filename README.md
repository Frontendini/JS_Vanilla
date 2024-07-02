# Indice
- [Vite JS](https://vitejs.dev/)


# Vite JS
## Scaffolding di un progetto JS
Per inizializzare un progetto node tramite Vite JS (JS Vanilla, React, Vue, ecc.) lanciamo il seguente comando:

`npm create vite@latest`

## Struttura cartelle
- **public**: l'unica cartella accessibile al browser
- **package.json**: contiene l'elenco di tutte le librerie JS o CSS, che servono al progetto per funzionare correttamente
    - all'interno del json vi è l'attributo "scripts" nella quale possiamo registrare comandi personalizzati
- **package-lock.json**: contiene l' elenco dell librerie effettivamente installate nel progetto
- **node_modules**: contiene tutti i file delle librerie effettivamente installate
- **.gitignore**: contiene l'elenco delle cartelle o dei file che non devono essere pushati su GitHub