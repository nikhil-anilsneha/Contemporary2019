import React from './node_modules/react';

class LoginForm extends React.Component {
    state = {
        date: {
            username: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

    render() {
        const { data } = this.state;
        return (
            <Form>
                <Form.Field>
                   <label htmlFor='Uname'>Name</label> 
                   <input 
                   type='Uname' 
                   id= 'Uname' 
                   name= 'Uname'
                   placeholder='example@example.com'
                   value={data.password}
                   onChange={this.onChange}
                   />
                </Form.Field>
                <Form.Field>
                   <label htmlFor='password'>Name</label> 
                   <input 
                   type='password' 
                   id= 'password' 
                   name= 'password'
                   placeholder='Make it secure'
                   value={data.password}
                   onChange={this.onChange}
                   />
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;