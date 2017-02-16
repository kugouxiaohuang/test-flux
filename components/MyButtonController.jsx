var React=require("react");
var ButtonActions=require("../actions/ButtonActions");
var MyButton=require("./MyButton");
var ListSore=require("../stores/ListStore");

var MyButtonController=React.createClass({
    getInitialState:function(){
        return {
            items:ListSore.getAll()
        };
    },
    componentDidMount:function(){
        ListSore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
        ListSore.removeChangeListener(this._onChange);
    },
    _onChange:function(){
        this.setState({
            items:ListSore.getAll() 
        })
    },
    createNewItem:function(event){
        ButtonActions.addNewItem("new item");
    },
    render:function(){
        return <MyButton items={this.state.items} onClick={this.createNewItem} />
    }
})

module.exports=MyButtonController;