# meteor-framework7-routing

Demo : http://meteor-framework7-routing.meteor.com/

This is a **very**  simple example to integrate Framework7 into Meteor routing. This repo has been created as a test case related to this issue : https://github.com/nolimits4web/Framework7/issues/248.

It **doest** support URL mapping and the swipe back feature from Framework7.

It **doesn't** support properly back/forward browser button (content always come from right) and different header contents.

Iron Router is used here, but you can use whichever you want. The only important part is that new content must be added in the `.pages` div, and `_uihooks` correctly bound.

Feel free to use, fork, edit...