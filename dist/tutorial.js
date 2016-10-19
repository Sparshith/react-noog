'use strict';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PositionsBox = function (_React$Component) {
    _inherits(PositionsBox, _React$Component);

    function PositionsBox(props) {
        _classCallCheck(this, PositionsBox);

        var _this = _possibleConstructorReturn(this, (PositionsBox.__proto__ || Object.getPrototypeOf(PositionsBox)).call(this, props));

        _this.state = { positions: { og: 'Team 1', oo: 'Team 2', cg: 'Team 3', co: 'Team 4' }, shuffled: false };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleChangeFromInput = _this.handleChangeFromInput.bind(_this);
        _this.shuffle = _this.shuffle.bind(_this);
        return _this;
    }

    _createClass(PositionsBox, [{
        key: 'shuffle',
        value: function shuffle() {
            var _this2 = this;

            var state_array = Object.keys(this.state.positions).map(function (key) {
                return _this2.state.positions[key];
            });
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
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            this.shuffle();
        }
    }, {
        key: 'handleChangeFromInput',
        value: function handleChangeFromInput(id) {
            var val = document.getElementById(id).value;
            this.setState({ positions: _defineProperty({}, id, val) });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { className: 'positionsBox' },
                React.createElement(Position, { id: 'og', shuffled: this.state.shuffled, name: 'OG', value: this.state.positions.og, handleChange: function handleChange() {
                        return _this3.handleChangeFromInput('og');
                    } }),
                React.createElement(Position, { id: 'oo', shuffled: this.state.shuffled, name: 'OO', value: this.state.positions.oo, handleChange: function handleChange() {
                        return _this3.handleChangeFromInput('oo');
                    } }),
                React.createElement(Position, { id: 'cg', shuffled: this.state.shuffled, name: 'CG', value: this.state.positions.cg, handleChange: function handleChange() {
                        return _this3.handleChangeFromInput('cg');
                    } }),
                React.createElement(Position, { id: 'co', shuffled: this.state.shuffled, name: 'CO', value: this.state.positions.co, handleChange: function handleChange() {
                        return _this3.handleChangeFromInput('co');
                    } }),
                React.createElement(SubmitButton, { name: 'Shuffle', shuffled: this.state.shuffled, handleClick: this.handleSubmit })
            );
        }
    }]);

    return PositionsBox;
}(React.Component);

var Position = function (_React$Component2) {
    _inherits(Position, _React$Component2);

    function Position(props) {
        _classCallCheck(this, Position);

        var _this4 = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this, props));

        _this4.handleChange = _this4.handleChange.bind(_this4);
        _this4.state = { value: _this4.props.value };
        return _this4;
    }

    _createClass(Position, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.refs.myInput = event.target.value;
            this.props.handleChange(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var cssId = this.props.id;
            var cssClasses = cssId + ' positonsContainer ';
            var isdisabled = this.props.shuffled ? "disabled" : false;
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
                React.createElement('input', { id: this.props.id, ref: this.props.id, type: 'text', disabled: isdisabled, value: this.props.value, onChange: this.handleChange, className: 'team' })
            );
        }
    }]);

    return Position;
}(React.Component);

var SubmitButton = function (_React$Component3) {
    _inherits(SubmitButton, _React$Component3);

    function SubmitButton(props) {
        _classCallCheck(this, SubmitButton);

        var _this5 = _possibleConstructorReturn(this, (SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).call(this, props));

        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        return _this5;
    }

    _createClass(SubmitButton, [{
        key: 'handleSubmit',
        value: function handleSubmit() {
            if (!this.props.shuffled) {
                this.props.handleClick();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var cssDisabled = this.props.shuffled ? "disabled" : "";
            var cssClasses = cssDisabled + ' submit-button';
            var isdisabled = this.props.shuffled ? "disabled" : false;
            return React.createElement(
                'div',
                { className: cssClasses, onClick: this.handleSubmit },
                this.props.name
            );
        }
    }]);

    return SubmitButton;
}(React.Component);

ReactDOM.render(React.createElement(PositionsBox, null), document.getElementById('content'));