const PORT = process.env.PORT || 6969
const app = require('./app')

const init = async () => {
  try {
    // if(process.env.SEED === 'true'){
    //   await seed();
    // }
    // else {
    //   await db.sync()
    // }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`wElCoMe To PoRt ${PORT}`))
  } catch (ex) {
    console.log(ex)
  }
}

init()
