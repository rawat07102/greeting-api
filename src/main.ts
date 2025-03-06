import Express from "express"

const app = Express()

app.get("/api/greet", (req, res) => {
    const name = req.query.name
    if (!name) {
        res.json({
            error: "name is required."
        })
        return
    }
    res.json({
        message: `Hello, ${name}! Welcome to Younglabs.`,
    })
})
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))
