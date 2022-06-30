import React from "react";

class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state= {posts:[]};
    }

    componentDidMount(){
        fetch('https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users')
        .then(
            (response)=>response.json())
        .then((res) => {
                this.setState({posts:res});
              
              })              
    }
   
    render(){
        const pos= this.state.posts;
        return(
            <>
            {pos.map((item)=>{
            return(
                <div key={item.id}>
                <div> {item.name}</div>
                <div> {item.id}</div>
                </div>
            );}
            )
            
            }
            </>
        );
    }
}
export default App2;