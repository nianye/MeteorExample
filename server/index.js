import { Blogs }  from '../lib/collection';

BrowserPolicy.content.disallowInlineScripts();

Blogs.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});
