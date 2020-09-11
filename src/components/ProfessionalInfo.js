import React, {Component} from 'react';

class ProfessionalInfo extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const {handleChange, companyName, jobTitle, twitter, facebook, reactRating, summary} = this.props;
        return(
            <>
                <h2>Enter your Professional details:</h2>
                <form>
                <label>
                    <input
                        type='text'
                        name='companyName'
                        placeholder="Company"
                        value = {companyName}
                        onChange={handleChange('companyName')}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type='text'
                        name='jobTitle'
                        placeholder="Job Title"
                        value = {jobTitle}
                        onChange={handleChange('jobTitle')}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type='url'
                        name='twitter'
                        placeholder="Social Profile Link 1"
                        value = {twitter}
                        onChange={handleChange('twitter')}
                    />
                </label>
                <br/>
                <label>
                    <input
                        type='url'
                        name='facebook'
                        placeholder="Social Profile Link 2"
                        value = {facebook}
                        onChange={handleChange('facebook')}
                    />
                </label>
                <br/>
                <label className= 'rangeslider'>
                   <p> Rate Yourself in React (1 to 10) :  </p>
                   <br/>
                    <input
                        type='range'
                        min= '1'
                        max= '10'
                        className= 'mysilder'
                        id= 'sliderrange'
                        name='reactRating'
                        placeholder="Rate yourself in React"
                        value = {reactRating}
                        onChange={handleChange('reactRating')}
                    />
                </label>
                <br/>
                <label>
                    <textarea
                        type='text'
                        name='summary'
                        placeholder="Summary"
                        value = {summary}
                        onChange={handleChange('summary')}
                    />
                </label>
                <br/>
                </form>

                <button className = 'Back' onClick = {this.back}>
                    Previous 
                </button>

                <button className = 'Next' onClick = {this.continue}>
                    Next 
                </button>

                
            </>
        );
    }
}

export default ProfessionalInfo;