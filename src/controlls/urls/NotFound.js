module.exports = {
    async error(req, res, next){
        return res.status(404).send({"err":"mistake! Page not found cod:(404)"})
    }
}