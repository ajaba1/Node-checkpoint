import fs from "fs";

const fileName = "welcome. txt";
const fileContent = "hello node";

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error("error writing to file:", err);
  } else {
  }
});

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error("error writing to file:", err);
  } else {
    console.log("file content:", data);
  }
});
