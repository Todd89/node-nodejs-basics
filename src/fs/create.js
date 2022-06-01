import fs from 'fs'

export const create = async () => {
   fs.promises.access('./files/fresh.txt', fs.constants.F_OK).then(() => {
    throw new Error('FS operation failed')
   })
  .catch(() => fs.writeFile('./files/fresh.txt', 'I am fresh and young', function (err) {
             if (err) throw err;
         console.log('Error'); throw new Error('FS operation failed')
       }));
      }
create()