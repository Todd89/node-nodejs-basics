import  zlib from 'zlib';
import fs from 'fs';

export const compress = async () => {
  const gzip = zlib.createGzip();
  const  read = fs.createReadStream('./files/fileToCompress.txt');
  const  write = fs.createWriteStream('./files/archive.gz');
  read.pipe(gzip).pipe(write).on('finish', () => {
    fs.unlink('./files/fileToCompress.txt', err => {})
  });

};

compress()