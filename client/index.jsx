import React,{ Component }  from 'react';
import { render,findDOMNode } from 'react-dom';
Meteor.startup(() =>{
	render(<Nav/>,document.querySelector('header'));
})
class Nav extends Component {
	componentDidMount() {
		Blaze.render(Template.login,findDOMNode(this.refs.login));
	}
	render(){
		return <nav className="navbar-collapse collapse">
			<ul ref='nav' className="nav navbar-nav">
				<li><a href="/">home</a> </li>
				<li><a href="/admin">admin</a> </li>
				<li><a href="/yz">yz</a></li>
				<li><a href="/it">it</a></li>
				<li><a href="/gj">gj</a></li>
				<li><a href="/tj">tj</a></li>
				<li><a href="/SOS">404</a></li>
			</ul>
			<ul className="nav navbar-nav navbar-right" ref="login"></ul>
		</nav>		
	}
}
export class Admin extends Component{
	componentDidMount() {
		Blaze.render(Template.admin,findDOMNode(this.refs.admin));
	}
	render(){
		return <div ref="admin"></div>		
	}
}
export class WuWei extends Component{
	render(){
		return <div>
			404 SOS Public welfare
		</div>
	}
}
export class Blog extends Component{
	render(){
		return <div ref="blogs"></div>		
	}
}