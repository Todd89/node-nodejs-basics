import fs from 'fs';
const file = './files/fileToRead.txt';

export const read = async () => {
    await fs.promises.readFile(file, 'utf8').then((res)=>{
      console.log(res)
    }).catch(err => {
      if(err) throw new Error('FS operation failed') 
    })
};

read()