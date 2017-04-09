import React, { PropTypes, Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Subheader from 'material-ui/Subheader'
import classes from './NewPostPanel.scss'

export default class NewPostPanel extends Component {
  static propTypes = {
    onNewClick: PropTypes.func,
    disabled: PropTypes.bool
  }

  handleAdd = () => {
    const { newPost } = this.refs
    const data = this.state
    this.props.onNewClick({ data, done: false })
    newPost.value = ''
  }

  handleChangeDate = (event, date) => {
    this.setState({
      date: date.toString()
    });
  };

  render () {
    const { disabled } = this.props

    return (
        <Paper className={classes.container}>
            <Subheader>Nouvel Article</Subheader>
            <div className={classes.inputSection}>
                <TextField
                    floatingLabelText='Titre'
                    ref='newPost'
                    onChange={({ target }) => this.setState({titre: target.value})}
                />
            </div>
            <div className={classes.inputSection}>
                <TextField
                    floatingLabelText='Sous-Titre'
                    ref='newPost'
                    onChange={({ target }) => this.setState({subTitle: target.value})}
                />
            </div>
            <div className={classes.inputSection}>
                <TextField
                    floatingLabelText='Contenu'
                    ref='newPost'
                    multiLine={true}
                    rows={3}
                    onChange={({ target }) => this.setState({text: target.value})}
                />
            </div>
            <div className={classes.inputSection}>
                <DatePicker
                    floatingLabelText='Date'
                    ref='newPost'
                    onChange={this.handleChangeDate}
                />
            </div>
            <div className={classes.inputSection}>
                <IconButton
                    onClick={this.handleAdd}
                    disabled={disabled}
                    tooltipPosition='top-center'
                    tooltip={disabled ? 'Login pour ajouter un article' : 'Ajouter article'}
                >
                    <ContentAdd />
                </IconButton>
            </div>
        </Paper>
    )
  }
}
