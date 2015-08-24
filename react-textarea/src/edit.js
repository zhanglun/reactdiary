var App = React.createClass({
    render: function () {
        return (
            <div id="app">
                <aside>
                    <TreeView />
                </aside>
                <Writer />
            </div>
        );
    }
});


var TreeView = React.createClass({
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
                <EditableBox />
            );
        });
        return (
            <div onDoubleClick={this.intoInsertMode}>
                {list}
            </div>
        );
    }
});


var EditableBox = React.createClass({
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
        var val = this.state.val;
        return (
            <div className="editbox" onDoubleClick={this.clickToEdit} ref="editbox">
                <div data-val={this.state.val}>{this.state.val}</div>
                <input ref="theInput" type="text" value={this.state.val} onKeyUp={this.pressKeyEnter}
                       onChange={this.editInputing} onBlur={this.editDone}/>

            </div>
        );
    }
});

var Writer = React.createClass({
    getInitialState: function () {
        return {
            placeholder: 'Typing here...'
        }
    },
    render: function () {
        return (
            <div className="writerbox">
                <WriterHeader header={'THEME1'}></WriterHeader>
                <WriterInputer></WriterInputer>
                <WriterController></WriterController>
            </div>
        );
    }
});

// Writer Header
var WriterHeader = React.createClass({
    render: function () {
        return (
            <div className="writer-header">
                This is the header! {this.props.header}
            </div>
        );
    }
});

// 输入框
var WriterInputer = React.createClass({
    render: function () {
        return (
            <div className="paper"></div>
        );
    }
});

var WriterController = React.createClass({
    render: function () {
        return (
            <div className="writer-controller">
                <button>保存</button>
            </div>
        );
    }
});


React.render(
    <App />,
    document.body
);
