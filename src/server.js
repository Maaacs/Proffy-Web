require('express')()
.get("/", (req, res) => {
    return res.send("Hi from NLW")
})
.get("/study", (req, res) => {
    return res.send("Study")
}) 
.listen(5500)