import ProfileCard from "./components/profilecard";
import { Component } from "react";

class App extends Component {
  constructor() {
    super ();
    this.handClick =this.handClick.bind(this);
    this.state ={
      writers:{
        loading:false,
        list:[]
      }
    };
  }
  handClick(){
    this.setState({
      writers:{
        loading:true

      }
    });
   setTimeout(async()=>{
     let resp = await fetch("/writers.json");
     let result = await resp.json();


     this.setState({
       writers:{
       loading:false,
       list: result

       }
     });
    }, 3500);
  }


  render() {
    const {
      writers:{loading, list}
    } = this.state;
    if (loading) {
      return (
         <div>
          <h1>writers Profile</h1>
          <div className="container">
         <div className="card action">
         <p className="infoText">loading...</p>
</div>
</div>
</div>
);      

  }
return(
  <div>
  <h1>writers Profiles</h1>
  <div className="container">
  {list.length ===0 ? (
    <div className="card action">
    <p className="infoText">Oops... no writer profile found</p>
    <button className="actionBtn" onClick={this.handle}>Get Writers</button>
    </div>
  ):(
    list.map((writers) =>(
      <ProfileCard key={writers.id} writer={writers}/>
    ))
  )}
   </div>
   </div>
   );
   }
   }
export default App;
