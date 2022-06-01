import fs from 'fs';
const path = './files';
const path_copy = './files_copy';
export const copy = async () => {
  let copy = [];
   fs.readdir(path, function(err, items) {
    if(err) {
      throw new Error('FS operation failed')
    } else {
      if (!fs.existsSync(path_copy)){
        fs.mkdirSync(path_copy);
      } else {
        throw new Error('FS operation failed')
        return
      }
      for (let i=0; i<items.length; i++) {
          copy = [...copy, items[i]]
          fs.copyFile( `${path}/${items[i]}`, `${path_copy}/${items[i]}`, function(err) {} )
      }
    }
});
};

copy()