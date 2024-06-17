import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

// Get the directory path of the current module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Remove leading '/' if present
const normalizedDirname = __dirname.startsWith('/') ? __dirname.slice(1) : __dirname;

const sourceFile = path.join(normalizedDirname, '../src/background.js');
const destinationFile = path.join(normalizedDirname, '../dist/background.js');

fs.copyFile(sourceFile, destinationFile, (err) => {
  if (err) {
    console.error(chalk.red('Error copying background.js:', err));
    process.exit(1); // Exit with failure status
  }
  console.log(chalk.green('background.js copied successfully.'));
});
