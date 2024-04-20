
// It's async (takes a while to process) so it returns a promise
mongoose.connect(process.env.MONG_URL)
    .then(() => {
        // Set the server to listen on a port
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB. Server listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })