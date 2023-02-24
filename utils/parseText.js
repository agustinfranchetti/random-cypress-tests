export const parseText = (inputText, outputLinesAmount) => {
  // Remove all whitespace from the input string
  inputText = inputText.replace(/\s/g, "");

  // Split the input string into an array of lines
  const allLines = inputText
    .split(/(?=cypress)/g)
    .filter((line) => line !== "");
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = allLines.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allLines[i], allLines[j]] = [allLines[j], allLines[i]];
  }
  // Pick the first numLinesToPick lines from the shuffled array
  const pickedLines = allLines.slice(0, outputLinesAmount);

  // Concatenate the picked lines into a single string separated by commas
  const pickedLinesString = pickedLines.join(",");
  const outputString = `npx cypress-repeat run -n 1 --spec ${pickedLinesString}`;
  // Output the final string
  return outputString;
};
