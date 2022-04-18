import React from 'react'

export default Header = () => {
	return (
		<header class="top-navigation dark">
			<div class="container">
				<div class="top-navigation-wrap"><a class="logo" href="/en-US/" aria-label="MDN homepage">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361 104.2">
							<path d="M197.6 73.2h-17.1v-5.5h3.8V51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8V51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6V42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2V66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5V22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8V52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8H269v-5.5h6V51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6V42.4h-6.2v-5.6h13.6V43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z" fill="var(--text-primary)"></path>
							<path d="M42 .2L13.4 92.3H1.7L30.2.2H42zm10.4 0v92.1H42V.2h10.4zm40.3 0L64.2 92.3H52.5L81 .2h11.7zm10.4 0v92.1H92.7V.2h10.4zM294 95h67v8.8h-67V95z" fill="var(--text-link)"></path>
						</svg></a>
					<button class="button action has-icon main-menu-toggle" aria-expanded="false" aria-haspopup="menu" aria-label="Open main menu" title="Open main menu" type="button"><span class="button-wrap"><span class="icon icon-menu"></span><span class="visually-hidden">Open main menu</span></span></button>
				</div>
				<div class="top-navigation-main">
					<nav class="main-nav" aria-label="Main menu">
						<ul class="main-menu nojs">
							<li class="top-level-entry-container">
								<button class="top-level-entry menu-toggle" id="references-button" type="button" aria-haspopup="menu">References</button><a class="top-level-entry" href="/en-US/docs/Web">References</a>
								<ul class="submenu references hidden" role="menu" aria-labelledby="references-button">
									<li class="apis-link-container mobile-only" role="none"><a class="submenu-item" href="/en-US/docs/Web" role="menuitem">
											<div class="submenu-icon"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">Overview / Web Technology</div>
												<p class="submenu-item-description">Web technology reference for developers</p>
											</div></a></li>
									<li class="html-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Web/HTML" role="menuitem">
											<div class="submenu-icon html"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">HTML</div>
												<p class="submenu-item-description">Structure of content on the web</p>
											</div></a></li>
									<li class="css-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Web/CSS" role="menuitem">
											<div class="submenu-icon css"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">CSS</div>
												<p class="submenu-item-description">Code used to describe document style</p>
											</div></a></li>
									<li class="javascript-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Web/JavaScript" role="menuitem">
											<div class="submenu-icon javascript"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">JavaScript</div>
												<p class="submenu-item-description">General-purpose scripting language</p>
											</div></a></li>
									<li class="http-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Web/HTTP" role="menuitem">
											<div class="submenu-icon http"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">HTTP</div>
												<p class="submenu-item-description">Protocol for transmitting web resources</p>
											</div></a></li>
									<li class="apis-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Web/API" role="menuitem">
											<div class="submenu-icon apis"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">Web APIs</div>
												<p class="submenu-item-description">Interfaces for building web applications</p>
											</div></a></li>
									<li class="apis-link-container desktop-only" role="none"><a class="submenu-item" href="/en-US/docs/Web" role="menuitem">
											<div class="submenu-icon"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">Web Technology</div>
												<p class="submenu-item-description">Web technology reference for developers</p>
											</div></a></li>
								</ul>
							</li>
							<li class="top-level-entry-container">
								<button class="top-level-entry menu-toggle" id="guides-button" type="button" aria-haspopup="menu">Guides</button><a class="top-level-entry" href="/en-US/docs/Learn">Guides</a>
								<ul class="submenu guides hidden" role="menu" aria-labelledby="guides-button">
									<li class="apis-link-container mobile-only" role="none"><a class="submenu-item" href="/en-US/docs/Learn" role="menuitem">
											<div class="submenu-icon learn"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">Overview / MDN Learning Area</div>
												<p class="submenu-item-description">Learn web development</p>
											</div></a></li>
									<li class="apis-link-container desktop-only" role="none"><a class="submenu-item" href="/en-US/docs/Learn" role="menuitem">
											<div class="submenu-icon learn"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">MDN Learning Area</div>
												<p class="submenu-item-description">Learn web development</p>
											</div></a></li>
									<li class="html-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Learn/HTML" role="menuitem">
											<div class="submenu-icon html"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">HTML</div>
												<p class="submenu-item-description">Learn to structure web content with HTML</p>
											</div></a></li>
									<li class="css-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Learn/CSS" role="menuitem">
											<div class="submenu-icon css"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">CSS</div>
												<p class="submenu-item-description">Learn to style content using CSS</p>
											</div></a></li>
									<li class="javascript-link-container" role="none"><a class="submenu-item" href="/en-US/docs/Learn/JavaScript" role="menuitem">
											<div class="submenu-icon javascript"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">JavaScript</div>
												<p class="submenu-item-description">Learn to run scripts in the browser</p>
											</div></a></li>
									<li role="none"><a class="submenu-item" href="/en-US/docs/Web/Accessibility" role="menuitem">
											<div class="submenu-icon"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">Accessibility</div>
												<p class="submenu-item-description">Learn to make the web accessible to all</p>
											</div></a></li>
								</ul>
							</li>
							<li class="top-level-entry-container">
								<button class="top-level-entry menu-toggle" id="mdn-plus-button" aria-haspopup="menu">MDN Plus</button><a class="top-level-entry" href="/en-US/plus">MDN Plus</a>
								<ul class="submenu mdn-plus hidden" role="menu" aria-labelledby="mdn-plus-button">
									<li class="mobile-only" role="none"><a class="submenu-item" href="/en-US/plus" role="menuitem">
											<div class="submenu-icon"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">Overview</div>
												<p class="submenu-item-description">More MDN. Your MDN.</p>
											</div></a></li>
									<li role="none"><a class="submenu-item" href="/en-US/plus/docs/faq" role="menuitem">
											<div class="submenu-icon"></div>
											<div class="submenu-content-container">
												<div class="submenu-item-heading">FAQ</div>
												<p class="submenu-item-description">Frequently asked questions about MDN Plus</p>
											</div></a></li>
								</ul>
							</li>
						</ul>
					</nav>
					<div class="header-search">
						<form class="search-form search-widget" id="top-nav-search-form" action="/en-US/search" role="search" aria-haspopup="listbox" aria-owns="downshift-174-menu" aria-expanded="false">
							<label class="visually-hidden" for="top-nav-search-q">Search MDN</label>
							<input class="search-input-field" id="top-nav-search-q" type="search" aria-autocomplete="list" aria-controls="downshift-174-menu" aria-labelledby="downshift-174-label" autocomplete="off" name="q" placeholder="   " required="required"/>
							<button class="button action has-icon clear-search-button" type="button"><span class="button-wrap"><span class="icon icon-cancel"></span><span class="visually-hidden">Clear search input</span></span></button>
							<button class="button action has-icon search-button" type="submit"><span class="button-wrap"><span class="icon icon-search"></span><span class="visually-hidden">Search</span></span></button>
							<div id="downshift-174-menu" role="listbox" aria-labelledby="downshift-174-label"></div>
						</form>
					</div>
					<div class="theme-switcher-menu">
						<button class="button action has-icon theme-switcher-menu small" aria-controls="themes-menu" aria-haspopup="menu" type="button"><span class="button-wrap"><span class="icon icon-theme-os-default"></span>Theme</span></button>
					</div>
				</div>
			</div>
		</header>
	)
}
