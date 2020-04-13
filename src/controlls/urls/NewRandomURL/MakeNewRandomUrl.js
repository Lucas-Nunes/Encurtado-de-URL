module.exports = { 
    Create(){
        min = Math.ceil(5)
        max = Math.floor(10)
        const RandomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        let RandomUrl = ""
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for (let i = 0; i < RandomNumber; i++){
            RandomUrl += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return RandomUrl
    }
}