import Profile from "./Profile";
import React from "react"
import ProfileS from "./ProfileS";


class About extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count:0,
            sum: 0,

            userInfo:{
                name: 'Lorem Ipsum',
                bio: 'Lorem Ipsum'
            }
        }
        console.log("Parent COnstructor")
    }

    async componentDidMount(){
        const api = await fetch("https://api.github.com/users/prachurya-ray")
        const data = await api.json()
        console.log(data)
        console.log("Parent Component Did Mount")
    }


    render(){
        console.log("Parent Render")
        const {sum} = this.state;
        return(
            <div className="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <h2>Count: {this.state.count}</h2>
                <h2>Sum: {sum}</h2>
                <button
                    onClick={()=>{
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >Increase</button>
                
                <h3>{this.state.userInfo.bio}</h3>
    
                <Profile nickname={"Lincoln"}/>
                <ProfileS/>
                
            </div>
        )
    }
}

export default About;