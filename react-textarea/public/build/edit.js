var App = React.createClass({displayName: "App",
    getInitialState: function () {
        return {
            currentTheme: 'THEME1'
        }
    },
    render: function () {
        return (
            React.createElement("div", {id: "app"}, 
                React.createElement("aside", null, 
                    React.createElement(TreeView, {theme: this.state.currentTheme})
                ), 
                React.createElement(Writer, {theme: this.state.currentTheme})
            )
        );
    }
});


var TreeView = React.createClass({displayName: "TreeView",
    getInitialState: function () {
        return {
            currentTheme: this.props.theme
        }
    },
    intoInsertMode: function (e) {
        var target = e.target;
        if (target.tagName.toLowerCase() !== 'li') {
            return false;
        }

        //console.log(target.innerHTML);
        target.innerHTML = this.state.currentTheme;
    },
    render: function () {
        var list = [1, 2, 3, 4].map(function () {
            return (
                React.createElement(EditableBox, null)
            );
        });
        return (
            React.createElement("div", {onDoubleClick: this.intoInsertMode}, 
                list
            )
        );
    }
});


var EditableBox = React.createClass({displayName: "EditableBox",
    getInitialState: function () {
        return {
            isEdit: false,
            val: 'This is the val'
        }
    },
    clickToEdit: function () {
        this.setState({isEdit: true}, function () {
            console.log(this.state.isEdit);
            this.refs.editbox.getDOMNode().classList.add('isediting');
            this.refs.theInput.getDOMNode().focus();
        });
    },
    editDone: function (e) {
        this.setState({val: e.target.value, isEdit: false}, function () {
            this.refs.editbox.getDOMNode().classList.remove('isediting');
        });
    },
    editInputing: function (e) {
        this.setState({val: e.target.value});
    },
    pressKeyEnter: function (e) {
        if (e.keyCode !== 13) {
            return false;
            e.stopPropagation();
            e.preventDefault();
        }

        this.refs.editbox.getDOMNode().classList.remove('isediting');
        this.refs.theInput.getDOMNode().blur();
    },
    render: function () {
        var id = Math.random() * 100 + 20;
        return (
            React.createElement("div", {className: "editbox", onDoubleClick: this.clickToEdit, ref: "editbox"}, 
                React.createElement("div", {className: "checkbox"}, 
                    React.createElement("input", {type: "checkbox", name: "", id: id}), 
                    React.createElement("label", {htmlFor: id})
                ), 
                React.createElement("div", {"data-val": this.state.val}, this.state.val), 
                React.createElement("input", {ref: "theInput", type: "text", value: this.state.val, onKeyUp: this.pressKeyEnter, 
                       onChange: this.editInputing, onBlur: this.editDone})

            )
        );
    }
});

var Writer = React.createClass({displayName: "Writer",
    getInitialState: function () {
        return {
            currentTheme: this.props.theme,
            placeholder: 'Typing here...'
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "writerbox"}, 
                React.createElement(WriterHeader, {header: this.props.theme}), 
                React.createElement(WriterInputer, null), 
                React.createElement(WriterController, null)
            )
        );
    }
});

// Writer Header
var WriterHeader = React.createClass({displayName: "WriterHeader",
    render: function () {
        return (
            React.createElement("div", {className: "writer-header"}, 
                "This is the header! ", this.props.header
            )
        );
    }
});

// 输入框
var WriterInputer = React.createClass({displayName: "WriterInputer",
    render: function () {
        return (
            React.createElement("div", {className: "paper"})
        );
    }
});

var WriterController = React.createClass({displayName: "WriterController",
    render: function () {
        return (
            React.createElement("div", {className: "writer-controller"}, 
                React.createElement("button", null, "保存")
            )
        );
    }
});


React.render(
    React.createElement(App, null),
    document.body
);
