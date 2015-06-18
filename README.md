## fis-parser-babel

es6 parser for fis


### INSTALL

```bash
npm install -g xiangshouding/fis-parser-babel
```

### USE

- in fis3

	
	```js
	fis.match('/es6/**.js', {
		parser: fis.plugin('babel')
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
			isES6: true
		},
		{
			reg: '**.js',
			isES6: false // 排除其他
		}
	].concat(fis.config.get('roadmap.path', []));
	```