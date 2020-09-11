import React,  {Component} from 'react';


class DisplayInfo extends Component{

    back = e => {
        e.preventDefault();
        this.props.prevStep();

    }

  
    render(){

        const { firstName, lastName, mobile, email,
            currentCity, dob, companyName, jobTitle, 
            twitter, facebook, reactRating, summary } = this.props;

            const submitAlert = () => {
               alert('Information Successfully Submitted');

                
            }
   
        return(
            <>
                <h2>Entered Information</h2>
                First Name : <b>{firstName}</b> <br/>
                Last Name : <b>{lastName}</b> <br/>
                Mobile No : <b>{mobile}</b> <br/>
                Email Id : <b>{email}</b> <br/>
                City : <b>{currentCity}</b> <br/>
                Date of Birth : <b>{dob}</b> <br/>
                Company Name : <b>{companyName}</b> <br/>
                Job Title: <b>{jobTitle}</b> <br/>
                Social Profile Link 1 : <b>{twitter}</b> <br/>
                Social Profile Link 2 : <b>{facebook}</b> <br/>
                Rate in React : <b>{reactRating}</b> <br/>
                Summary : <b>{summary}</b> <br/>
                <button className = 'Back' onClick = {this.back} >
                    Previous
                </button>
                <button className = 'Submit' onClick = {submitAlert}>
                    Submit
                </button>


            </>
        );
    }
}

export default DisplayInfo;