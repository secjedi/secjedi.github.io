interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Evidence Monday', // Site author
	title: 'Evidence\'s blog', // Site title.
	description: 'Learning daily... and documenting it', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
export const siteName = 'Evidence\'s blog' // Site name for the title tag
export const siteUrl = 'https://evidencemonday.site' // Site URL for the canonical tag
export const siteImage = `${siteUrl}/og-image.png` // Site image for the Open Graph tags
export const siteFavicon = `${siteUrl}/favicon.png` // Site favicon URL
export const siteLogo = `${siteUrl}/logo.png` // Site logo URL for the header