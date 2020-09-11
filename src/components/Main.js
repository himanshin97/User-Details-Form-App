import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';
import DisplayInfo from './DisplayInfo';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Main extends Component{
    state = {
        step: 1,

        //step 1
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        currentCity: '',
        dob: '',

        

        //step 2
        companyName:'',
        jobTitle: '',
        twitter: '',
        facebook:'',
        reactRating: '',
        summary:'',

     
   };

   nextStep = () =>{
       const {step} = this.state;
       

       this.setState({
           step: step + 1
       });
   }

   prevStep = () =>{
       const {step} = this.state;

       this.setState({
           step: step - 1
       });
   }

   handleChange = input => e => {
        this.setState({[input]: e.target.value});
        
   }

   showStep = () => {
       const {step, firstName, lastName, 
                mobile, email, currentCity, 
                dob, companyName, jobTitle, 
                twitter, facebook, reactRating, 
                summary } = this.state;
       if(step === 1)
            return (
                <div>
                <ProgressBar animated now = {5} />
                <PersonalInfo
                    handleChange = {this.handleChange}
                    nextStep = {this.nextStep}
                    firstName = {firstName}
                    lastName = {lastName}
                    mobile = {mobile}
                    email = {email}
                    currentCity = {currentCity}
                    dob = {dob}
                   
                />

                </div>
        );

        if (step === 2)
            return(
                <div>
                    <ProgressBar animated now = {40} />
                <ProfessionalInfo
                    handleChange = {this.handleChange}
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    companyName = {companyName}
                    jobTitle = {jobTitle}
                    twitter = {twitter}
                    facebook = {facebook}
                    reactRating = {reactRating}
                    summary = {summary}
                />
                </div>
        );

        if (step === 3)
            return(
                <div>
                    <ProgressBar animated now = {75} />
                <DisplayInfo 
                    firstName = {firstName}
                    lastName = {lastName}
                    mobile = {mobile}
                    email = {email}
                    currentCity = {currentCity}
                    dob = {dob}
                    companyName = {companyName}
                    jobTitle = {jobTitle}
                    twitter = {twitter}
                    facebook = {facebook}
                    reactRating = {reactRating}
                    summary = {summary}
                    prevStep = {this.prevStep}
                />
                </div>
            )
   }

   render(){
       const {step} = this.state;
       return(
            <>
                <h2>Step {step} of 3.</h2>
                {this.showStep()}
            </>
       );
   }
}