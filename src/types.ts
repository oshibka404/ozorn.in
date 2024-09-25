export interface BlogPostData {
    pubDate: Date,
    updatedDate?: Date,
    heroImage?: string,
    title: string,
    description?: string,
    original?: string,
    license?: 'cc' | 'prop'
}

export interface BlogPostModel {
	data: BlogPostData,
	slug: string
}
