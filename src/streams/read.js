import fs from 'fs';
const fileToRead = './files/fileToRead.txt'
export const read = async () => {
   const readableStream = fs.createReadStream(fileToRead);
   readableStream.on('data', (chank)=> {
    process.stdout.write(chank)
   })
};

read()