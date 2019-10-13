import React, { Component } from 'react';

export default class ContactPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="cus">Contact Us!</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          {/* contact details for the three different branches of TreeCo*/}
          <div className="col-sm-4">
            <p>
              <h3>Tree Co Mt Eden</h3>
              445 Mount Eden Road <br />
              Mount Eden <br />
              Auckland <br />
              Contact: Stephen Beck (09) 789 4455
          </p>
          </div>
          <div className="col-sm-4">
            <p>
              <h3>Tree Co East Tamaki</h3>
              29 Kerwyn Avenue <br />
              East Tamaki <br />
              Auckland 2013 <br />
              Contact: Amy Anderson (09) 789 4444
          </p>
          </div>
          <div className="col-sm-4">
            <p>
              <h3>Tree Co Albany</h3>
              67 Kell Drive <br />
              Albany <br />
              Auckland 0632 <br />
              Contact: Chris Wilson (09) 789 1458
          </p>
          </div>
        </div>
      </div>
    );
  }
}