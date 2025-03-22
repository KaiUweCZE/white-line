export const formatDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.');
  const monthNames = [
    'leden',
    'únor',
    'březen',
    'duben',
    'květen',
    'červen',
    'červenec',
    'srpen',
    'září',
    'říjen',
    'listopad',
    'prosinec',
  ];

  // Pokud dateString obsahuje již formátované datum (např. "10.říjen 2024")
  if (dateString.includes(' ')) {
    return dateString;
  }

  if (day && month && year) {
    return `${day}. ${monthNames[parseInt(month) - 1]} ${year}`;
  }

  return dateString; // Vrátí původní řetězec, pokud formát neodpovídá
};
