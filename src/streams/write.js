import fs from 'fs';
const fileToWrite = './files/fileToWrite.txt'

export const write = async () => {
    const writableStream = fs.createWriteStream(fileToWrite);
    process.stdin.on('data', data => {
      writableStream.write(data)
    })
};

write()