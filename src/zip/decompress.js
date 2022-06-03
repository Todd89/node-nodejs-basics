import  zlib from 'zlib';
import fs from 'fs';


export const decompress = async () => {
  const gUnZip = zlib.createUnzip();
  const  read = fs.createReadStream('./files/archive.gz');
  const  write = fs.createWriteStream('./files/fileToCompress.txt');
  read.pipe(gUnZip).pipe(write).on('finish', () => {
      fs.unlink('./files/archive.gz', err => {})
  });
  
};

decompress()