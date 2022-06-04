export const parseArgs = () => {
  const val =  process.argv.filter(el => {
    return el.match(/--/gi)
  });
  console.log(val)
  val.forEach(el => {
  const index = process.argv.indexOf(el)
   console.log(`${process.argv[index]} is ${process.argv[index + 1]}`)
  })
};

