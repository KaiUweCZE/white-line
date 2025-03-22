export const fixIndentation = (text: string) => {
  // Rozdělíme text na řádky
  const lines = text.split('\n');

  // Odstraníme odsazení z každého řádku
  const fixedLines = lines.map((line) => line.trimStart());

  // Spojíme zpět do textu
  return fixedLines.join('\n');
};
