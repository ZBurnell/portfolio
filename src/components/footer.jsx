import React from 'react';

function Footer() {
	return (
		<div className="py-5 text-center">
				<div className="container max-w-screen-lg mx-auto">
					<div>
						<div className="flex flex-wrap justify-center gap-2">
                            <ul class="contact-me">
                                <li>EMAIL - Zackburnell922@gmail.com</li>
                                <li>PHONE - (614) 425-6772</li>
                                <li>GitHub - Zburnell</li>
                            </ul>
						</div>
					</div>
				</div>
			<p className="text-sm mt-2  opacity-50">
				&copy; {new Date().getFullYear()} Zachary Burnell. All rights reserved.
			</p>
		</div>
	);
}

export default Footer;