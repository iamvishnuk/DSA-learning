// random-file.ts
// Run: npx ts-node random-file.ts ./leetcode

import fs from 'fs';
import path from 'path';

function getAllFiles(dir: string): string[] {
  let results: string[] = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

const targetFolder = process.argv[2];

if (!targetFolder) {
  console.log('Please provide the folder path.');
  process.exit(1);
}

const files = getAllFiles(targetFolder);

if (files.length === 0) {
  console.log('No files found.');
  process.exit(1);
}

const randomIndex = Math.floor(Math.random() * files.length);
const randomFile = files[randomIndex];

console.log('\nRandom Problem for Revision:\n');
console.log(path.basename(randomFile));
