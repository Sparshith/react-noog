class PositionsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { positions: { og: 'Team 1', oo: 'Team 2', cg: 'Team 3', co: 'Team 4' }, shuffled: false };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFromInput = this.handleChangeFromInput.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }
    shuffle() {
        var state_array = Object.keys(this.state.positions).map(key => this.state.positions[key]);
        var m = state_array.length,
            i,
            t;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = state_array[m];
            state_array[m] = state_array[i];
            state_array[i] = t;
        }
        this.setState({ positions: { og: state_array[0], oo: state_array[1], cg: state_array[2], co: state_array[3] }, shuffled: true });
    }
    handleSubmit() {
        this.shuffle();
    }
    handleChangeFromInput(id) {
        var val = document.getElementById(id).value;
        this.state.positions[id] = val;
        this.forceUpdate();
    }
    render() {
        return React.createElement(
            'div',
            { className: 'positionsBox' },
            React.createElement(Position, { id: 'og', shuffled: this.state.shuffled, name: 'OG', value: this.state.positions.og, handleChange: () => this.handleChangeFromInput('og') }),
            React.createElement(Position, { id: 'oo', shuffled: this.state.shuffled, name: 'OO', value: this.state.positions.oo, handleChange: () => this.handleChangeFromInput('oo') }),
            React.createElement(Position, { id: 'cg', shuffled: this.state.shuffled, name: 'CG', value: this.state.positions.cg, handleChange: () => this.handleChangeFromInput('cg') }),
            React.createElement(Position, { id: 'co', shuffled: this.state.shuffled, name: 'CO', value: this.state.positions.co, handleChange: () => this.handleChangeFromInput('co') }),
            React.createElement(SubmitButton, { name: 'Shuffle', shuffled: this.state.shuffled, handleClick: this.handleSubmit })
        );
    }
}

class Position extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: this.props.value };
    }
    handleChange() {
        this.props.handleChange();
    }
    render() {
        let cssId = this.props.id;
        let cssClasses = `${ cssId } positonsContainer `;
        let isdisabled = this.props.shuffled ? "disabled" : false;
        return React.createElement(
            'div',
            { className: cssClasses },
            React.createElement(
                'h1',
                null,
                ' ',
                this.props.name,
                ' '
            ),
            React.createElement('input', { id: this.props.id, type: 'text', disabled: isdisabled, value: this.props.value, onChange: this.handleChange, className: 'team' })
        );
    }
}

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        if (!this.props.shuffled) {
            this.props.handleClick();
        }
    }
    render() {
        let cssDisabled = this.props.shuffled ? "disabled" : "";
        let cssClasses = `${ cssDisabled } submit-button`;
        let isdisabled = this.props.shuffled ? "disabled" : false;
        return React.createElement(
            'div',
            { className: cssClasses, onClick: this.handleSubmit },
            this.props.name
        );
    }
}

ReactDOM.render(React.createElement(PositionsBox, null), document.getElementById('content'));