const mongoose = require('mongoose')
const urls = require('mongoose').model('urls');
const MakeNewRandomUrl = require('./NewRandomURL/MakeNewRandomUrl.js')

module.exports = {
    async add(req, res, next){
        const NewRandomUrl = MakeNewRandomUrl.Create()
        const _id = NewRandomUrl
        const url = req.body.url
        if(url == "") return res.send({"err":"Mistake! Please enter a valid URL."})
        else{
            const pont = /\./i
            const espace = /[\ ]/i
            if(pont.test(url) === false) return res.send({"err":"Mistake! Please enter a valid URL."})
            else if(espace.test(url) === true) return res.send({"err":"Mistake! Please enter a valid URL."})
            else if(url.length === 2000){
                    return res.send({"err":"Mistake! URL longer than 2000 characters"})
            }else{
                let NewUrlData = {"NewUrl":"https://localhost:8443/" + NewRandomUrl, url, _id}
                await urls.create(NewUrlData)
            
                let NewUrl = {"NewUrl":"https://localhost:8443/" + NewRandomUrl} 
                return res.send(NewUrl)
            }
        }
    }
}