const urllib = require('urllib')

const urls = ['http://example.com', 'https://dzone.com/', 'https://developer.android.com/']

function bodyLength(url, cb) {
	urllib.request(url, (err, body) => {
		if(err) {
			console.log(err)
		} else {
			const size = body.toString().length
			cb(null, size)
			//console.log('>>>>' + url + ' body size: ' + body.toString().length)
		}
	})
}

function sumBodiesLength(urls, cb) {
	let sum = 0
	let count = 0
	urls.forEach(body => {
		bodyLength(body, (err, size) => {
			count++
			if(err) cb(err)
			else {
				sum += size
				if (count == urls.length)
					cb(null, sum)
			}
		})
	})
}

sumBodiesLength(urls, (err,sum) => {
	if (err) console.log(err)
	else console.log('Bodies Size = ' + sum)
})