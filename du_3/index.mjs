import fs from 'fs/promises'

async function createFiles(num) {
  const promises = [];

  for (let i = 0; i < num; i++) {
    const fileName = `${i}.txt`;
    const fileContent = `Soubor ${i}`;

    const promise = fs.writeFile(fileName, fileContent);
    promises.push(promise);
  }

  await Promise.all(promises);

  console.log(`Vytvořeno ${num} souborů.`);
}

async function main() {
  try {
    // Přečtení obsahu souboru "instrukce.txt"
    const instructionContent = await fs.readFile('instrukce.txt', 'utf-8');
    const num = parseInt(instructionContent);

    // Kontrola, zda se jedná o platné číslo
    if (isNaN(num)) {
      console.error('Chyba: Obsah souboru "instrukce.txt" není platné číslo.');
      return;
    }

    // Vytvoření souborů paralelně pomocí Promise.all
    await createFiles(num);

    // Informativní hláška
    console.log('Všechny soubory byly úspěšně vytvořeny.');

  } catch (error) {
    console.error(`Chyba: ${error.message}`);
  }
}

// Spuštění hlavní funkce
main();
