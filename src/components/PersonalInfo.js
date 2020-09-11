import React, {Component} from 'react';


class PersonalInfo extends Component{
    
   
    continue = e => {
        e.preventDefault();
       
        this.props.nextStep();

    }
    
    render(){

        
        const {handleChange, firstName, lastName, mobile, email, currentCity, dob} = this.props;
        return(
            <>
                <h2>Enter your personal details:</h2>
                <form >
                <label htmlFor = 'firstname'>
                    <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        placeholder="First Name"
                        value = {firstName}
                        onChange={handleChange('firstName')}
                        required = 'required'
                        
                    />
                </label>
                <br/>
                <label htmlFor='lastName'>
                    <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        placeholder="Last Name"
                        value = {lastName}
                        onChange={handleChange('lastName')}
                    />
                </label>
                <br/>
                <label htmlFor='mobile'>
                    <input
                        type='tel'
                        name='mobile'
                        id = 'mobile'
                        placeholder="Mobile No."
                        value = {mobile}
                        onChange={handleChange('mobile')}
                    />
                </label>
                <br/>
                <label htmlFor = 'email'>
                    <input
                        type='email' required
                        name='email'
                        id='email'
                        placeholder="Email"
                        value = {email}
                        onChange={handleChange('email')}
                    />
                </label>
                <br/>
                <label htmlFor='currentCity'>
                    <select 
                        type='text'
                        name='currentCity'
                        id='currentCity'
                        placeholder="Select City"
                        value = {currentCity}
                        onChange={handleChange('currentCity')}
                    >
                        <option value="select">Select City</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                    
                    </select>
                </label>
                <br/>
                <label htmlFor='dob'>
                    <input
                        type='date'
                        name='dob'
                        id='dob'
                        required='required'
                        placeholder="DD/MM/YYYY"
                        value = {dob}
                        onChange={handleChange('dob')}
                    />
                </label>
                <br/>
                </form>
                <button className = 'Next' onClick = {this.continue}>
                    Next 
                </button>
            </>
        );
    }
}

export default PersonalInfo;