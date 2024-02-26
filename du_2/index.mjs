import fs from 'fs'

// příkaz node .\index.mjs pro vytvoření souboru "vystup.txt"

const createFile = (source, destination) => {
    fs.copyFile(source, destination, (err) => {
        if (err) {
            console.error(`Chyba při kopírování souboru ${source} do ${destination}: ${err}`);
            return;
        }
        console.log(`Soubor ${destination} vytvořen.`);
    });
};

const copyFile = (source, destination) => {
    fs.readFile(source, 'utf8', (err, data) => {
        if (err) {
            console.error(`Chyba při čtení zdrojového souboru ${source}: ${err}`);
            return;
        }
        
        fs.writeFile(destination, data, 'utf8', (err) => {
            if (err) {
                console.error(`Chyba při zápisu do cílového souboru ${destination}: ${err}`);
                return;
            }
            console.log(`Data zkopírovaná z ${source} do ${destination} bylo úspěšné.`);
        });
    });
};

fs.readFile('instrukce.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Chyba při čtení souboru: ${err}`);
        return;
    }
    
    const [sourceFile, destinationFile] = data.trim().split(' ');

    fs.access(sourceFile, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Soubor ${sourceFile} neexistuje.`);
            return;
        }
        
        fs.access(destinationFile, fs.constants.F_OK, (err) => {
            if (err) {
                console.log(`Cílový soubor ${destinationFile} neexistuje. Vytvořím...`);
                createFile(sourceFile, destinationFile);
            } else {
                copyFile(sourceFile, destinationFile);
            }
        });
    });
});
