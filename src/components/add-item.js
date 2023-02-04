import { Component } from "react";

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.header.length>3 && this.state.text.length>7) {
            this.props.onAdd(this.state.header, this.state.text);
            this.setState({
                header: '',
                text: '',
            });
        }
    }

    

    render() {
        const { header, text } = this.state;

        return (
            <div>
                <div className="form">
                    <div className="form__checkbox">
                        <label htmlFor="add-checkbox" />
                    </div>
                    <form className="form__fields" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name='header'
                                placeholder="Назва"
                                className="input-title"
                                value={header}
                                onChange={this.onValueChange} />
                            <input
                                name='text'
                                type="text"
                                placeholder="Введіть текст..."
                                className="input-text"
                                value={text}
                            onChange={this.onValueChange} />
                            <button type="submit" className="button-add">+</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddItem;