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
    getInitialState: function(){
        return {
            currentTheme: 'Fxxk!!'
        }
    },
    intoInsertMode: function (e) {
        var target = e.target;
        if (target.tagName.toLowerCase() !== 'li') {
            return false;
        }

        console.log(target.innerHTML);
        target.innerHTML = this.state.currentTheme;
    },
    render: function () {
        var themeid = this.state.currentTheme;
        return (
            React.createElement("ul", {onDoubleClick: this.intoInsertMode}, 
                React.createElement("li", null, "asdfasdfsadf ", themeid), 
                React.createElement("li", null, "Tree 2"), 
                React.createElement("li", null, "Tree 3"), 
                React.createElement("li", null, "Tree 4")
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
    render: function(){
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
