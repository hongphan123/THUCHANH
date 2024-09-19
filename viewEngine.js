const viewEngine = (app) => {
    app.set("view engine", "ejs")
    app.set("veiws", "./")
}
export default viewEngine