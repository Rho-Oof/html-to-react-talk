import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

export default Root = () => {
	return (<>
		<ul class="a11y-nav" id="nav-access">
			<li><a id="skip-main" href="#content">Skip to main content</a></li>
		</ul>
		<div class="page-wrapper category-home standard-page">
			<Header/>
			<Main/>
		</div>
		<Footer/>
	</>);
}
