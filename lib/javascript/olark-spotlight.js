	/** * Olark.SpotLight - Simple Operator Spotlight Effect for Olark LiveChat API. * 
	Copyright (c) 2010 Russell Osborne - russell(at)burningpony(dot)com | http://burningpony.com * 
	Licensed under GPL. *
	 Date: 7/16/2010 *
	 @author Russell Osborne *
	 @version 0.5 *
	 */

olark.declare({
    name: 'SpotLight',
    version: '0.5',
    startup: function(api){
	
	
	//Get unique values by extending array class I am sure there is a better way to do this 
		Array.prototype.getUniqueValues = function () {
		var hash = new Object();
		for (j = 0; j < this.length; j++) {hash[this[j]] = true}
		var array = new Array();
		for (value in hash) {array.push(value)};
		return array;
		}
		/** * jQuery.ScrollTo - Easy element scrolling using jQuery. * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com * Dual licensed under MIT and GPL. * Date: 5/25/2009 * @author Ariel Flesler * @version 1.4.2 * * http://flesler.blogspot.com/2007/10/jqueryscrollto.html */
		;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);		
		/** * Pulse plugin for jQuery * --- * @author James Padolsey (http://james.padolsey.com) * @version 0.1 * @updated 16-DEC-09 * --- * Note: In order to animate color properties, you need * the color plugin from here: http://plugins.jquery.com/project/color * --- * @info http://james.padolsey.com/javascript/simple-pulse-plugin-for-jquery/ */
		jQuery.fn.pulse=function(prop,speed,times,easing,callback){if(isNaN(times)){callback=easing;easing=times;times=1}var optall=jQuery.speed(speed,easing,callback),queue=optall.queue!==false,largest=0;for(var p in prop){largest=Math.max(prop[p].length,largest)}optall.times=optall.times||times;return this[queue?'queue':'each'](function(){var counts={},opt=jQuery.extend({},optall),self=jQuery(this);pulse();function pulse(){var propsSingle={},doAnimate=false;for(var p in prop){counts[p]=counts[p]||{runs:0,cur:-1};if(counts[p].cur<prop[p].length-1){++counts[p].cur}else{counts[p].cur=0;++counts[p].runs}if(prop[p].length===largest){doAnimate=opt.times>counts[p].runs}propsSingle[p]=prop[p][counts[p].cur]}opt.complete=pulse;opt.queue=false;if(doAnimate){self.animate(propsSingle,opt)}else{optall.complete.call(self[0])}}})};	
		//Activate Scroll To for Window
		$(window)._scrollable();
				// Retrive all items that h
			  var allParas = document.getElementsByClassName("olark-spotlight");
			  var num = allParas.length;
			
			  var spotlightAvailable= new Array();
				 for (i=0;i<num;i++)
				{
				//Display only element nodes
				if (allParas.item(i))				 
				  spotlightAvailable[i] = allParas.item(i).id; 
				}
				var spotlightUnique = new Array();
				spotlightUnique = spotlightAvailable.getUniqueValues();
				 var numUnique = spotlightUnique.length;
   			// helper method that allows the easier comparision of arrays
				function oc(a)
				{
				  var o = {};
				  for(var i=0;i<a.length;i++)
				  {
				    o[a[i]]='';
				  }
				  return o;
				}
        // helper method that allows the spotlightable items to be listed for the operator
        var getMessageListingText = function() {
                // Build the help guide for the options for the current page
										//TO DO remove the blank entry   
				var	listing =""
					 for (i=0;i<numUnique;i++)
					{
					if (allParas.item(i))
					  {
						listing = listing + "\n" + "!spot     " + spotlightUnique[i]; 
					  }
					}	 
                return "Current Number of spotlightable items: '" + numUnique + "\n" + listing +"\n \n If you would like to make another item be able to be Spotlighted please add the class='olark-spotlight'" ;
        };
        // when the operator sends a '!spot' command, handle it
        api.chat.onCommandFromOperator(function(event){
            if (event.command.name.toLowerCase() == 'spot') {
                // this is a spotlight  command
                if(!event.command.body) {
                    // no shortcut given, provide a listing of all spotlightable items
                    // that are available to the operator
                    var listing = getMessageListingText();
                    api.chat.sendNotificationToOperator({body: listing});
                } else {
                    // we got a spotlight shortcut, parse it out (stripping whitespace) and make sure it is valid
                    var desiredShortcut = event.command.body.replace(/^\s*/, '').replace(/\s*$/, '');
                    if (desiredShortcut in oc(spotlightUnique) ){	
						//Scroll to the dom and pulse it 
						$.scrollTo("#"+desiredShortcut);
						$("#"+desiredShortcut).pulse({
						    opacity: [.1,1]
							}, {
						    duration: 150, // duration of EACH individual animation
						    times: 4, // Will go three times through the pulse array [0,1]
						    easing: 'linear' // easing function for each individual animation
						});					
                        // and also notify the operator that we sent it
                        api.chat.sendNotificationToOperator({body: "Sent spotlight for element: '" + desiredShortcut + "'"});
				
                    } else {
                        // we don't have a spotlight id for this shortcut, warn the operator
                        // and then list all the available canned messages to the operator
                        var listing = getMessageListingText();
                        var warningMessage = "No Spotlightable Object with that ID on the page the User is currently viewing: '" + desiredShortcut + "' \n \n" + listing;
                        api.chat.sendNotificationToOperator({body: warningMessage});
                    }
                }
            }
        });
    }
});