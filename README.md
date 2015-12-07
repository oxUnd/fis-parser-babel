## fis-parser-babel

es6 parser for fis


### INSTALL

```bash
npm install -g cuidingfeng/fis-parser-babel
```

### USE

- in fis3

	
	```js
	fis.match('/es6/**.js', {
		parser: fis.plugin('babel'),
		notStrict: true //是否不使用严格模式，默认为false，使用严格模式。
	});
	```
	
- in fis

	```js
	fis.config.set('modules.parser.js', 'babel');
	fis.config.set('settings.parser.babel', {
		// options
	});
	
	fis.config.set('roadmap.path', [
		{
			reg: '/es6/**.js',
			notStrict: true, //是否不使用严格模式，默认为false，使用严格模式。
			isES6: true
		},
		{
			reg: '**.js',
			isES6: false // 排除其他
		}
	].concat(fis.config.get('roadmap.path', []));
	```
