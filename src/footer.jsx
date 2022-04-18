import React from 'react'

export default Footer = () => {
	return (
		<footer class="page-footer" id="nav-footer">
			<div class="page-footer-grid">
				<div class="page-footer-logo-col"><a class="mdn-footer-logo" href="/" aria-label="MDN homepage">
						<svg width="48" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.04 16.512h-4.536v-6.096c0-.928-.16-1.592-.48-1.992-.304-.4-.76-.6-1.368-.6-.736 0-1.272.24-1.608.72-.32.48-.48 1.096-.48 1.848v3.792h1.44v2.328H8.472v-6.096c0-.928-.16-1.592-.48-1.992-.304-.4-.76-.6-1.368-.6-.752 0-1.288.24-1.608.72-.32.48-.48 1.096-.48 1.848v3.792H6.6v2.328H0v-2.328h1.44V8.04H.024V5.688h4.512V7.32c.688-1.232 1.784-1.848 3.288-1.848.784 0 1.504.192 2.16.576.656.384 1.112.968 1.368 1.752.64-1.552 1.816-2.328 3.528-2.328.976 0 1.84.304 2.592.912.752.608 1.128 1.552 1.128 2.832v4.968h1.44v2.328zM33.671 16.512h-4.536v-2.016a4.446 4.446 0 01-1.344 1.608c-.592.432-1.376.648-2.352.648-1.424 0-2.544-.488-3.36-1.464-.816-.976-1.224-2.304-1.224-3.984 0-1.616.4-2.992 1.2-4.128.8-1.136 2.008-1.704 3.624-1.704.88 0 1.6.176 2.16.528.56.352.992.8 1.296 1.344V2.352h-2.16V0h5.256v14.184h1.44v2.328zm-4.536-5.472v-.264c0-.896-.24-1.592-.72-2.088-.464-.512-1.048-.768-1.752-.768-.688 0-1.296.256-1.824.768-.512.512-.768 1.32-.768 2.424 0 1.04.24 1.832.72 2.376.48.544 1.048.816 1.704.816.816 0 1.456-.344 1.92-1.032.48-.688.72-1.432.72-2.232zM47.959 16.512h-5.976v-2.328h1.44v-3.768c0-.928-.16-1.592-.48-1.992-.304-.4-.76-.6-1.368-.6-.736 0-1.304.232-1.704.696-.4.448-.608 1.04-.624 1.776v3.888h1.44v2.328H34.71v-2.328h1.44V8.04h-1.56V5.688h4.656v1.656c.72-1.248 1.88-1.872 3.48-1.872 1.024 0 1.912.304 2.664.912.752.608 1.128 1.552 1.128 2.832v4.968h1.44v2.328z" fill="currentColor"></path>
						</svg></a>
					<p>Your blueprint for a better internet.</p>
					<ul class="social-icons">
						<li><a class="icon icon-twitter" href="https://twitter.com/mozdevnet" target="_blank" rel="noopener noreferrer"><span class="visually-hidden">MDN on Twitter</span></a></li>
						<li><a class="icon icon-github-mark-small" href="https://github.com/mdn/" target="_blank" rel="noopener noreferrer"><span class="visually-hidden">MDN on Github</span></a></li>
					</ul>
				</div>
				<div class="page-footer-nav-col-1">
					<h2 class="footer-nav-heading">MDN</h2>
					<ul class="footer-nav-list">
						<li class="footer-nav-item"><a href="/en-US/about">About</a></li>
						<li class="footer-nav-item"><a href="https://hacks.mozilla.org/" target="_blank" rel="noopener noreferrer">Hacks Blog</a></li>
						<li class="footer-nav-item"><a href="https://www.mozilla.org/en-US/careers/listings/?team=Marketing" target="_blank" rel="noopener noreferrer">Careers</a></li>
					</ul>
				</div>
				<div class="page-footer-nav-col-2">
					<h2 class="footer-nav-heading">Support</h2>
					<ul class="footer-nav-list">
						<li class="footer-nav-item"><a class="footer-nav-link" href="https://support.mozilla.org/products/mdn-plus">Product help</a></li>
						<li class="footer-nav-item"><a class="footer-nav-link" href="/en-US/docs/MDN/Contribute/Feedback#documentation_issues">Report a page issue</a></li>
						<li class="footer-nav-item"><a class="footer-nav-link" href="/en-US/docs/MDN/Contribute/Feedback#site_issues">Report a site issue</a></li>
					</ul>
				</div>
				<div class="page-footer-nav-col-3">
					<h2 class="footer-nav-heading">Our communities</h2>
					<ul class="footer-nav-list">
						<li class="footer-nav-item"><a class="footer-nav-link" href="/en-US/community">MDN Community</a></li>
						<li class="footer-nav-item"><a class="footer-nav-link" href="https://discourse.mozilla.org/c/mdn/236" target="_blank" rel="noopener noreferrer">MDN Forum</a></li>
						<li class="footer-nav-item"><a class="footer-nav-link" href="https://wiki.mozilla.org/Matrix" target="_blank" rel="noopener noreferrer">MDN Chat</a></li>
					</ul>
				</div>
				<div class="page-footer-nav-col-4">
					<h2 class="footer-nav-heading">Developers</h2>
					<ul class="footer-nav-list">
						<li class="footer-nav-item"><a class="footer-nav-link" href="/en-US/docs/Web">Web Technologies</a></li>
						<li class="footer-nav-item"><a class="footer-nav-link" href="/en-US/docs/Learn">Learn Web Development</a></li>
						<li class="footer-nav-item"><a class="footer-nav-link" href="/en-US/plus">MDN Plus</a></li>
					</ul>
				</div>
				<div class="page-footer-moz"><a class="footer-moz-logo-link" href="https://www.mozilla.org/" target="_blank" rel="noopener noreferrer">
						<svg width="112" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M41.753 14.218c-2.048 0-3.324 1.522-3.324 4.157 0 2.423 1.119 4.286 3.29 4.286 2.082 0 3.447-1.678 3.447-4.347 0-2.826-1.522-4.096-3.413-4.096zm54.89 7.044c0 .901.437 1.618 1.645 1.618 1.427 0 2.949-1.024 3.044-3.352-.649-.095-1.365-.185-2.02-.185-1.426-.005-2.668.397-2.668 1.92z" fill="currentColor"></path>
							<path d="M0 0v32h111.908V0H0zm32.56 25.426h-5.87v-7.884c0-2.423-.806-3.352-2.39-3.352-1.924 0-2.702 1.365-2.702 3.324v4.868h1.864v3.044h-5.864v-7.884c0-2.423-.806-3.352-2.39-3.352-1.924 0-2.702 1.365-2.702 3.324v4.868h2.669v3.044H6.642v-3.044h1.863v-7.918H6.642V11.42h5.864v2.11c.839-1.489 2.3-2.39 4.252-2.39 2.02 0 3.878.963 4.566 3.01.778-1.862 2.361-3.01 4.566-3.01 2.512 0 4.812 1.522 4.812 4.84v6.402h1.863v3.044h-.005zm9.036.307c-4.314 0-7.296-2.635-7.296-7.106 0-4.096 2.484-7.481 7.514-7.481s7.481 3.38 7.481 7.29c0 4.472-3.228 7.297-7.699 7.297zm22.578-.307H51.942l-.403-2.11 7.7-8.846h-4.376l-.621 2.17-2.888-.313.498-4.907h12.294l.313 2.11-7.767 8.852h4.533l.654-2.172 3.167.308-.872 4.908zm7.99 0h-4.191v-5.03h4.19v5.03zm0-8.976h-4.191v-5.03h4.19v5.03zm2.618 8.976l6.054-21.358h3.945l-6.054 21.358h-3.945zm8.136 0l6.048-21.358h3.945l-6.054 21.358h-3.939zm21.486.307c-1.863 0-2.887-1.085-3.072-2.792-.805 1.427-2.232 2.792-4.498 2.792-2.02 0-4.314-1.085-4.314-4.006 0-3.447 3.323-4.253 6.518-4.253.778 0 1.584.034 2.3.124v-.465c0-1.427-.034-3.133-2.3-3.133-.84 0-1.488.061-2.143.402l-.453 1.578-3.195-.34.549-3.224c2.45-.996 3.692-1.27 5.992-1.27 3.01 0 5.556 1.55 5.556 4.75v6.083c0 .805.314 1.085.963 1.085.184 0 .375-.034.587-.095l.034 2.11a5.432 5.432 0 01-2.524.654z" fill="currentColor"></path>
						</svg></a>
					<ul class="footer-moz-list">
						<li class="footer-moz-item"><a class="footer-moz-link" href="https://www.mozilla.org/privacy/websites/" target="_blank" rel="noopener noreferrer">Website Privacy Notice</a></li>
						<li class="footer-moz-item"><a class="footer-moz-link" href="https://www.mozilla.org/privacy/websites/#cookies" target="_blank" rel="noopener noreferrer">Cookies</a></li>
						<li class="footer-moz-item"><a class="footer-moz-link" href="https://www.mozilla.org/about/legal/terms/mozilla" target="_blank" rel="noopener noreferrer">Legal</a></li>
						<li class="footer-moz-item"><a class="footer-moz-link" href="https://www.mozilla.org/about/governance/policies/participation/" target="_blank" rel="noopener noreferrer">Community Participation Guidelines</a></li>
					</ul>
				</div>
				<div class="page-footer-legal">
					<p class="page-footer-legal-text" id="license">Visit
						 <a href="https://www.mozilla.org" target="_blank" rel="noopener noreferrer">Mozilla Corporation’s</a>
						 not-for-profit parent, the
						 <a target="_blank" rel="noopener noreferrer" href="https://foundation.mozilla.org/">Mozilla Foundation</a>.<br/>Portions of this content are ©1998–
						2022
						 by individual mozilla.org contributors. Content available under
						 <a href="/docs/MDN/About#Copyrights_and_licenses">a Creative Commons license</a>.
					</p>
				</div>
			</div>
		</footer>
	)
}
