require('express')()
.get("/", (req, res) => {
    return res.send("hi from")

})

.get("/study", (req, res) => {
        return res.send("Página Study")  

})
 
.listen(5500)