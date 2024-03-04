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
    const instructionContent = await fs.readFile('instrukce.txt', 'utf-8');
    const num = parseInt(instructionContent);

    if (isNaN(num)) {
      console.error('Chyba: Obsah souboru "instrukce.txt" není platné číslo.');
      return;
    }

    await createFiles(num);

    console.log('Všechny soubory byly úspěšně vytvořeny.');

  } catch (error) {
    console.error(`Chyba: ${error.message}`);
  }
}

main();
