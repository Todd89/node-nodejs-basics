import fs from 'fs';
const path = './files/fileToRemove.txt'

export const remove = async () => {
    await fs.promises.unlink(path).catch((err) => {
      if(err && err.code === 'ENOENT') {
        throw new Error('FS operation failed')
      }
    })
};

remove()