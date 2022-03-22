import React from "react";
import './AgeCal.css'

function generateArray(start,end){         
    let arr = [];
    for(start; start <= end; start++){
      arr.push(start);
    }
    return arr;
 }
 
 const months =  ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; 
 //1-31
 const days = generateArray(1,31);
 //1900-today
 const years = generateArray(1900,(new Date).getFullYear());
 
 //calculate age
 function calculateAge(birthday){
   //milliseconds in a year 1000*24*60*60*365.24 = 31556736000; 
   let today = new Date(),
       //birthay has 'Dec 25 1998'
       dob = new Date(birthday),
       //difference in milliseconds
       diff = today.getTime() - dob.getTime(),
       //convert milliseconds into years
       years = Math.floor(diff / 31556736000),
       //1 day has 86400000 milliseconds
       days_diff= Math.floor((diff % 31556736000) / 86400000),
       //1 month has 30.4167 days
       months = Math.floor(days_diff / 30.4167),
       days = Math.floor(days_diff % 30.4167);
      
      console.log(`${years} years ${months} months ${days} days`);
      return `${years} years ${months} months ${days} days`;
 }
 
 
 class AgeCalculator extends React.Component{
   constructor(props){ 
     super(props);
     this.state = {
       day : 25,
       month : 'Dec',
       year :  1998,
       age: '20 years 11 months 28 days'
     };
     
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleDayChange = this.handleDayChange.bind(this);
     this.handleMonthChange = this.handleMonthChange.bind(this);
     this.handleYearChange = this.handleYearChange.bind(this);
   }
 
   handleDayChange(e){
     this.setState({
       day: e.target.value 
     });
   }
 
   handleMonthChange(e){
     this.setState({
       month: e.target.value 
     });
   }
 
   handleYearChange(e){
     this.setState({
       year: e.target.value 
     });
   }
 
   handleSubmit(e){
     e.preventDefault();
 
     const day = this.state.day,
         month = this.state.month,
         year = this.state.year;
     
     let age =  calculateAge(`${month} ${day} ${year}`);
 
     this.setState({
       age: age
     });
 
   }
 
   render(){
 
     return <div className = "container">
         <div className="enter">
       <h3>Age Calculator</h3>
       </div>
       <form onSubmit = {this.handleSubmit}>
         <div className="block">
         <p className="title">Date</p>
           <Input arr = {days} handleChange = {this.handleDayChange} val = {this.state.day} />
        </div>

        <div className="block">
         <p className="title">Month</p>
           <Input arr = {months} handleChange = {this.handleMonthChange} val = {this.state.month} />
        </div>

        <div className="block">
         <p className="title">Year</p>
           <Input arr = {years} handleChange = {this.handleYearChange} val = {this.state.year} />
        </div>
    
        <div className="btn">
         <button type="submit">Calculate</button>
        </div>
         
       </form>
    
       <article className="app">
         <h2>Your age is</h2>
          <span>{this.state.age}</span>
       </article>
       {/* <footer>Made with <a href="https://reactjs.org/" target="_blank" >ReactJS</a>
       </footer> */}
     </div>;
   }
 
 }
 
 function Input(props){
   let options = props.arr.map((item)=> <option value={item} key={item}>{item}</option>);
                               
    return  <select onChange = {props.handleChange} value={props.val}>
                {options}
             </select>;
    }
 
 export default AgeCalculator
 
//  ReactDOM.render(<AgeCalculator />,document.getElementById('root'));
 