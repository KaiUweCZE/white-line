export const formatArticleText = (text: string) => {
  // Rozdělíme text podle dvojitých zalomení řádků na odstavce
  const paragraphs = text.split('\n\n');

  return paragraphs.map((paragraph, index) => {
    // Pro každý odstavec zpracujeme jednotlivé řádky
    const lines = paragraph.split('\n');
    return (
      <p key={index} className="mb-4">
        {lines.map((line, lineIndex) => (
          // Pro každý řádek přidáme <br> pokud není poslední
          <span key={lineIndex}>
            {line}
            {lineIndex < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
};
