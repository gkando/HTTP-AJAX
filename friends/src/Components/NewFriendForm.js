import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Title from './Title'

class NewFriendForm extends React.Component {
    state = {
        newData: {
            name: '',
            age: '',
            email: '',
        },
        postSuccessMessage: '',
        postError: '', 
        id: ''

      }

      componentDidMount() {
        // change this line to grab the id passed on the URL
        const flag = this.props.location.flag
        console.log(this.props)
        if (flag == 'update'  || flag == 'delete'){this.setState(
            {newData: {
                name: this.props.location.name, 
                age: this.props.location.age, 
                email: this.props.location.email
            },
            id: this.props.location.id
    })

        }
      }

      handleSubmit = event => {
        event.preventDefault();
        const flag = this.props.location.flag
        const  { name, age, email } = this.state.newData
        
        if (flag == 'update'){
            let url =  'http://localhost:5000/friends/' + this.state.id
            axios.put(url, { name, age, email })
            .then(response => {
                console.log(response);
                this.setState({
                    postSuccessMessage: response.data.successMessage,
                    postError: ""
                });
                })
                .catch(err => {
                console.log(err);
                this.setState({
                    postSuccessMessage: "",
                    postError: err.response.data.Error
                });
                }
                );
            window.location = 'http://localhost:3000/'
        }
            if (flag == 'delete'){
                axios.delete(`http://localhost:5000/friends/${this.state.id}`)
                .then(response => {
                    console.log(response);
                    this.setState({
                        postSuccessMessage: response.data.successMessage,
                        postError: ""
                    });
                    })
                    .catch(err => {
                    console.log(err);
                    this.setState({
                        postSuccessMessage: "",
                        postError: err.response.data.Error
                    });
                    }
                    );
                window.location = 'http://localhost:3000/'
            }
            else {

        
            axios
            .post("http://localhost:5000/friends",  { name, age, email })
            .then(response => {
            console.log(response);
            this.setState({
                postSuccessMessage: response.data.successMessage,
                postError: ""
            });
            })
            .catch(err => {
            console.log(err);
            this.setState({
                postSuccessMessage: "",
                postError: err.response.data.Error
            });
            });
        window.location = 'http://localhost:3000/'
        }
  }

    handleChange = e => {
        this.setState({
            newData: {
                ...this.state.newData,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.newData)
    }

    render() {
    return(
        <div>
            <Title title={this.props.location.title} />
        <form  className='new-friend-form' onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField
                id="outlined-name"
                label="Name"
                name='name'
                value={this.state.newData.name}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />

            <TextField
                id="outlined-number"
                label="Age"
                name='age'
                value={this.state.newData.age}
                onChange={this.handleChange}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
                variant="outlined"
            />

            <TextField
                id="outlined-email-input"
                label="Email"
                name="email"
                value={this.state.newData.email}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
            />
        <Button variant="contained" type="submit" color="primary" size="medium">
        {this.props.location.title}
        </Button>
            </form>

        </div>
    );
}
}

export default NewFriendForm