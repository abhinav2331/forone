/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as axios from "axios";
import { get, post } from './shared/api.service';
import { PasswordResetNotification } from './shared/notification/password.reset.notification';
import { debug } from 'util';

class Login extends React.Component<any, any>{
    form: HTMLFormElement;
    Useredetail: {};
    ResetObj: {};
    Rsetpassword: any;
    Resetcode: any;
    Verificationcode: {};
    VerrifcationCode: any;
    IsNotifyPasswordReset: boolean;
    constructor(props) {
        super(props);
        this.state = {
            Shown: false,
            Useredetail:
                {
                    Email: '',
                    Code: '',
                    Password: '',
                    ConfirmPassword: ''
                },
            Resetresponse: '',
            Resetcode: '',
            IsNotifyPasswordReset: false,
            Verificationcode:
                {
                    Code: '',
                    Email: '',
                    Password: '',
                    ConfirmPassword: ''
                },
            ResetObj: {
                Code: '',
                Email: '',
                Password: '',
                ConfirmPassword: ''
            },
            Resetformresponse: [],
            IsNotifypassReset: false,
        };


        this.NewSubmit = this.NewSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleNormalChange = this.handleNormalChange.bind(this);
        this.handleResetChange = this.handleResetChange.bind(this);
        this.ResetFormSubmit = this.ResetFormSubmit.bind(this);
    }



    componentWillMount(e) {
        const values = location.search.slice(6, 1000)
        console.log(values);

        this.setState({
            Resetcode: values,
            Verificationcode: {
                ...this.state.Verificationcode,
                Code: values
            }
        })
    }

    NewSubmit(e: any) {
        e.preventDefault();
        post("users/reset", this.state.Useredetail)
            .then(response => {
                console.log(response);
                this.setState({
                    Resetresponse: response,
                    IsNotifyPasswordReset: true
                })

            }).catch(error => {
                console.log(error)
            });
        this.form.reset();
    }

    handleNormalChange(e: any) {
        const nextState = {
            ...this.state,
            Useredetail: {
                ...this.state.Useredetail,
                [e.target.name]: e.target.value
            }
        }
        this.setState(nextState);
    }

    toggleForm() {
        this.setState({
            Shown: !this.state.Shown
        });
    }
    handleResetChange(e: any) {
        const nextStateReset = {
            ...this.state,
            Verificationcode: {
                ...this.state.Verificationcode,
                [e.target.name]: e.target.value
            }
        }
        this.setState(nextStateReset);
    }
    ResetFormSubmit(e: any) {
        //console.log(this.state.Verificationcode.Code); 
        e.preventDefault();
        post("users/reset/set-password", this.state.Verificationcode)
            .then(response => {
                console.log(response);
                this.setState({
                    Resetformresponse: response,
                    IsNotifypassReset: true,
                    Verificationcode: ""
                })
            }).catch(error => {
                console.log(error)
            });
        this.form.reset();
    }


    render() {
        var shown = {
            display: this.state.Shown ? "block" : "none"
        };

        var hidden = {
            display: this.state.Shown ? "none" : "block"
        };

        return (
            <div className="wrapper wrapper-full-page">

                <PasswordResetNotification
                    MessageReset={this.state.Resetresponse.statusText}
                    IsNotifyPasswordReset={this.state.IsNotifyPasswordReset}
                />
                <PasswordResetNotification
                    MessageResetPassword={this.state.Resetformresponse.statusText}
                    IsNotifypassReset={this.state.IsNotifypassReset}
                />

                <div className="page-header login-page header-filter" filter-color="black" style={{ backgroundImage: 'url(/public/images/sydney.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                    <div className="container">
                        <div className="col-md-4 col-sm-6 ml-auto mr-auto">
                            <div className="login_form">
                                <section>

                                    {/* Level 3*/}
                                    {
                                        this.state.Resetcode == "" ? <section>
                                            <div style={shown}> <section>
                                                <form onSubmit={this.NewSubmit} ref={(node) => { this.form = node }}>
                                                    <div className="card card-login card-hidden">
                                                        <div className="card-header card-header-rose text-center">
                                                            <h4 className="card-title">Reset Password</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-description text-center">Enter your Email to reset password</p>
                                                            <span className="bmd-form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">email</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="email" name="Email" onChange={this.handleNormalChange} className="form-control" placeholder="Email..." />
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className="card-footer justify-content-center">
                                                            <button type="submit" className="btn btn-success">Submit</button>
                                                        </div>
                                                        <p>
                                                            <a onClick={this.toggleForm} className="forgotPassword">Go back to Login!</a>
                                                        </p>
                                                    </div>
                                                </form>

                                            </section>
                                            </div>

                                            {/*Level 2*/}
                                            <div style={hidden}>
                                                <form method="post">
                                                    <div className="card card-login card-hidden">
                                                        <div className="card-header card-header-rose text-center">
                                                            <h4 className="card-title">Log in</h4>
                                                        </div>
                                                        <div className="card-body ">
                                                            <p className="card-description text-center">Enter your credentials to login</p>
                                                            <span className="bmd-form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">email</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="email" name="username" className="form-control" placeholder="Email..." />
                                                                </div>
                                                            </span>
                                                            <span className="bmd-form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">lock_outline</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="password" name="password" className="form-control" placeholder="Password..." />
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className="card-footer justify-content-center">
                                                            <button type="submit" className="btn btn-success">Login</button>
                                                        </div>
                                                        <div class="col-xs-12">
                                                            <a onClick={this.toggleForm} className="forgotPassword">Forgot Password?</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </section> : <div>
                                                <form ref={(node) => { this.form = node }} onSubmit={this.ResetFormSubmit}>
                                                    <div className="card card-login card-hidden">
                                                        <div className="card-header card-header-rose text-center">
                                                            <h4 className="card-title">Reset Password</h4>
                                                        </div>
                                                        <div className="card-body ">
                                                            <p className="card-description text-center">Enter your credentials to login</p>
                                                            <span className="bmd-form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">email</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="email" name="Email" onChange={this.handleResetChange} className="form-control" placeholder="Email" />
                                                                </div>
                                                            </span>
                                                            <span className="bmd-form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">lock_outline</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="Password" onChange={this.handleResetChange} className="form-control" placeholder="Password" />
                                                                </div>
                                                            </span>
                                                            <span className="bmd-form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text">
                                                                            <i className="material-icons">lock_outline</i>
                                                                        </span>
                                                                    </div>
                                                                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="ConfirmPassword" onChange={this.handleResetChange} className="form-control" placeholder="Confirm Password" />
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className="card-footer justify-content-center">
                                                            <button type="submit" className="btn btn-success">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                    }
                                </section>

                            </div>
                            <p className="alert alert-danger login-result" style={{ "display": "none" }}>We didn't recognise the username or password entered, please try again</p>
                        </div>
                    </div>
                    <footer className="footer ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12" style={{ color: "#ffffff" }}>
                                    &copy; {new Date().getFullYear()}
                                </div>
                            </div>

                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

if (typeof window !== 'undefined') {
    ReactDOM.render(<Login />, document.getElementById('root'));
}