const mongoose = require('mongoose')
const urls = mongoose.model('urls')

module.exports = {
    async find(req, res, next){
        let TestFoundHttps
        req.setTimeout(60000)
        const FindUrl = await urls.findById(req.params.id)
        if(FindUrl === null) return res.status(404).send({"err":"mistake! Page not found cod:(404)"})
        else TestFoundHttps = /\bhttps/i

        if(TestFoundHttps.test(FindUrl.url) === true) return res.status(301).redirect(FindUrl.url)
        else return res.status(301).redirect("https://" + FindUrl.url)
    }  
}