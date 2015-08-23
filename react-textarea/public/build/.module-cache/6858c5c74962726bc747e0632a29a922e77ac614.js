var App = React.createClass({displayName: "App",
    render: function () {
        return (
            React.createElement("div", {id: "app"}, 
                React.createElement("aside", null, 
                    React.createElement(TreeView, null)
                ), 
                React.createElement(Writer, null)
            )
        );
    }
});


var TreeView = React.createClass({displayName: "TreeView",
    getInitialState: function () {
        return {
            currentTheme: 'Fxxk!!'
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
        var themeid = this.state.currentTheme;
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
    clickToEdit: function (e) {
        //console.log(e.target.innerHTML);
        this.setState({isEdit: true}, function () {
            console.log(this.state.isEdit);
            this.refs.editbox.getDOMNode().classList.add('isediting');
        });
    },
    handleChange: function (e) {
        this.setState({val: e.target.value, isEdit:false}, function(){
            this.refs.editbox.getDOMNode().classList.remove('isediting');
        });
    },
    render: function () {
        var val = this.state.val;
        return (
            React.createElement("div", {className: "editbox", onDoubleClick: this.clickToEdit, ref: "editbox"}, 
                React.createElement("div", {"data-val": this.state.val}, this.state.val), 
                React.createElement("input", {type: "text", value: this.state.val, onBlur: this.handleChange})

            )
        );
    }
});

var Writer = React.createClass({displayName: "Writer",
    getInitialState: function () {
        return {
            placeholder: 'Typing here...'
        }
    },
    render: function () {
        return (
            React.createElement("div", {className: "writerbox"}, 
                React.createElement(WriterHeader, {header: 'THEME1'}), 
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
