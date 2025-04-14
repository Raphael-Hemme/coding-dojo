// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
// 4 kyu - Strip Comments

const getUnstrippedLineSegment = (line, markers = []) => {
  if (!markers.length) {
    return line.trimEnd();
  }
  const matchingIndexes = [];
  markers.forEach(marker => matchingIndexes.push({ marker, idx: line.indexOf(marker) }));
  const sortedAndFilteredIndexes = matchingIndexes.filter(match => match.idx >= 0)
                                                  .sort((a, b) => a.idx - b.idx);
  const firstMatch = sortedAndFilteredIndexes[0];
  return (firstMatch && line.includes(firstMatch.marker))
    ? line.split(sortedAndFilteredIndexes[0].marker)[0].trimEnd()
    : line.trimEnd();
}

export const stripComments = (text, markers) => {
  return text.split('\n')
    .map(line => getUnstrippedLineSegment(line, markers))
    .join('\n');
}
