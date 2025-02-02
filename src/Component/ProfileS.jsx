import React from "react"

class ProfileS extends React.Component{
    constructor(props){
        super(props)
        console.log("Child 2 - Constructor")
        
    }

    componentDidMount(){
        console.log("Child 2 - Component Did Mount")

    }

    render(){
        console.log("Child 2 - render")
        return(
            <h1>Shrabani</h1>
        )

    }
}

export default ProfileS