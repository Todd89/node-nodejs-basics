global.RSS_name1 = 10;
global.RSS_name2 = 20;


export const parseEnv = () => {
  const val = Object.keys(global).filter(item => item.match(/RSS_/gi));
  val.forEach(item => { 
    console.log(`${item} = ${global[item]}`)
})
};






