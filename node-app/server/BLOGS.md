# Blog management

Open `/admin/blogs` using an existing owner or editor account. Sales accounts have no blog editing access.

The editor supports title, stable URL slug, category, summary/meta description, SEO title, featured image upload with alt text, and heading/body sections. Body content is plain text with paragraph breaks; HTML is escaped. Save draft does not modify the published snapshot. Save & preview opens an authenticated, noindex preview. Publish explicitly promotes the saved draft; unpublish retains the draft and removes the public article from the listing and sitemap.

`blog-service.mjs` creates the SQLite `blog_posts` table on startup. The two existing editorial articles are inserted once using `INSERT OR IGNORE`. Restarting never overwrites editor changes or republishes unpublished posts. Existing article URLs are preserved. Slugs are fixed after creation to avoid breaking indexed URLs.

Blog records are included in the workspace export and in the existing whole-database backup. Referenced featured images cannot be deleted through the media API while a blog draft or published snapshot uses them. Optimistic versions reject stale writes; existing session, CSRF and role checks apply to all mutation routes. Audit events record creation, saves and publication changes.

Public rendering remains in `editorial.mjs`; the site's shared header stays unchanged. The current repository uses prebuilt frontend bundles. `dist/assets/blog-editor-20261126-delete.js` is the readable editor implementation, mounted by the existing React admin shell at `/admin/blogs`. The `20261126-blogdelete` index/App/AdminApp release graph and `server/generated/html-shell.json` must be deployed together. Asset files are copied to both app `dist/assets` and hosting `public_html/assets`. Do not run an incomplete source build over these deployed bundles.

Run `node --test server/tests/blogs.test.mjs` from `node-app`. Tests use a temporary local SQLite database and HTTP server, never production data.

Delete blog moves an article to Deleted blogs and immediately removes its public article, listing and sitemap entry. Deleted article URLs return HTTP 410 with noindex. Restore as draft restores saved content without publishing. Deletion and restoration require the existing version, CSRF and owner/editor checks; both are audited. The additive deleted_at migration and seed insert never resurrect deleted articles after restart. Slugs and image references remain reserved while content is recoverable.
