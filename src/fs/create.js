import fs from 'fs'

export const create = async () => {
   fs.promises.access('./files/fresh.txt', fs.constants.F_OK).then(() => console.log('Exist'))
  .catch(() => fs.writeFile('./files/fresh.txt', 'I am fresh and young', function (err) {
             if (err) throw err;
         console.log('Error');
       }) );


      fs.stat('foo.txt', function(err) {
        if(err == null) {
            console.log('File exists');
        } else if(err.code === 'ENOENT') {
          console.log('File exists');
          fs.writeFile('log.txt', 'Some log\n', function (err) {
            if (err) throw err;
        console.log('Error');
      });
        } 
    })
       }


    


create()