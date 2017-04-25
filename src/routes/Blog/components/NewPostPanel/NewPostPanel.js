import React, { PropTypes, Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
import classes from './NewPostPanel.scss'
import { ValidatorForm, TextValidator, DateValidator } from 'react-material-ui-form-validator';

export default class NewPostPanel extends Component {
    constructor(props) {
        super(props)
        this.resetState();
        this.handleChange = this.handleChange.bind(this)
    }


    static propTypes = {
        onNewClick: PropTypes.func,
    }

    resetState = () => {
        this.state = {
            post: {
                title: '',
                subTitle: '',
                text: '',
                imageUrl: ''
            }
        }
    }

    handleChange(event) {
        const { post } = this.state
        post[event.target.name] = event.target.value;
        this.setState({ post });
    }

    handleChangeDate = (event, date) => {
        const { post } = this.state
        post.date = date.getTime()
        this.setState({ post });
    }

    handleDateNow = (event) => {
        const MaxVal = 9999999999999;
        var date = new Date();
        const { post } = this.state
        post.date = date.getTime()
        post.num = MaxVal - post.date;
        this.setState({ post });
    }

    handleAdd = () => {
        const data = this.state.post
        this.props.onNewClick(data)
        this.resetState()
        this.setState(this.state);
    }

 //  <div className={classes.inputSection}>
 //       <DatePicker
 //            floatingLabelText='Date'
 //            ref='newPost'
 //            onChange={this.handleChangeDate}
 //      />
 //  </div>


    render () {
        const { post } = this.state;

        return (
            <Paper className={classes.container}>
                <ValidatorForm
                    onSubmit={this.handleAdd.bind(this)}
                >
                    <Subheader>Nouvel Article</Subheader>
                    <div className={classes.inputSection}>
                        <TextValidator
                            floatingLabelText='Titre'
                            onChange={this.handleChange}
                            name="title"
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={post.title}
                        />
                    </div>
                    <div className={classes.inputSection}>
                        <TextValidator
                            floatingLabelText='Sous-Titre'
                            name="subTitle"
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={post.subTitle}
                        />
                    </div>
                    <div className={classes.inputSection}>
                        <TextValidator
                            floatingLabelText='Contenu Blog'
                            name="text"
                            multiLine={true}
                            rows={3}
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={post.text}
                        />
                    </div>
                    <div className={classes.inputSection}>
                        <TextValidator
                            floatingLabelText='ImageUrl'
                            name="imageUrl"
                            onChange={this.handleChange}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={post.imageUrl}
                        />
                    </div>
                    <div className={classes.inputSection}>
                        <RaisedButton
                            label="Publier"
                            type="submit"
                            onClick={this.handleDateNow}
                        />
                    </div>
                </ValidatorForm>
            </Paper>
        )
    }
}
