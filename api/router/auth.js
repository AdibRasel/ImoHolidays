import express from "express"
const router = express.Router();


router.get("/", (req, res)=>{
    res.send("Hello This is auth end point")
})
router.get("/register", (req, res)=>{
    res.send("Hello This is auth Register end point")
})

export default router