// create your App component here
import React, { useEffect, useState } from "react"
function App() {
    const [image, setImage] = useState("")
    const [load, setLoad] = useState(false)

    useEffect(() => {