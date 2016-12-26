var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
        h1({ style: { color: this.props.color }}, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render : function() {
    return (
      div(null,
          MyTitleFactory({title: 'testing semicolon', color: 'peru'}),
          MyTitleFactory({title: 'argh', color: 'mediumaquamarine'}),
          MyTitleFactory({title: 'two', color: 'rebeccapurple'}),
          MyTitleFactory({title: 'third ', color: 'darkvioletred'}),
          MyTitleFactory({title: 'forth', color: 'purple'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
