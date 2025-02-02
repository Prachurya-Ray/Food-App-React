import React from "react"

class Profile extends React.Component{
    constructor(props){
        super(props)
        console.log("Child 1 - Constructor")
    }

    componentDidMount(){
        console.log("Child 1 - Component Did Mount")
    }



    render(){
        console.log("Child 1 - render")
        return(
            <>
                <h1>Prachurya Ray</h1>
                <h2>{this.props.nickname}</h2>
            </>
            
        )
    }
}

export default Profile