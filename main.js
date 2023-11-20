const hocusPocus = {
	/**
	* Permet de créer un élément
	* @param {string} selector 
	* @param {boolean} append 
	*/
	create : (selector, append) => {
        var pattern = /^(.*?)(?:#(.*?))?(?:\.(.*?))?(?:@(.*?)(?:=(.*?))?)?$/;
        var matches = selector.match(pattern);
        var element = document.createElement(matches[1]||'div');
        if(matches[2]) element.id = matches[2];
        if(matches[3]) element.className = matches[3];
        if(matches[4]) element.setAttribute(matches[4],matches[5]||'');
		if (append) document.body.appendChild(element);
        return element;
    },
	/**
	* Permet d'obtenir un élément
	* @param {string} selector 
	*/
	get : (selector) => ([...document.querySelectorAll(selector)].length > 1) ? [...document.querySelectorAll(selector)] : document.querySelector(selector),
	/**
	* Permet de retourner ou modifier le contenu HTML d'un élément
	* @param {string} selector 
	* @param {string} content 
	*/
	html : (selector, content) => content === undefined ? document.querySelectorAll(selector)[0].innerHTML : [...document.querySelectorAll(selector)].map(element => element.innerHTML = content),
	/**
	* Permet de supprimer un élément
	* @param {string} selector 
	*/ 
	remove : (selector) => [...document.querySelectorAll(selector)].map(element => element.remove()),
	/**
	* Raccourci d'addEventListener
	* @param {string} selector 
	* @param {string} event 
	* @param {function} callback 
	*/ 
	on : (selector, event, callback) => [...document.querySelectorAll(selector)].map(element => element.addEventListener(event, callback)),
	/**
	* Permet de modifier lex propriétés CSS
	* @param {string} selector 
	* @param {object} lines 
	*/ 
	css : (selector, lines) => [...document.querySelectorAll(selector)].map(element => Object.assign(element.style, lines)),
	/**
	* Permet de créer une animation
	* @param {string} selector
	* @param {array} keyframes
	* @param {number} duration
	* @param {number} iterations
	*/ 
	anim : (selector, keyframes, duration, iterations = Infinity, fill = "none", direction) => [...document.querySelectorAll(selector)].map(element => element.animate(keyframes, {duration: duration, iterations: iterations, fill: fill, direction: direction})),
	/**
	* Animations prédéfinies en exemple
	*/ 
	animations : {
		scaleIn : [
			{ transform: "scale(0)", opacity: "1" },
			{ transform: "scale(1)", opacity: "1" }
		],
		rotateIn : [
			{ transform: "rotate(0)", opacity: "0" },
			{ transform: "rotate(360deg)", opacity: "1" }
		],
		fade : [
			{ transform: "rotate(0)", opacity: "0" },
			{ transform: "rotate(360deg)", opacity: "1" }
		],
		rotate : [
			{ transform: "rotate(0)" },
			{ transform: "rotate(360deg)" }
		]
	}
}

/* hocusPocus.create('div.hocus', true);
hocusPocus.create('div.pocus', true);

hocusPocus.html('div.hocus', 'hocus');
hocusPocus.html('div.pocus', 'pocus');

console.log(hocusPocus.html('div.pocus'));

hocusPocus.css('div', {
	'color': 'crimson',
	'background': 'navy',
	'padding': "1em"
});

hocusPocus.anim('div', hocusPocus.animations.scaleIn, 500, 1, "both")
//hocusPocus.anim('div', hocusPocus.animations.scaleIn, 500, Infinity)

console.log(hocusPocus.get('div')) */

export default hocusPocus;
