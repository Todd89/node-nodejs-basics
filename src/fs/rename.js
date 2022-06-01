import fs from 'fs';
const path = './files/wrongFilename.txt';
const new_path = './files/properFilename.md'

export const rename = async () => {
  fs.promises.rename( path, new_path).catch((err)  => {
    if(err) {
      if (err.code === 'ENOENT')  throw new Error('FS operation failed')
    }
  })
};

rename();