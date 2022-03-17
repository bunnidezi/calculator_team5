const _0xcf4ec7 = _0x4da2;
(function (_0x453b06, _0x3f1881) {
	const _0x1505a2 = _0x4da2,
		_0x3a8acf = _0x453b06();
	while (!![]) {
		try {
			const _0x5e286d =
				parseInt(_0x1505a2(0x139)) / 0x1 +
				-parseInt(_0x1505a2(0x132)) / 0x2 +
				(-parseInt(_0x1505a2(0x138)) / 0x3) * (parseInt(_0x1505a2(0x141)) / 0x4) +
				parseInt(_0x1505a2(0x136)) / 0x5 +
				(parseInt(_0x1505a2(0x133)) / 0x6) * (parseInt(_0x1505a2(0x134)) / 0x7) +
				-parseInt(_0x1505a2(0x137)) / 0x8 +
				parseInt(_0x1505a2(0x142)) / 0x9;
			if (_0x5e286d === _0x3f1881) break;
			else _0x3a8acf['push'](_0x3a8acf['shift']());
		} catch (_0x372154) {
			_0x3a8acf['push'](_0x3a8acf['shift']());
		}
	}
})(_0x3341, 0xb45d6);
function _0x4da2(_0x3aae91, _0x14a2ce) {
	const _0x3341d7 = _0x3341();
	return (
		(_0x4da2 = function (_0x4da24e, _0xe93043) {
			_0x4da24e = _0x4da24e - 0x131;
			let _0x5ba4b4 = _0x3341d7[_0x4da24e];
			return _0x5ba4b4;
		}),
		_0x4da2(_0x3aae91, _0x14a2ce)
	);
}
let display = document[_0xcf4ec7(0x131)](_0xcf4ec7(0x13a)),
	num1 = '',
	num2 = '',
	operator = null,
	previousButton = null;
const addNumber = (_0xd208b3) => {
		const _0x359715 = _0xcf4ec7;
		!operator ? ((num1 += _0xd208b3), (display[_0x359715(0x13b)] = num1)) : ((num2 += _0xd208b3), (display[_0x359715(0x13b)] = num2)), (previousButton = _0x359715(0x13f));
	},
	add = () => {
		const _0x11424c = _0xcf4ec7;
		if (previousButton === _0x11424c(0x13f)) calculate();
		(operator = _0x11424c(0x135)), (previousButton = _0x11424c(0x135));
	},
	divide = () => {
		const _0x472edd = _0xcf4ec7;
		if (previousButton === _0x472edd(0x13f)) calculate();
		(operator = _0x472edd(0x13c)), (previousButton = _0x472edd(0x13c));
	},
	multiply = () => {
		const _0x4e74e6 = _0xcf4ec7;
		if (previousButton === _0x4e74e6(0x13f)) calculate();
		(operator = _0x4e74e6(0x13e)), (previousButton = _0x4e74e6(0x13e));
	},
	subtract = () => {
		const _0x3801f6 = _0xcf4ec7;
		if (previousButton === 'number') calculate();
		(operator = 'subtract'), (previousButton = _0x3801f6(0x13d));
	},
	calculate = () => {
		const _0x59ea94 = _0xcf4ec7;
		num2 &&
			(operator === _0x59ea94(0x135) && ((display[_0x59ea94(0x13b)] = parseFloat(num1) + parseFloat(num2)), (num1 = display[_0x59ea94(0x13b)]), (num2 = '')),
			operator === _0x59ea94(0x13d) && ((display[_0x59ea94(0x13b)] = parseFloat(num1) - parseFloat(num2)), (num1 = display[_0x59ea94(0x13b)]), (num2 = '')),
			operator === _0x59ea94(0x13c) && ((display[_0x59ea94(0x13b)] = parseFloat(num1) / parseFloat(num2)), (num1 = display[_0x59ea94(0x13b)]), (num2 = '')),
			operator === 'multiply' && ((display[_0x59ea94(0x13b)] = parseFloat(num1) * parseFloat(num2)), (num1 = display[_0x59ea94(0x13b)]), (num2 = ''))),
			display[_0x59ea94(0x13b)] === _0x59ea94(0x140) && ((num1 = ''), (num2 = ''), (operator = null));
	},
	equal = () => {
		calculate(), (operator = null), (num1 = ''), (num2 = '');
	},
	clearCalc = () => {
		(num1 = ''), (num2 = ''), (operator = null), (display['innerHTML'] = '');
	};
function _0x3341() {
	const _0x5ccae1 = [
		'add',
		'4051445HyKbAU',
		'62768raNpeE',
		'54078AcKHBM',
		'623013VamehT',
		'display',
		'innerHTML',
		'divide',
		'subtract',
		'multiply',
		'number',
		'NaN',
		'200FZNwJI',
		'12337137ysEFOD',
		'getElementById',
		'2869038eCFSmk',
		'264zHzCTW',
		'44282xOMKLG',
	];
	_0x3341 = function () {
		return _0x5ccae1;
	};
	return _0x3341();
}
