simple-video-gallery
====================

I was having trouble finding a way to have multiple youtube and vimeo videos on one page and not have it possible to have 2 videos playing at once. This is typically done through API's, but getting 2 API's to talk to each other seemed like way too much code and time to invest in this seemingly simple task. So, I created this.

Usage:

Instead of putting the iframe embed codes directly into the HTML as an iframe element, I instead used HTML5's data attributes, in this case I called it data-video and added the iframe in there. **You have to change the double quotes within the iframe code to single quotes**.

The CSS is arbitrary - style to your liking. I enjoy using <a target="_blank" href="http://fitvidsjs.com/">http://fitvidsjs.com/</a> for videos as everything we're doing is now responsive. 

How it works:
If you look at the small js file, this is what it's doing:
1. When you click on an image, it shows all other images/paragraph text. This is meaningless for your first click on a page, but is needed when you click on a secondary one (to show the original).
2. Removes all iframes. This is the same as above - basically resetting the page.
3. Takes the data-video content (in this case an iframe) and appends it to the video div. 
4. Removes the image and paragraph you clicked on.

DEMO: <a href="http://code.eyespeak.com/simple-video-gallery/" target="_blank">http://code.eyespeak.com/simple-video-gallery/</a>