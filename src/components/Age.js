import './Age.css';

function Age() {
  function age(){
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    var date = new Date();
 
    var d2 = date.getDate();
    
    var m2 = 1+date.getMonth();
   
    var y2 = date.getFullYear();
                                                                                                                                                                                      
    var month = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    if(d1>d2){
     d2 = d2 + month[m2 - 1]; 
     m2 = m2 - 1;
    }
    else if(m1>m2){
      m2 = m2 + 12;
      console.log(m2);
      y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById('age').innerHTML = ` "Your age is " ${y} " Years " ${m} " Months " ${d} " Days"🎂`;
 
  }
  return (
   
    <div className="container">
      <form>
        <div className="base">
          <div className="enter">
            <h4>Age Calculator</h4>
          </div>
          <div className="block">
            <p className="title">Date</p>
            <input type="text" name="date" id="date" placeholder="dd" required="required" minLength="1" maxLength="2"></input>
          </div>
          <div className="block">
          <p className="title">Month</p>
          <input type="text" name="month" id="month" placeholder="mm" required="required" minLength="1" maxLength="2"></input>
          </div>
          <div className="block">
          <p className="title">Year</p>
          <input type="text" name="year" id="year" placeholder="yyyy" required="required" minLength="4" maxLength="4"></input>
          </div>
        </div>
        <div className="base">
          <div className="enter">
            <input type="button" name="submit" value="Submit" onClick={age}></input>
          </div>
        </div>
        <div id="age"></div>
      </form>
    
    </div> 
  );
}

export default Age;
