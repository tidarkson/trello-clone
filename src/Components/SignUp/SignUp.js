import React, { Component } from 'react';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            errors: []
        };
        this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
        this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
        this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
        this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);

    }


    displayForm() {
        return (
            <>
                <input type="text" placeholder="Username" onBlur={this.validateUsernameOnBlur}></input> <br />
                <input type="text" placeholder="Password" onBlur={this.validatePasswordOnBlur}></input><br />
                <input type="text" placeholder="Confirm password" onBlur={this.validatePasswordConfirmationOnBlur}></input><br />
                <input type="text" placeholder="Email" onBlur={this.validateEmailOnBlur}></input><br />
                <button onClick={this.submitForm}>Submit</button>
            </>
        )
    }

    submitForm(e) {
        console.log("Submitting the form now...");
        console.log(e)
    }

    validateUsernameOnBlur = e => {
        const username = e.target.value;
        const errors = this.state.errors;
        errors.push(this.validateNotEmpty("Username", username));
        this.setState({ username, errors });
    }

    validatePasswordOnBlur = e => {
        const password = e.target.value;
        const errors = this.state.errors;
        errors.push(this.validateNotEmpty("Password", password));
        this.setState({ password, errors });
    }

    validatePasswordConfirmationOnBlur(e) {
        const passwordConfirmation = e.target.value;
        const errors = this.state.errors;
        if (passwordConfirmation !== this.state.password) {
            errors.push("Password must match password confirmation.");
        }
        this.setState({ passwordConfirmation, errors });
    }

    validateEmailOnBlur(e) {
        const email = e.target.value;
        const errors = this.state.errors;
        errors.push(this.validateEmailFormat("Email", email));
        this.setState({ email, errors });
    }

    validateEmailFormat(fieldName, value) {
        let [lhs, rhs] = value.split('@');
        lhs = lhs || '';
        rhs = rhs || '';
        if (lhs.length <= 0 || rhs.length <= 0) {
            return `${fieldName} must be in a standard email format.`;
        }
    }

    displayErrors() {
        return (
            <div className="errors">
                {this.state.errors.map((err, i) => <p key={`err-${i}`}>{err}</p>)}
            </div>
        );
    }

    validateNotEmpty(fieldName, value) {
        if (value.length <= 0) {
            return `${fieldName} must be filled out.`;
        }
    }

    render() {
        return (
            <div className="sign-up-form">
                <h1>Create An Account</h1>
                {this.displayErrors()}
                {this.displayForm()}
            </div>
        )
    }
}

export default SignUp

